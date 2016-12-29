import {Component} from '@angular/core';
import {RssService} from '../../providers/rss.service';
import {RssChannel,RssFeed, RssChannels} from '../../models/index';


@Component({
    selector:'rss',
    templateUrl:'rss.component.html',
    providers:[RssService,RssChannel,RssFeed]
})


export class RssComponent{

    private rssFeed:RssFeed;
    
    constructor(private rss:RssService, private rssChannel : RssChannel){ 

        let rssChannelList : RssChannels;

        // this.rss.getChannelList().subscribe(
        //     channels => {
        //         rssChannelList = channels;
        //         console.log(rssChannelList);
        //     },
        //     error=>{
        //         console.log(error);
        //     }
        // );

        // this.rss.getChannel("BUC_ACH_BUN").subscribe(
        //     channel=>{
        //         this.rssChannel = channel;
        //     },
        //     error=>{
        //         console.log(error);
        //     }
        // );
        
    }
    
    getRssFeed():void{
        this.rss.getRssFeed(this.rssChannel)
                .subscribe(
                    result=>{
                        this.rssFeed = result;
                        console.log(this.rssFeed);
                    },
                    error=>{
                         console.log(error);
                    }
                )
    }   
}