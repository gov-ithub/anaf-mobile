import { Component, OnInit, Input } from '@angular/core';
import { IRssChannel, IRssFeed, RssFeed, RssChannel } from '../../models/index';
import { RssService } from '../../providers/rss.service';

@Component({
    selector: 'rss-feed',
    templateUrl: 'rss-feed.component.html',
    providers: [RssService]
})
export class RssFeedComponent implements OnInit {

    @Input() channel: RssChannel;
    private rssFeed: IRssFeed;
    private error: any;

    constructor(private rss: RssService) {
        this.rssFeed = new RssFeed();


    }

    ngOnInit() {

        if (this.channel) {
            this.getRssFeed(this.channel);
        }
    }

    public getRssFeed(rssChannel: IRssChannel): void {
        this.rss.getRssFeed(rssChannel).subscribe(rssFeed => {
            this.rssFeed = rssFeed;
        }, error => {
            this.error = error;
            console.error(error);
        });
    }

}