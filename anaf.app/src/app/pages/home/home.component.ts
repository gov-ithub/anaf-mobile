import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
/*import {AboutPage} from '../about/about.component';*/
import {ContactPage} from '../contact/contact.component';
import {AsistentaPage} from '../asistenta/asistenta.component';
import {InstrumentePage} from '../instrumente/instrumente.component';
import {InfoPage} from '../info/info.component';
import {TablouPage} from '../tablou/tablou.component';

@Component({
    templateUrl: 'home.component.html'
})
export class HomePage {
    private tablou: any;
    private asistenta: any;
    private instrumente: any;
    private contact: any;
    private info: any;


    constructor() {
        this.tablou = TablouPage;
        this.asistenta = AsistentaPage;
        this.instrumente = InstrumentePage;
        this.contact = ContactPage;
        this.info = InfoPage;
    }

    /*
     onLink(url: string) {
     window.open(url);
     }*/
}
