import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage, AboutPage, ContactPage, AsistentaPage, RssComponent, RssFeedComponent, RssFeedItemComponent  } from './pages/index';
import { RssService } from './providers/rss.service';
import { RSS_CHANNEL_LIST_TOKEN, RSS_CHANNEL_LIST } from './shared/config';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AboutPage,
        ContactPage,
        AsistentaPage,
        RssComponent,
        RssFeedComponent,
        RssFeedItemComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        RssService,
        { provide: RSS_CHANNEL_LIST_TOKEN, useValue: RSS_CHANNEL_LIST } //required for RSS Channel List configuration
    ],
    entryComponents: [
        HomePage,
        AboutPage,
        ContactPage,
        AsistentaPage
    ]
})
export class AppModule { } 