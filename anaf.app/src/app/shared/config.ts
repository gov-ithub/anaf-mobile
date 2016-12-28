import {IRssChannels} from '../models/index';
import {OpaqueToken} from '@angular/core';

/**
 * Configuration for RSS Channel List
 */

export const RSS_CHANNEL_LIST: IRssChannels={
    channels:[{
        tag:"BUC_ACH_BUN",
        title: "Bucuresti - RSS - Anunturi de achizitie bunuri si servicii",
        description:"Bucuresti - RSS",
        link:"https://www.anaf.ro/BucurestiRSS/?canal=achizBS",
        channelGroup:{
            name: "ACHIZITII",
            description: "Achizitie de bunuri si servicii"
        }
    }]
}


export const RSS_CHANNEL_LIST_TOKEN = new OpaqueToken('rss_channel_list');