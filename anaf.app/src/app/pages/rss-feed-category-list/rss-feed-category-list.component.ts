import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RssCategoryListItem } from '../../models/index';

/**
 * Displays a ionic list component
 * 
 * @export
 * @class RssCategoryListComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'rss-channel-category',
    templateUrl: 'rss-feed-category-list.component.html',
    providers: []
})
export class RssCategoryListComponent implements OnInit {

    /**
     * The text displayed in the header of the list
     * 
     * @type {string}
     * @memberOf RssCategoryListComponent
     */
    @Input() listName: string;
    /**
     * List items
     * 
     * @type {Array<RssCategoryListItem>}
     * @memberOf RssCategoryListComponent
     */
    @Input() listItems: Array<RssCategoryListItem>;
    /**
     * 
     * Generates an event for each click on a list item
     * 
     * @memberOf RssCategoryListComponent
     */
    @Output() itemSelectedEvent = new EventEmitter();

    /**
     * Creates an instance of RssCategoryListComponent.
     * 
     * 
     * @memberOf RssCategoryListComponent
     */
    constructor() {
    
    }

    /**
     * If no data is provided, an empty list is created
     * 
     * 
     * @memberOf RssCategoryListComponent
     */
    ngOnInit() {

        if(this.listItems==undefined){
            this.listItems = new Array<RssCategoryListItem>();
        }
    }


    /**
     * Emits an event with the id of the selected item 
     * 
     * @param {number} id
     * 
     * @memberOf RssCategoryListComponent
     */
    itemSelected(id:number):void{
        this.itemSelectedEvent.emit({
            value:id
        });
    }

}