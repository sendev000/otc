import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the FoodPoisoningInfographicsMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-food-poisoning-infographics-mobile',
  templateUrl: 'food-poisoning-infographics-mobile.html'
})
export class FoodPoisoningInfographicsMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPoisoningInfographicsMobilePage');
  }

}
