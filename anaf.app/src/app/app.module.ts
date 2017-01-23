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
  RssFeedComponent,
  RssFeedItemComponent,
  SampleCalendarPage
} from './pages/index';
import { RssService } from './providers/rss.service';
import { RSS_CHANNEL_LIST_TOKEN, RSS_CHANNEL_LIST } from './shared/config';
import { LoggerService } from './shared/logger.service';


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
    SampleCalendarPage
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
    LoggerService
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
    SampleCalendarPage
  ]
})
export class AppModule {
}