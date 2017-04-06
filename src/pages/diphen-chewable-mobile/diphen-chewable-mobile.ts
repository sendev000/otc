import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DiphenChewableMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-diphen-chewable-mobile',
  templateUrl: 'diphen-chewable-mobile.html'
})
export class DiphenChewableMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiphenChewableMobilePage');
  }

}
