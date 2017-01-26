import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RssService } from '../../../providers/rss.service';
import { IRssCategoryListItem, RssCategoryListItem, IRssChannel } from '../../../models/index';

/**
 * Subcategory page for rss list item
 * 
 * @export
 * @class InfoDetailPage
 * @implements {OnInit}
 */
@Component({
    selector: 'info-page-detail',
    templateUrl: 'info-detail.component.html',
    providers: [RssService],
})
export class InfoDetailPage implements OnInit {

    private listItems: Array<RssCategoryListItem>;
    private listName: string;
    private rssChannel:IRssChannel;

    /**
     * Creates an instance of InfoDetailPage.
     * 
     * @param {NavController} navCtrl
     * @param {NavParams} options
     * @param {RssService} rss
     * 
     * @memberOf InfoDetailPage
     */
    constructor(private navCtrl: NavController, private options: NavParams, private rss: RssService) {
        let parentSelectedItem = <IRssCategoryListItem>this.options.get("options");
        this.listName = parentSelectedItem.name;

        this.listItems = new Array<RssCategoryListItem>();
        this.prepareList(parentSelectedItem.value.filterBy, parentSelectedItem.value.filterValue);

    }

    /**
     * 
     * 
     * 
     * @memberOf InfoDetailPage
     */
    ngOnInit() {
    }

    /**
     * Event listener for the click events emmited from rss-feed-category-list. 
     * 
     * @param {any} event
     * 
     * @memberOf InfoDetailPage
     */
    itemSelectedListener(event): void {

        let listItem = this.listItems[event.value];
        this.navCtrl.push(InfoDetailPage, { options: listItem });
    }


    
    /**
     * Prepares the data for rss-feed-category-list Array<RssCategoryListItem>
     * 
     * @private
     * @param {string} filterBy 
     * @param {*} filterValue
     * 
     * @memberOf InfoDetailPage
     */
    private prepareList(filterBy: string, filterValue: any) {

        switch (filterBy) {
            case "channelGroups":
                this.rss.getRssChannelGroups("name", filterValue).subscribe(groups => {
                    groups.forEach(group => {
                        this.listItems.push(new RssCategoryListItem(this.listItems.length, group.description, { filterBy: "channelGroup", filterValue: group }));

                    });
                }, error => { console.log(error) });
                break;
            case "channelGroup":
                this.rss.getRssChannelGroup(filterValue.name).subscribe(group => {
                    this.rss.getChannelList("channelGroup", group).subscribe(channels => {
                        channels.forEach(channel => {
                            this.listItems.push(new RssCategoryListItem(this.listItems.length, channel.description, { filterBy: "tag", filterValue: channel.tag }));
                        });

                    }, error => { console.log(error) });
                }, error => { console.log(error) });
                break;
            case "tag":
                this.rss.getChannel(filterValue).subscribe(channel=>{
                    this.rssChannel = channel;
                },error=>{});
            break;    
        }
    }
} 