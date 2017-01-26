import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {
  HomePage,
  ContactPage,
  ContactSediiPage,
  ContactSesizarePage,
  AsistentaPage,
  InstrumentePage,
  InfoPage,
  TablouPage,
  InstrumenteVerificareCifPage,
  InstrumenteCalculatorVenitPage,
  InstrumenteCalculatorTaxaAutoPage,
  InstrumenteCalculatorTvaPage,
  AlertsComponent,
  SampleCalendarPage,
  SampleNotificariPage,
  InfoDetailPage,
  RssFeedComponent,
  RssFeedItemComponent,
  RssCategoryListComponent
} from './pages/index';
import { RssService } from './providers/rss.service';
import { RSS_CHANNEL_LIST_TOKEN, RSS_CHANNEL_LIST, CONFIG_TOKEN, Config } from './shared/config';
import { LoggerService } from './shared/logger.service';
import { Logger } from 'angular2-logger/core';
import { NotificationService } from './providers/notification.service';
import { Storage } from '@ionic/storage';
import { LocalNotifyService, CalendarNotifyService, AppNotifyService } from './providers/notifications';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    ContactSediiPage,
    ContactSesizarePage,
    AsistentaPage,
    InstrumentePage,
    InfoPage,
    TablouPage,
    InstrumenteVerificareCifPage,
    InstrumenteCalculatorVenitPage,
    InstrumenteCalculatorTaxaAutoPage,
    InstrumenteCalculatorTvaPage,
    RssFeedComponent,
    RssFeedItemComponent,
    AlertsComponent,
    SampleCalendarPage,
    SampleNotificariPage,
    InfoDetailPage,
    RssFeedComponent,
    RssFeedItemComponent,
    RssCategoryListComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RssService,
    //required for RSS Channel List configuration
    { provide: RSS_CHANNEL_LIST_TOKEN, useValue: RSS_CHANNEL_LIST },
    { provide: CONFIG_TOKEN, useValue: Config},
    Logger,
    LoggerService,
    LocalNotifyService,
    AppNotifyService,
    CalendarNotifyService,
    NotificationService,
    Storage
  ],
  entryComponents: [
    HomePage,
    ContactPage,
    ContactSediiPage,
    ContactSesizarePage,
    AsistentaPage,
    InstrumentePage,
    InfoPage,
    TablouPage,
    InstrumenteVerificareCifPage,
    InstrumenteCalculatorVenitPage,
    InstrumenteCalculatorTaxaAutoPage,
    InstrumenteCalculatorTvaPage,
    SampleCalendarPage,
    SampleNotificariPage,
    InfoDetailPage
  ]
})
export class AppModule {
}