import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import '../rxjs-operators';
import { Observable } from 'rxjs/Observable';
import { RssChannels, IRssChannels,IRssChannel, RssChannel, RssFeed, RssFeedItem, IRssFeed } from '../models/index';
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


    /**
     * Returns the channel list from configuration file
     * 
     * @returns {Observable<IRssChannels>}
     * 
     * @memberOf RssService
     */
    getChannelList(): Observable<IRssChannels> {
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
     * @returns {Observable<IRssChannel>}
     * 
     * @memberOf RssService
     */
    getChannel(tag: string): Observable<IRssChannel> {
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
    getRssFeed(channel: IRssChannel): Observable<IRssFeed> {
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
    private convertToJson(response: Response, channel: IRssChannel): IRssFeed {

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