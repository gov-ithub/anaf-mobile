import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Tablou page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tablou',
  templateUrl: 'tablou.component.html'
})
export class TablouPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TablouPage Page');
  }

}
