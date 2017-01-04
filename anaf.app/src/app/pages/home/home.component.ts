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
    tablou: any;
    asistenta: any;
    instrumente: any;
    contact: any;
    info: any;


    constructor(private navController: NavController) {
        this.tablou = TablouPage;
        this.asistenta = AsistentaPage;
        this.instrumente = InstrumentePage;
        this.contact = ContactPage;
        this.info = InfoPage;
    }

    /*   about() {
     this.navController.push(AboutPage);
     }*/

    /*tablou() {
     this.navController.push(TablouPage);
     }

     asistenta() {
     this.navController.push(AsistentaPage);
     }

     instrumente() {
     this.navController.push(InstrumentePage);
     }

     contact() {
     this.navController.push(ContactPage);
     }

     info() {
     this.navController.push(InfoPage);
     }
     */


    onLink(url: string) {
        window.open(url);
    }
}
