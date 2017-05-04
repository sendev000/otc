import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PinkeyeMobileInfographics page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pinkeye-mobile-infographics',
  templateUrl: 'pinkeye-mobile-infographics.html'
})
export class PinkeyeMobileInfographicsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PinkeyeMobileInfographicsPage');
  }

}
