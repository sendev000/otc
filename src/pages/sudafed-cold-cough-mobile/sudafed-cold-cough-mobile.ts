import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SudafedColdCoughMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sudafed-cold-cough-mobile',
  templateUrl: 'sudafed-cold-cough-mobile.html'
})
export class SudafedColdCoughMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SudafedColdCoughMobilePage');
  }

}
