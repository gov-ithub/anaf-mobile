/**
 * Interface for groupt RSS channels
 * 
 * @export
 * @interface IRssChannelGroup
 */
export interface IRssChannelGroup{
    /**
     * Group name
     * 
     * @type {string}
     * @memberOf IRssChannelGroup
     */
    name: string;
    /**
     * Group description
     * 
     * @type {string}
     * @memberOf IRssChannelGroup
     */
    description: string;
}

/**
 * 
 * 
 * @export
 * @class RssChannelGroup
 * @implements {IRssChannelGroup}
 */
export class RssChannelGroup implements IRssChannelGroup{
    /**
     * See IRssChannelGroup name
     * 
     * @type {string}
     * @memberOf RssChannelGroup
     */
    name:string;
    /**
     * See IRssChannelGroup description
     * 
     * @type {string}
     * @memberOf RssChannelGroup
     */
    description:string;
}