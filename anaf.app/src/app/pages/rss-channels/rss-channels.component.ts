import { Component, OnInit } from '@angular/core';
import {RssService} from '../../providers/rss.service';

@Component({
    selector: 'rss-channels',
    templateUrl: 'rss-channels.component.html',
    providers:[RssService]
})
export class RssChannelPage implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}