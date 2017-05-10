import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the EarwaxInfographicMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-earwax-infographic-mobile',
  templateUrl: 'earwax-infographic-mobile.html'
})
export class EarwaxInfographicMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EarwaxInfographicMobilePage');
  }

}
