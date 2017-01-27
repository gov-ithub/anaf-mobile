import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationService } from './../../providers/notification.service';
import { NotificationList } from './../../models';

@Component({
  templateUrl: 'notificari.component.html'
})
export class SampleNotificariPage implements OnInit {
  private items: NotificationList;

  constructor(private navController: NavController, private notif: NotificationService) {
  }

  ngOnInit() {
    this.notif.getList().then((list) => {
      this.items = list;
    }).catch((err) => {
      alert(err);
    });
  }
}
