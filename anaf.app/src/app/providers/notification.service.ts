import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { LocalNotifications } from 'ionic-native';
import { LoggerService } from './../shared/logger.service';

@Injectable()
export class NotificationService {

  constructor(private log: LoggerService) {

  }
  public add(title: string) {
    LocalNotifications.schedule({
      text: title
    });
    LocalNotifications.on(title, () => {
      alert('test');
    });
  }

  public schedule(startDate: Date, title: string) {
    LocalNotifications.schedule({
      text: title,
      at: new Date(startDate.getDate() - 60 * 60000),
      led: 'FF0000'
    });
    
  }
}