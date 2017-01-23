

export class NotificationItem {
  title: string;
  date: Date;
  constructor(title?: string, date?: Date) {
    this.title = title;
    this.date = date;
  }
}

export class NotificationList {
  list: Array<NotificationItem>;
}