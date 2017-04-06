import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, Platform } from 'ionic-angular';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';

import { CommentLoginPage } from '../comment-login/comment-login';
import { IbuprofenPage } from '../ibuprofen/ibuprofen';
import { SaveDoseInsertPage } from '../save-dose-insert/save-dose-insert';
import { SaveDoseLoginPage } from '../save-dose-login/save-dose-login';

@Component({
  selector: 'page-ibuprofen-infant-drops-mobile',
  templateUrl: 'ibuprofen-infant-drops-mobile.html'
})
export class IbuprofenInfantDropsMobilePage {
  AbsoluteURL: string;
  showTerm: boolean;
  showButton: boolean;
  options = [
    false, false, false, false, false, false, false, false, false, false
  ];
  currentPage: number;
  currentWeight: number;
  defaultWeight: number;
  showConvertDlg: boolean;
  convertDlgInfo = {
  	screenWidth: 0,
  	screenHeight: 0,
  	top: 0,
  	left: 0,
  	height: 325,
  	width: 273,
  	noscroll: false
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private authService: AuthService,
      public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController, 
      public platform: Platform) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  	this.showTerm = false;
    this.showButton = false;
    this.currentPage = 0;
    this.defaultWeight = 5; // lbs
    this.currentWeight = this.defaultWeight;
    this.showConvertDlg = false;
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
    this.navCtrl.push(IbuprofenPage);
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
  doneConvert(){
  	this.convertDlgInfo.noscroll = false;
  	this.showConvertDlg = false;
  	this.currentPage = 2;
  	this.currentWeight = 2;
  }
  toggleConvertDlg(b: boolean) {
  	if (b == true)
  	{
  		this.convertDlgInfo.screenWidth = this.platform.width();
    	this.convertDlgInfo.screenHeight = this.platform.height();
    	this.convertDlgInfo.top = (this.convertDlgInfo.screenHeight - this.convertDlgInfo.height) / 2;
    	this.convertDlgInfo.left = (this.convertDlgInfo.screenWidth - this.convertDlgInfo.width) / 2;
    	this.convertDlgInfo.noscroll = true;
  	}
  	else
  		this.convertDlgInfo.noscroll = false;	
  	this.showConvertDlg = b;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DosingPage');
  }

}
