import {IRssChannel} from './rss-channel.model';
import {IRssFeedItem} from './rss-feed-item.model';



/**
 * Interface for RSS Feed
 * 
 * @export
 * @interface IRssFeed
 */
export interface IRssFeed{
    /**
     * See Rss channel
     * 
     * @type {IRssChannel}
     * @memberOf IRssFeed
     */
    channel: IRssChannel;
    /**
     * Array of Rss feed items (See Rss Feed Item)
     * 
     * @type {Array<IRssFeedItem>}
     * @memberOf IRssFeed
     */
    feed: Array<IRssFeedItem>;
}

/**
 * 
 * 
 * @export
 * @class RssFeed
 * @implements {IRssFeed}
 */
export class RssFeed implements IRssFeed{
    /**
     * See IRssFeed channel
     * 
     * @type {IRssChannel}
     * @memberOf RssFeed
     */
    channel : IRssChannel;
    /**
     * See IRssFeed channel
     * 
     * @type {Array<IRssFeedItem>}
     * @memberOf RssFeed
     */

    feed : Array<IRssFeedItem>
}