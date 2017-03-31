import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { SudafedPseudoMobilePage } from '../sudafed-pseudo-mobile/sudafed-pseudo-mobile';
import { SudafedPeMobilePage } from '../sudafed-pe-mobile/sudafed-pe-mobile';
import { SudafedColdCoughMobilePage } from '../sudafed-cold-cough-mobile/sudafed-cold-cough-mobile';
import { SudafedPseudotabMobilePage } from '../sudafed-pseudotab-mobile/sudafed-pseudotab-mobile';

@Component({
  selector: 'page-sudafed',
  templateUrl: 'sudafed.html'
})
export class SudafedPage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      SudafedPseudoMobilePage,  				// 0
      SudafedPeMobilePage,       				// 1
      SudafedColdCoughMobilePage,       		// 2
      SudafedPseudotabMobilePage		     	// 3
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad DosingPage');
  }

}
