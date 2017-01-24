import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import '../rxjs-operators';
import { Observable } from 'rxjs/Observable';
import { RssChannels, RssChannel, RssFeed, RssFeedItem, RssChannelGroup } from '../models/index';
import { RSS_CHANNEL_LIST_TOKEN } from '../shared/config';

/**
 * External library required for XML to JSON parsing
 */
import xmljs from 'xml-js';


/**
 * Service provider for:
 * - reading RSS channel list from configuration file
 * - finding a specific RSS channel from configuration file
 * - reading RSS Feed from a specific RSS channel. The output is served as a JSON object
 * 
 * @export
 * @class RssService
 */
@Injectable()
export class RssService {

    /**
     * Creates an instance of RssService.
     * 
     * @param {Http} http
     * @param {RssChannels} rss_channel_list
     * 
     * @memberOf RssService
     */
    constructor(private http: Http, @Inject(RSS_CHANNEL_LIST_TOKEN) private rss_channel_list: RssChannels) {
    }


    public getChannelList(): Observable<Array<RssChannel>>;
    public getChannelList(filterBy?: string, filterValue?: RssChannelGroup): Observable<Array<RssChannel>>;
    public getChannelList(filterBy?: string, filerValue?: string): Observable<Array<RssChannel>>;
    public getChannelList(filterBy?: string, filerValue?: Array<string>): Observable<Array<RssChannel>>;
    public getChannelList(filterBy?: string, filerValue?: Array<RssChannelGroup>): Observable<Array<RssChannel>>;


    /**
     * Returns the channel list from configuration file
     * 
     * @returns {Observable<IRssChannels>}
     * 
     * @memberOf RssService
     */
    getChannelList(filterBy?: string, filterValue?: any): Observable<any> {
        /**
         * 
         * 
         * @param {any} observer
         */
        let channelList = new Observable(observer => {

            if (filterBy == undefined) {

                observer.next(this.rss_channel_list);
            }

            if (filterBy != undefined) {
                let result = new Array<RssChannel>();
                let comparator: any;
                for (let channel of this.rss_channel_list.channels) {
                    switch (filterBy) {
                        case "tag":
                            comparator = channel.tag;
                            break;
                        case "title":
                            comparator = channel.title;
                            break;
                        case "description":
                            comparator = channel.description
                            break;
                        case "channelGroup":
                            comparator = channel.channelGroup;
                            break;

                    }

                    if (typeof filterValue == "string" && comparator == filterBy) {
                        result.push(channel);
                    } else if (typeof filterValue == "object" && !(filterValue instanceof Array)) {
                        let group = new RssChannelGroup();
                        group.description = filterValue.description;
                        group.name = filterValue.name;
                        if (group.equals(comparator)) {
                            result.push(channel);
                        }
                    } else if (filterValue instanceof Array && typeof filterValue[0] == "string" && (<Array<string>>filterValue).indexOf(comparator) >= 0) {
                        result.push(channel);
                    } else if (filterValue instanceof Array && typeof filterValue[0] == "object") {

                        for (let item of filterValue) {

                            let group = new RssChannelGroup();
                            group.description = item.description;
                            group.name = item.name;
                            if (group.equals(comparator)) {
                                result.push(channel);
                            }
                        }
                    }
                }

                observer.next(result);
            }


            observer.complete();

        });

        return channelList;
    }


    /**
     * Returns an instance of RssChannel from configuration file, based on channel tag
     * 
     * @param {string} tag
     * @returns {Observable<IRssChannel>}
     * 
     * @memberOf RssService
     */
    getChannel(tag: string): Observable<RssChannel> {
        /**
         * Channel tag. See IRssChannel tag
         * 
         * @param {any} observer
         */
        let channel = new Observable(observer => {

            let requestedChannel = new RssChannel();

            for (let channel of this.rss_channel_list.channels) {

                if (tag == channel.tag) {
                    requestedChannel = channel;

                }
            }

            observer.next(requestedChannel);
            observer.complete();

        });

        return channel;
    }

    public getRssChannelGroups(): Observable<Array<RssChannelGroup>>;
    public getRssChannelGroups(filterBy: string, filterValue: string): Observable<Array<RssChannelGroup>>;
    public getRssChannelGroups(filterBy: string, filterValue: Array<string>): Observable<Array<RssChannelGroup>>;

    getRssChannelGroups(filterBy?: string, filterValue?: any): Observable<Array<RssChannelGroup>> {
        let channelGroups = new Observable(observer => {
            let rssChannelGroups = new Map<string, RssChannelGroup>();
            for (let channel of this.rss_channel_list.channels) {
                if (!rssChannelGroups.has(channel.channelGroup.name)) {
                    rssChannelGroups.set(channel.channelGroup.name, <RssChannelGroup>channel.channelGroup);
                }
            }
            
            let result = new Array<RssChannelGroup>();

            if (filterBy != undefined) {
                rssChannelGroups.forEach(group => {
                    let comparator: any;
                    // group.
                    switch (filterBy) {
                        case "name":
                            comparator = group.name;
                            break;
                        case "description":
                            comparator = group.description;
                            break;
                    }

                    if (typeof filterValue == "string" && comparator == filterValue) {
                        result.push(group);
                    } else if (filterValue instanceof Array && (<Array<string>>filterValue).indexOf(comparator) >= 0) {
                        result.push(group);
                    }
                });
            } else {
                rssChannelGroups.forEach(group => result.push(group));
            }

            observer.next(result);
            observer.complete();
        });

        return channelGroups;
    }

    getRssChannelGroup(name: string): Observable<RssChannelGroup> {
        let result = new RssChannelGroup();
        let channelGroup = new Observable(observer => {
            this.getRssChannelGroups("name", name).subscribe(groups => {
                groups.forEach(group => {
                    if (group.name == name) {
                        result = group;
                        return;
                    }
                })
            });

            observer.next(result);
            observer.complete();
        });

        return channelGroup;
    }

    /**
     * Reads a RSS Feed and returns the result as JSON
     * 
     * @param {RssChannel} channel
     * @returns {Observable<any>}
     * 
     * @memberOf RssService
     */
    getRssFeed(channel: RssChannel): Observable<RssFeed> {
        let headers: Headers = new Headers();

        headers.append('Accept', 'application/xml');

        return this.http.get(channel.link, { headers: headers })
            .map(response => {
                return this.convertToJson(response, channel);
            })
            .catch(this.handleError);

    }


    /**
     * Convert XML RSS Feed to JSON
     * 
     * @requires xml-js library
     * @private
     * @param {Response} response
     * @returns {RssFeed}
     * 
     * @memberOf RssService
     */
    private convertToJson(response: Response, channel: RssChannel): RssFeed {

        let body = (<any>response)._body;
        let jsonBody = JSON.parse(xmljs.xml2json(body, { compact: true, ignoreDeclaration: true, ignoreComment: true }));
        let rssFeed = new RssFeed();

        rssFeed.channel = channel;
        rssFeed.feed = [];

        for (let feedItem of jsonBody.rss.channel.item) {
            let item = new RssFeedItem();
            item.description = feedItem.description._text;
            item.link = feedItem.link._text;
            item.pubDate = feedItem.pubDate._text;
            item.title = feedItem.title._text;
            rssFeed.feed.push(item);
        }

        return rssFeed;
    }



    /**
     * Handle errors
     * 
     * @private
     * @param {(Response | any)} error
     * @returns
     * 
     * @memberOf RssService
     */
    private handleError(error: Response | any) {
        let errorMsg: {
            /**
             * The numeric code of the error
             * 
             * @type {number}
             */
            errorCode: number;
            /**
             * Error description
             * 
             * @type {string}
             */
            errorMessage: string;
        };

        if (error instanceof Response) {

            errorMsg = { errorCode: error.status, errorMessage: error.statusText };

        } else {
            errorMsg = { errorCode: 500, errorMessage: error.message ? error.message : error.toString() };
        }

        console.error(errorMsg);
        return Observable.throw(errorMsg);

    }

}