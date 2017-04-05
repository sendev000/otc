import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SaveDoseLogoutConfirm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-save-dose-logout-confirm',
  templateUrl: 'save-dose-logout-confirm.html'
})
export class SaveDoseLogoutConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaveDoseLogoutConfirmPage');
  }

}
