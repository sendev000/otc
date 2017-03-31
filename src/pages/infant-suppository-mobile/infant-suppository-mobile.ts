import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the InfantSuppositoryMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-infant-suppository-mobile',
  templateUrl: 'infant-suppository-mobile.html'
})
export class InfantSuppositoryMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfantSuppositoryMobilePage');
  }

}
