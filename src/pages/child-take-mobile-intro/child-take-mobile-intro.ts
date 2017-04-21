import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ChildTakeMobileIntro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-child-take-mobile-intro',
  templateUrl: 'child-take-mobile-intro.html'
})
export class ChildTakeMobileIntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildTakeMobileIntroPage');
  }

}
