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

import { CommentLoginPage } from '../comment-login/comment-login';
import { AcetaminophenPage } from '../acetaminophen/acetaminophen';
import { SaveDoseInsertPage } from '../save-dose-insert/save-dose-insert';
import { SaveDoseLoginPage } from '../save-dose-login/save-dose-login';


@Component({
  selector: 'page-infant-susp-mobile',
  templateUrl: 'infant-susp-mobile.html'
})
export class InfantSuspMobilePage {

  AbsoluteURL: string;
  showTerm: boolean;
  showButton: boolean;
  options = [
    false, false, false, false, false, false, false, false
  ];
  currentPage: number;
  currentWeight: number;
  defaultWeight: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private authService: AuthService,
      public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  	this.showTerm = false;
    this.showButton = false;
    this.currentPage = 0;
    this.defaultWeight = 8; // lbs
    this.currentWeight = this.defaultWeight;
  }
  showMenu() {
  	this.menu.open();
  }
  saveDoseWeight() {
    GlobalVars.setDosingWeight(this.currentWeight);
    if (this.authService.getUserInfo() != null)
      this.navCtrl.push(SaveDoseInsertPage);
    else
      this.navCtrl.push(SaveDoseLoginPage);
  }
  gotoDosePage() {
    this.navCtrl.push(AcetaminophenPage);
    // let loginrCredentials = {name: 'a a', email: 'a@a.com', password: 'abcde'};
    // this.authService.setMainPage(this);
    // this.authService.setTransitionPage(AcetaminophenPage);
    // this.authService.setLoginPage(CommentLoginPage);
    // this.authService.login(loginrCredentials);
  }
  setCurrentPage(page: number) {
    if (page == 1)
      this.currentWeight = this.defaultWeight;
    this.currentPage = page;
  }
  toggleOptions(id: number) {
    this.options[id] = !this.options[id];
  }
  toggleButton() {
    this.showButton = !this.showButton;
  }
  toggleTerm() {
  	this.showTerm = !this.showTerm;
  }
  gotoLogin() {
    this.navCtrl.push(CommentLoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DosingPage');
  }

}
