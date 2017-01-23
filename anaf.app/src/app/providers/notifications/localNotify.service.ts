import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { LocalNotifications } from 'ionic-native';
import { LoggerService } from './../../shared/logger.service';
import { INotify } from './notify.interface';

@Injectable()
export class LocalNotifyService implements INotify {

  constructor(private log: LoggerService) {
  }

  public add(title: string) {
    return new Promise<boolean>(result => {
      LocalNotifications.schedule({
        text: title
      });
      LocalNotifications.on(title, () => {
        alert('test');
      });
      return true;
    });
    
  }

  public schedule(title: string, startDate: Date) {
    return new Promise<boolean>(result => {
      LocalNotifications.schedule({
        text: title,
        at: new Date(startDate.getDate() - 60 * 60000),
        led: 'FF0000'
      });
    });
  }
}