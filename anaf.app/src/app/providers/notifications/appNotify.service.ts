import { Injectable } from '@angular/core';
import { LocalNotifications } from 'ionic-native';
import { LoggerService } from './../../shared/logger.service';
import { INotify } from './notify.interface';
import { Storage } from '@ionic/storage';
import { NotificationItem, NotificationList } from './../../models';

@Injectable()
export class AppNotifyService implements INotify {

  constructor(private log: LoggerService, private storage: Storage) {
  }

  public add(title: string) {
    return new Promise<boolean>(result => {
      this.getList().then((notifyList) => {
        notifyList.list = notifyList.list.concat(new NotificationItem(title));
        this.storage.set("anaf_notifications", notifyList).then(() => {
          this.log.debug("notification added ");
          return true;
        });
      });
    });
  }

  public schedule(title: string, startDate: Date) {
    return new Promise<boolean>(result => {
      this.storage.get("anaf:notifications").then((listValue) => {
        let notifyList: NotificationList = new NotificationList();

        if (listValue) {
          notifyList.list = listValue;
        } else {
          notifyList.list = new Array<NotificationItem>();
        }

        notifyList.list = notifyList.list.concat(new NotificationItem(title, startDate));
        this.storage.set("anaf:notifications", notifyList.list).then(() => {
          this.log.debug("notification added ");
          return true;
        })
      });
    });

  }

  public getList() {
    return new Promise<NotificationList>(() => {
      let notifyList: NotificationList = new NotificationList();
      this.storage.get("anaf_notifications").then((listValue) => {
        if (listValue) {
          notifyList = listValue;
        } else {
          notifyList = new NotificationList();
        }
        return notifyList;
      });
    });
  }
}