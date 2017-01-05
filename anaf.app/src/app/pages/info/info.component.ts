import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-notificari',
  templateUrl: 'info.component.html'
})
export class InfoPage {

  constructor(private navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello InfoPage Page');
  }

}
