import { Component, OnInit, Input } from '@angular/core';
import {RssFeedItem} from '../../models/index';

@Component({
    selector: 'rss-feed-item',
    templateUrl: 'rss-feed-item.component.html'
})
export class RssFeedItemComponent implements OnInit {

    @Input() feedItem:RssFeedItem;

    constructor() { }

    ngOnInit() { 

    }

}