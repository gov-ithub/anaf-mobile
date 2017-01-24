import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SampleCalendarPage } from './../samples/calendar.component';
import { NotificationService } from './../../providers/notification.service';
import { NotificationList } from './../../models';

/*
  Generated class for the Tablou page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tablou',
  templateUrl: 'tablou.component.html'
})
export class TablouPage implements OnInit {

  items: NotificationList

  constructor(public navController: NavController, private notif: NotificationService) {}
  ngOnInit() {
    this.items = new NotificationList();
  }

  ionViewWillEnter() {
    this.notif.getList().then((list) => {
      this.items = list;
    });
  }

  sample_calendar() {
    this.navController.push(SampleCalendarPage);
  }
}
