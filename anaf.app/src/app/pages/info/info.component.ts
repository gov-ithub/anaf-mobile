import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Notificari page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
