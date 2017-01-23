import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { NotificationService } from './../../providers/notification.service';
import { LoggerService } from './../../shared/logger.service';
import { SampleNotificariPage } from './notificari.component';

@Component({
  selector: 'page-sample-calendar',
  templateUrl: 'calendar.component.html'
})

export class SampleCalendarPage {

  constructor(public navController: NavController, public platform: Platform, public notify: NotificationService, private log: LoggerService) { }

  ionViewDidLoad() {
    console.log('Hello Calendar sample Page');
  }

  create_notification() {
    this.notify.createNotification("Test ANAF", new Date(Date.now() + 60 * 60000)).then((resonse) => {
      this.log.debug("event created");
    }).catch((err) => {
      this.log.error(err);
    });
  }

  show_notifications() {
    this.navController.push(SampleNotificariPage);
  }
}
