import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RssService } from '../../providers/rss.service';
import { RssChannel, IRssChannel } from '../../models/rss-channel.model';

@Component({
  templateUrl: 'about.component.html',
  providers: [RssService]
})
export class AboutPage {

  rssChannel: IRssChannel;

  constructor(private navController: NavController, private rss: RssService) {
    this.rssChannel = new RssChannel();
    this.rss.getChannel("BUC_ACH_BUN").subscribe(channel => {
      this.rssChannel = channel;
    },
      error => {
        console.error(error);
      });
  }
}
