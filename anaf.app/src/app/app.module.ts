import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage, ContactPage, AsistentaPage, InstrumentePage, InfoPage, TablouPage} from './pages/index';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        //  AboutPage,
        ContactPage,
        AsistentaPage,
        InstrumentePage,
        InfoPage,
        TablouPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
    entryComponents: [
        HomePage,
        //AboutPage,
        ContactPage,
        AsistentaPage,
        InstrumentePage,
        InfoPage,
        TablouPage
    ]
})
export class AppModule {
}