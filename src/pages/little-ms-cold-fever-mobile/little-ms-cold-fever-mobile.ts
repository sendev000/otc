import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the LittleMsColdFeverMobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-little-ms-cold-fever-mobile',
  templateUrl: 'little-ms-cold-fever-mobile.html'
})
export class LittleMsColdFeverMobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LittleMsColdFeverMobilePage');
  }

}
