import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
/*import {AboutPage} from "../about/about.component";*/
import {InstrumenteVerificareCifPage} from "./verificare-cif/instrumente-verificare-cif";
import {InstrumenteCalculatorVenitPage} from "./calculator-venit/instrumente-calculator-venit";
import {InstrumenteCalculatorTaxaAutoPage} from "./calculator-taxa-auto/instrumente-calculator-taxa-auto";
import {InstrumenteCalculatorTvaPage} from "./calculator-tva/instrumente-calculator-tva";


@Component({
    selector: 'page-instrumente',
    templateUrl: 'instrumente.component.html'
})
export class InstrumentePage {


    constructor(private navCtrl: NavController) {
    }

    verificareCif() {
        this.navCtrl.push(InstrumenteVerificareCifPage);
    }

    calculatorVenit() {
        this.navCtrl.push(InstrumenteCalculatorVenitPage);
    }

    calculatorTaxaAuto() {
        this.navCtrl.push(InstrumenteCalculatorTaxaAutoPage);
    }

    calculatorTva() {
        this.navCtrl.push(InstrumenteCalculatorTvaPage);
    }


}
