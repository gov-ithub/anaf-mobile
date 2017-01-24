import { Component, OnInit, Input } from '@angular/core';
import { NotificationList } from '../../models/index';
import { NotificationService } from './../../providers/notification.service';

@Component({
  selector: 'alerts',
  templateUrl: 'alerts.component.html'
})
export class AlertsComponent implements OnInit {

  @Input() items: NotificationList;

  constructor(private notif: NotificationService) { }

  ngOnInit() {
    
  }
}