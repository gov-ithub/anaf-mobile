import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RssCategoryListItem } from '../../models/index';

@Component({
    selector: 'rss-channel-category',
    templateUrl: 'rss-feed-category-list.component.html',
    providers: []
})
export class RssCategoryListComponent implements OnInit {

    @Input() listName: string;
    @Input() listItems: Array<RssCategoryListItem>;
    @Output() itemSelectedEvent = new EventEmitter();

    constructor() {
    
    }

    ngOnInit() {

        if(this.listItems==undefined){
            this.listItems = new Array<RssCategoryListItem>();
        }
    }


    itemSelected(id:number):void{
        this.itemSelectedEvent.emit({
            value:id
        });
    }

}