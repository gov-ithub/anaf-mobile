import { Injectable } from '@angular/core';
import { LocalNotifications } from 'ionic-native';
import { LoggerService } from './../../shared/logger.service';
import { INotify } from './notify.interface';
import { Storage } from '@ionic/storage';
import { NotificationItem, NotificationList } from './../../models';

@Injectable()
export class AppNotifyService implements INotify {

  private readonly KEY: string = "anaf_notifications";

  constructor(private log: LoggerService, private storage: Storage) {
  }

  public add(title: string) {
    return new Promise<boolean>(resolve => {
      this.getList().then((notifyList) => {
        notifyList.list = notifyList.list.concat(new NotificationItem(title));
        this.storage.set(this.KEY, notifyList).then(() => {
          this.log.debug("notification added ");
          resolve(true);
        });
      });
    });
  }

  public schedule(title: string, startDate: Date) {
    return new Promise<boolean>(resolve => {
      this.getList().then((notifyList) => {
        notifyList.list = notifyList.list.concat(new NotificationItem(title, startDate));
        this.storage.set(this.KEY, notifyList).then(() => {
          this.log.debug("notification scheduled ");
          resolve(true);
        })
      });
    });
  }

  public getList() {
    return new Promise<NotificationList>(resolve => {
      let notifyList: NotificationList = new NotificationList();
      this.storage.get(this.KEY).then((listValue) => {
        if (listValue) {
          notifyList = listValue;
        } else {
          notifyList = new NotificationList();
        }
        resolve(notifyList);
      });
    });
  }
}