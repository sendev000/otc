import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileSymptomsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adult-take-mobile-symptoms-list',
  templateUrl: 'adult-take-mobile-symptoms-list.html'
})
export class AdultTakeMobileSymptomsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdultTakeMobileSymptomsListPage');
  }

}
