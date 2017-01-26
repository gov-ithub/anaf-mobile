import { Component, OnInit, Input } from '@angular/core';
import { RssFeedItem } from '../../models/index';
import { InAppBrowser } from 'ionic-native';
import { Platform } from 'ionic-angular';

declare var window: any;

@Component({
    selector: 'rss-feed-item',
    templateUrl: 'rss-feed-item.component.html',
    providers: []
})
export class RssFeedItemComponent implements OnInit {

    @Input() feedItem: RssFeedItem;

    constructor(private platform: Platform) {
    }

    ngOnInit() {

    }

    openBrowser(url: string) {

        this.platform.ready().then(() => {
            let options = 'location=no,toolbar=yes,hidden=no';
            let browser = new InAppBrowser(url, "_blank", options);
            browser.show();
        });
     
        // window.open = (url, target?, opts?) => new InAppBrowser(url, '_blank', options);
    }

}