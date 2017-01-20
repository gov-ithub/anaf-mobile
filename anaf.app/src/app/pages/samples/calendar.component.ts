import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Calendar } from 'ionic-native';

@Component({
  selector: 'page-sample-calendar',
  templateUrl: 'calendar.component.html'
})

export class SampleCalendarPage {

  constructor(public navController: NavController) { }

  ionViewDidLoad() {
    console.log('Hello Calendar sample Page');
  }

  create_calendar() {
    Calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }
}
