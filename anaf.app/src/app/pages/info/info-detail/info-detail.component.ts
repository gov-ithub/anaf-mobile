import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RssService } from '../../../providers/rss.service';
import { IRssCategoryListItem, RssCategoryListItem, IRssChannel } from '../../../models/index';

@Component({
    selector: 'info-page-detail',
    templateUrl: 'info-detail.component.html',
    providers: [RssService],
})
export class InfoDetailPage implements OnInit {

    private listItems: Array<RssCategoryListItem>;
    private listName: string;
    private rssChannel:IRssChannel;

    constructor(private navCtrl: NavController, private options: NavParams, private rss: RssService) {
        let parentSelectedItem = <IRssCategoryListItem>this.options.get("options");
        this.listName = parentSelectedItem.name;

        this.listItems = new Array<RssCategoryListItem>();
        this.prepareList(parentSelectedItem.value.filterBy, parentSelectedItem.value.filterValue);

    }

    ngOnInit() {
    }

    itemSelectedListener(event): void {

        let listItem = this.listItems[event.value];
        this.navCtrl.push(InfoDetailPage, { options: listItem });
    }



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