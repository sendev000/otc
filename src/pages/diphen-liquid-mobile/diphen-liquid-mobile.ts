import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DiphenLiquidMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-diphen-liquid-mobile',
  templateUrl: 'diphen-liquid-mobile.html'
})
export class DiphenLiquidMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiphenLiquidMobilePage');
  }

}
