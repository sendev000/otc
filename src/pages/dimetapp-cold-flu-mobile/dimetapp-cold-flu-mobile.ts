import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DimetappColdFluMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dimetapp-cold-flu-mobile',
  templateUrl: 'dimetapp-cold-flu-mobile.html'
})
export class DimetappColdFluMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DimetappColdFluMobilePage');
  }

}
