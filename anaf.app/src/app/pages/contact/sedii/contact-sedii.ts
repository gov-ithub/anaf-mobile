import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact-sedii',
  templateUrl: 'contact-sedii.html'
})
export class ContactSediiPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContactSediiPage Page');
  }

}
