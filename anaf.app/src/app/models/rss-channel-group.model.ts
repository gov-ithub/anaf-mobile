/**
 * Model for channel group. Should be used to group rss channels
 * 
 * @export
 * @interface IRssChannelGroup
 */
export interface IRssChannelGroup{
    /**
     * Name used as a key for business logic operations
     * 
     * @type {string}
     * @memberOf IRssChannelGroup
     */
    name: string;
    /**
     * Display information for the user
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

    /**
     * Checks if the given instance is equal to the current instance
     * 
     * @param {RssChannelGroup} channel
     * @returns {Boolean}
     * 
     * @memberOf RssChannelGroup
     */
    equals(channel:RssChannelGroup):Boolean{
        if(this.description==channel.description && this.name == channel.name){
            return true;
        } else{
            return false;
        }
    }
}