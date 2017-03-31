import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the JuniorSuppositoryMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-junior-suppository-mobile',
  templateUrl: 'junior-suppository-mobile.html'
})
export class JuniorSuppositoryMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuniorSuppositoryMobilePage');
  }

}
