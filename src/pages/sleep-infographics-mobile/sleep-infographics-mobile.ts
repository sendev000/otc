import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SleepInfographicsMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sleep-infographics-mobile',
  templateUrl: 'sleep-infographics-mobile.html'
})
export class SleepInfographicsMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SleepInfographicsMobilePage');
  }

}
