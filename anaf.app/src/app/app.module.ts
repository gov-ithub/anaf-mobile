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
    InstrumenteCalculatorTvaPage
} from './pages/index';
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
        InstrumenteCalculatorTvaPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
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