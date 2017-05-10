import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SwimearInfographicsMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-swimear-infographics-mobile',
  templateUrl: 'swimear-infographics-mobile.html'
})
export class SwimearInfographicsMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwimearInfographicsMobilePage');
  }

}
