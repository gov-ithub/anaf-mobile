import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Jsonp, Http, Response, Headers } from '@angular/http';
import '../rxjs-operators';
import { Observable } from 'rxjs/Observable';
import { RssChannels, RssChannel, RssFeed, RssFeedItem } from '../models/index';
import { RSS_CHANNEL_LIST, RSS_CHANNEL_LIST_TOKEN } from '../shared/config';

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


    /**
     * Returns the channel list from configuration file
     * 
     * @returns {Observable<RssChannels>}
     * 
     * @memberOf RssService
     */
    getChannelList(): Observable<RssChannels> {
        /**
         * 
         * 
         * @param {any} observer
         */
        let channelList = new Observable(observer => {
            observer.next(this.rss_channel_list);
            observer.complete();

        });

        return channelList;
    }


    /**
     * Returns an instance of RssChannel from configuration file, based on channel tag
     * 
     * @param {string} tag
     * @returns {Observable<RssChannel>}
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
            item.description = feedItem.description;
            item.link = feedItem.link;
            item.pubDate = feedItem.pubDate;
            item.title = feedItem.title;
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