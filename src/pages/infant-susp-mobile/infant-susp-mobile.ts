import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { CommentLoginPage } from '../comment-login/comment-login';

@Component({
  selector: 'page-infant-susp-mobile',
  templateUrl: 'infant-susp-mobile.html'
})
export class InfantSuspMobilePage {

  AbsoluteURL: string;
  showTerm: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  	this.showTerm = false;
  }
  showMenu() {
  	this.menu.open();
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
