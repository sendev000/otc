import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the YeastInfographicsMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-yeast-infographics-mobile',
  templateUrl: 'yeast-infographics-mobile.html'
})
export class YeastInfographicsMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad YeastInfographicsMobilePage');
  }

}
