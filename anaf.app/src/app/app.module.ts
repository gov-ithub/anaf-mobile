import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
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
    RssFeedItemComponent
} from './pages/index';
import { RssService } from './providers/rss.service';
import { RSS_CHANNEL_LIST_TOKEN, RSS_CHANNEL_LIST } from './shared/config';
/*import {AboutPage} from "./pages/about/about.component";*/

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
        InstrumenteCalculatorTvaPage
    ]
})
export class AppModule {
}