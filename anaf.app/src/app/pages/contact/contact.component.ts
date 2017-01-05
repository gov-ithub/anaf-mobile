import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactSediiPage} from "./sedii/contact-sedii";
import {ContactSesizarePage} from "./sesizare/contact-sesizare";

@Component({
    templateUrl: 'contact.component.html'
})
export class ContactPage {
    constructor(private navController: NavController) {
    }

    sedii() {
        this.navController.push(ContactSediiPage);
    }

    sesizare() {
        this.navController.push(ContactSesizarePage)
    }
}
