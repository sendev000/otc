import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { CommentLoginPage } from '../comment-login/comment-login';

import { InfantSuspMobilePage } from '../infant-susp-mobile/infant-susp-mobile';
import { ChildrenSuspMobilePage } from '../children-susp-mobile/children-susp-mobile';
import { ChildrenChewableMobilePage } from '../children-chewable-mobile/children-chewable-mobile';
import { JuniorChewableMobilePage } from '../junior-chewable-mobile/junior-chewable-mobile';
import { RegularAcetMobilePage } from '../regular-acet-mobile/regular-acet-mobile';
import { InfantSuppositoryMobilePage } from '../infant-suppository-mobile/infant-suppository-mobile';
import { ChildrenSuppositoryMobilePage } from '../children-suppository-mobile/children-suppository-mobile';
import { JuniorSuppositoryMobilePage } from '../junior-suppository-mobile/junior-suppository-mobile';


@Component({
  selector: 'page-acetaminophen',
  templateUrl: 'acetaminophen.html'
})
export class AcetaminophenPage {
  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
    this.pages = [true, true, true, true, true, true, true];
    this.subPages = [
      InfantSuspMobilePage,  					// 0
      ChildrenSuspMobilePage,       			// 1
      ChildrenChewableMobilePage,       		// 2
      JuniorChewableMobilePage,     			// 3
      RegularAcetMobilePage,             		// 4
      InfantSuppositoryMobilePage,           	// 5
      ChildrenSuppositoryMobilePage,          	// 6
      JuniorSuppositoryMobilePage          		// 7
    ];
  }
  showMenu() {
  	this.menu.open();
  }
  togglePage(ind: number) {
    this.pages[ind] = !this.pages[ind];
  }
  gotoSubPage(id: number) {
    this.navCtrl.push(this.subPages[id]);
  }
  gotoLogin() {
    this.navCtrl.push(CommentLoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DosingPage');
  }

}