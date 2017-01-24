import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LoggerService } from './../shared/logger.service';
import { INotify } from './notifications/notify.interface';
import { LocalNotifyService, CalendarNotifyService, AppNotifyService } from './notifications';
import { NotificationList, IRssFeed } from './../models';

/**
  * Notification Service
  * TODO: schedule with options
  */
@Injectable()
export class NotificationService {

  constructor(
    public plaform: Platform,
    public log: LoggerService,
    private localNotify: LocalNotifyService,
    private calendarNotify: CalendarNotifyService,
    private appNotify: AppNotifyService) {
  }

  public createNotification(title: string, startDate: Date, rssFeed?: IRssFeed) {
    this.log.debug("NotificationService.createNotification");
    return new Promise<boolean>(resolve => {
      this.schedule(this.localNotify, title, startDate, rssFeed);
      this.schedule(this.calendarNotify, title, startDate, rssFeed);
      this.schedule(this.appNotify, title, startDate, rssFeed);
      resolve(true);
    });
  }

  private schedule(notifService: INotify, title: string, startDate: Date, rssFeed?: IRssFeed): void {
    notifService.schedule(title, startDate, rssFeed);
  }

  public getList() {
    this.log.debug("NotificationService.getList");
    return this.appNotify.getList();
  }
}