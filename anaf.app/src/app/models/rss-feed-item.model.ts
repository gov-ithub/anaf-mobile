
/**
 * Interface for RSS Feed Item
 * 
 * @export
 * @interface IRssFeedItem
 */
export interface IRssFeedItem{
    /**
     * Description
     * 
     * @type {string}
     * @memberOf IRssFeedItem
     */
    description: string;
    /**
     * External URL
     * 
     * @type {string}
     * @memberOf IRssFeedItem
     */
    link:string;
    /**
     * Publish date
     * 
     * @type {string}
     * @memberOf IRssFeedItem
     */
    pubDate: string;
    /**
     * Title
     * 
     * @type {string}
     * @memberOf IRssFeedItem
     */
    title: string;
}

/**
 * Implementation of IRssFeedItem
 * 
 * @export
 * @class RssFeedItem
 * @implements {IRssFeedItem}
 */
export class RssFeedItem implements IRssFeedItem{
    /**
     * See IRssFeedItem description
     * 
     * @type {string}
     * @memberOf RssFeedItem
     */
    description: string;
    /**
     * See IRssFeedItem link
     * 
     * @type {string}
     * @memberOf RssFeedItem
     */
    link:string;
    /**
     * See IRssFeedItem pubDate
     * 
     * @type {string}
     * @memberOf RssFeedItem
     */
    pubDate: string;
    /**
     * See IRssFeedItem title
     * 
     * @type {string}
     * @memberOf RssFeedItem
     */

    title: string;
}