import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { CalendarService } from './../../providers/calendar.service';
import { LoggerService } from './../../shared/logger.service';

@Component({
  selector: 'page-sample-calendar',
  templateUrl: 'calendar.component.html'
})

export class SampleCalendarPage {

  constructor(public navController: NavController, public platform: Platform, public calendar: CalendarService, private log: LoggerService) { }

  ionViewDidLoad() {
    console.log('Hello Calendar sample Page');
  }

  create_calendar() {
    this.calendar.createNotification(new Date(Date.now() + 60 * 60000), "Test anaf").then((resonse) => {
      this.log.debug("event created");
    }).catch((err) => {
      this.log.error(err);
    });
  }
}
