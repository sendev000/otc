import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SudafedPseudoMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sudafed-pseudo-mobile',
  templateUrl: 'sudafed-pseudo-mobile.html'
})
export class SudafedPseudoMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SudafedPseudoMobilePage');
  }

}
