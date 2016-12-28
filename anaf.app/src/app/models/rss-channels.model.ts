import {IRssChannel} from './rss-channel.model';

/**
 * Inteface for RssChannel List
 * 
 * @export
 * @interface IRssChannels
 */
export interface IRssChannels {
    /**
     * Chnnel List. 
     * 
     * E.g.
     * 
     * channels:[{
     *   tag:"BUC_ACH_BUN",
     *   title: "Bucuresti - RSS - Anunturi de achizitie bunuri si servicii",
     *   description:"Bucuresti - RSS",
     *   link:"https://www.anaf.ro/BucurestiRSS/?canal=achizBS"
     * }]
     * 
     * @type {Array<IRssChannel>}
     * @memberOf IRssChannels
     */
    channels: Array<IRssChannel>
}

/**
 * Implements IRssChannels
 * 
 * @export
 * @class RssChannels
 * @implements {IRssChannels}
 */
export class RssChannels implements IRssChannels {
    /**
     * See IRssChannels channels
     * 
     * @type {Array<IRssChannel>}
     * @memberOf RssChannels
     */
    channels: Array<IRssChannel>
}