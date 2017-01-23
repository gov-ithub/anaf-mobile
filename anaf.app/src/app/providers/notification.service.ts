import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LoggerService } from './../shared/logger.service';
import { INotify } from './notifications/notify.interface';
import { LocalNotifyService } from './notifications/localNotify.service';
import { CalendarNotifyService } from './notifications/calendarNotify.service';
import { AppNotifyService } from './notifications/appNotify.service';

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

  public createNotification(title: string, startDate: Date) {
    this.log.debug("createNotification started");
    return new Promise<boolean>(resolve => {
      this.schedule(this.localNotify, title, startDate);
      this.schedule(this.calendarNotify, title, startDate);
      this.schedule(this.appNotify, title, startDate);
    });
  }

  private schedule(notifService: INotify, title: string, startDate: Date): void {
    notifService.schedule(title, startDate);
  }
}