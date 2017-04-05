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

import { SaveDoseInsertPage } from '../save-dose-insert/save-dose-insert';
import { SaveDoseRegisterPage } from '../save-dose-register/save-dose-register';
import { SaveDoseListPage } from '../save-dose-list/save-dose-list';

@Component({
  selector: 'page-save-dose-login',
  templateUrl: 'save-dose-login.html'
})
export class SaveDoseLoginPage {

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
  loginPage(){
	this.authService.setMainPage(this);
	if (GlobalVars.getDosingWeight() != 0)
		this.authService.setTransitionPage(SaveDoseInsertPage);
	else
		this.authService.setTransitionPage(SaveDoseListPage);
	this.authService.login(this.loginCredentials);
  }
  gotoRegisterPage(){
  	this.navCtrl.push(SaveDoseRegisterPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DosingPage');
  }

}
