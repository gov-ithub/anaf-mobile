import { IRssFeed } from './rss-feed.model';

export class NotificationItem {
  title: string;
  date: Date;
  feed: IRssFeed;

  constructor(title?: string, date?: Date, feed?: IRssFeed) {
    this.title = title;
    this.date = date;
    this.feed = feed;
  }
}

export class NotificationList {
  list: Array<NotificationItem>;

  constructor() {
    this.list = new Array<NotificationItem>();
  }
}