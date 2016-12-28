/**
 * Interface for RssChannel
 * 
 * @export
 * @interface IRssChannel
 */
export interface IRssChannel {
    /**
     * Channel ID. Should be unque. E.g."BUC_ACH_BUN"
     * 
     * @type {string}
     * @memberOf IRssChannel
     */
    tag: string;
    /**
     * Channel title
     * 
     * @type {string}
     * @memberOf IRssChannel
     */
    title: string;
    /**
     * Channel description
     * 
     * @type {string}
     * @memberOf IRssChannel
     */
    description: string;
    /**
     * Channel url. E.g. "https://www.anaf.ro/BucurestiRSS/?canal=achizBS"
     * 
     * @type {string}
     * @memberOf IRssChannel
     */
    link: string;
}


/**
 * Implements IRssChannel interface
 * 
 * @export
 * @class RssChannel
 * @implements {IRssChannel}
 */
export class RssChannel implements IRssChannel {
    /**
     * See IRssChannel tag
     * 
     * @type {string}
     * @memberOf RssChannel
     */
    public tag: string;
    /**
     * See IRssChannel title
     * 
     * @type {string}
     * @memberOf RssChannel
     */
    public title: string;
    /**
     * See IRssChannel description
     * 
     * @type {string}
     * @memberOf RssChannel
     */
    public description: string;
    /**
     * See RssChannel link
     * 
     * @type {string}
     * @memberOf RssChannel
     */
    public link: string;
}