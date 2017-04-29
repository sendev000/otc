import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CoughAdultRecomMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cough-adult-recom-mobile',
  templateUrl: 'cough-adult-recom-mobile.html'
})
export class CoughAdultRecomMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoughAdultRecomMobilePage');
  }

}
