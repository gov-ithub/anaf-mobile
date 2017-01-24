export interface IRssChannelGroup{
    name: string;
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

    equals(channel:RssChannelGroup):Boolean{
        if(this.description==channel.description && this.name == channel.name){
            return true;
        } else{
            return false;
        }
    }
}