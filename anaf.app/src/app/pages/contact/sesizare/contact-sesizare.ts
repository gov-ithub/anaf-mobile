import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-contact-sesizare',
  templateUrl: 'contact-sesizare.html'
})
export class ContactSesizarePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContactSesizarePage Page');
  }

}
