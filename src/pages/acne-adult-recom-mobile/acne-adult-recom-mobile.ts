import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AcneAdultRecomMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-acne-adult-recom-mobile',
  templateUrl: 'acne-adult-recom-mobile.html'
})
export class AcneAdultRecomMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcneAdultRecomMobilePage');
  }

}
