import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';

import { DosingPage } from '../dosing/dosing';
import { SaveDoseListPage } from '../save-dose-list/save-dose-list';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-save-dose-insert-success',
  templateUrl: 'save-dose-insert-success.html'
})
export class SaveDoseInsertSuccessPage {

  AbsoluteURL: string;
  loginCredentials = {'email': '', 'password': ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private authService: AuthService,
      public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  showMenu() {
  	this.menu.open();
  }
  gotoDose(){
  	this.navCtrl.push(DosingPage);
  }
  gotoSavedDose(){
  	this.navCtrl.push(SaveDoseListPage);
  }
  gotoHome(){
  	this.navCtrl.push(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DosingPage');
  }

}
