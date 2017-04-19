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

import { SaveDoseLoginPage } from '../save-dose-login/save-dose-login';



@Component({
  selector: 'page-save-dose-register',
  templateUrl: 'save-dose-register.html'
})
export class SaveDoseRegisterPage {

  AbsoluteURL: string;
  registerCredentials = {'name': '', 'email': '', 'password': '', 'confirm': '', 'city': '', 'gender': '', 'newsletter': ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private authService: AuthService,
      public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  showMenu() {
  	this.menu.open();
  }
  registerPage(){
  	this.authService.setMainPage(this);
  	this.authService.setLoginPage(SaveDoseLoginPage);
  	this.authService.register(this.registerCredentials);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DosingPage');
  }

}
