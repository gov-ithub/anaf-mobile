import {IRssChannel} from './rss-channel.model';
import {IRssFeedItem} from './rss-feed-item.model';


export interface IRssFeed{
    channel: IRssChannel;
    feed: Array<IRssFeedItem>;
}

export class RssFeed implements IRssFeed{
    channel : IRssChannel;
    feed : Array<IRssFeedItem>
}