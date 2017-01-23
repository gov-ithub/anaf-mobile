import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Calendar, CalendarOptions } from 'ionic-native';
import { LoggerService } from './../../shared/logger.service';
import { INotify } from './notify.interface';

@Injectable()
export class CalendarNotifyService implements INotify {

  // calendar name
  private readonly CALENDAR_NAME: string = 'Notificari ANAF';

  // android calendar id
  private calendarId: number;

  // if app has access to calendar
  private hasCalendar: boolean;

  // calendar options
  private options: CalendarOptions;

  constructor(public plaform: Platform, public log: LoggerService) {
    this.calendarId = -1;
    this.hasCalendar = false;
    this.init();
  }

  public add(title: string) {
    return new Promise<void>(resolve => {
      throw new TypeError("add method not implemented (yet) in calendar");
    });
  }

  public schedule(title: string, startDate: Date) {
    return new Promise<void>(resolve => {
      if (this.hasCalendar) {
        Calendar.createEventInteractivelyWithOptions(
          title,
          null,
          null,
          startDate,
          new Date(startDate.getDate() + 10 * 60000),
          this.options
        ).then((success) => {
          this.log.debug("event ", title, " at ", startDate);
        });
      }
    });
  } 

  private init() {
    this.plaform.ready().then(() => {

      // set calendar options based on preferences
      this.setCalendarOptions();

      // set calendar
      this.setCalendar();
    });
  }

  private setCalendar(): void {
    Calendar.hasReadWritePermission().then((hasPerm) => {
      var permission: Promise<boolean>;
      if (!hasPerm) {
        this.log.debug("request permission to read/write to calendar");

        permission = Calendar.requestReadWritePermission().then((success) => {
          return success;
        });
      } else {
        permission = Promise.resolve<boolean>(true);
      }

      permission.then((hasPerm) => {
        if (hasPerm) {
          this.log.debug("permission read/write to calendar");
          this.hasCalendar = true;

          Calendar.listCalendars().then((data) => {
            for (let i = 0; i < data.length; i++) {
              if (data[i].name === this.CALENDAR_NAME) {
                this.calendarId = data[i].id;
                break;
              }
              if (this.calendarId <= 0) {
                this.log.debug("calendar not found. start creating calendar");
                Calendar.createCalendar(this.options).then((msg) => {
                  this.log.debug(msg);
                });
              }
            }
          });

        } else {
          this.log.debug("permission denied to read/write to calendar");
          this.hasCalendar = false;
        }
      });
    }).catch((err) => {
      this.log.error(err);
      this.hasCalendar = false;
    });
  }

  private setCalendarOptions(): void {
    this.options = Calendar.getCalendarOptions();
    this.options.firstReminderMinutes = 120;
    this.options.secondReminderMinutes = 15;
    this.options.calendarId = this.calendarId;
    this.options.calendarName = this.CALENDAR_NAME;
  }
}