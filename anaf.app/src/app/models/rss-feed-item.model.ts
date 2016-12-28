export interface IRssFeedItem{
    description: string;
    link:string;
    pubDate: string;
    title: string;
}

export class RssFeedItem implements IRssFeedItem{
    description: string;
    link:string;
    pubDate: string;
    title: string;
}