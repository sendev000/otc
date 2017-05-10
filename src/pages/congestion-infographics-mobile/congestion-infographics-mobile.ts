import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CongestionInfographicsMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-congestion-infographics-mobile',
  templateUrl: 'congestion-infographics-mobile.html'
})
export class CongestionInfographicsMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CongestionInfographicsMobilePage');
  }

}
