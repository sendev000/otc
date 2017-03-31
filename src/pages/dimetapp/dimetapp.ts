import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { DimetappColdCoughMobilePage } from '../dimetapp-cold-cough-mobile/dimetapp-cold-cough-mobile';
import { DimetappColdAllergyMobilePage } from '../dimetapp-cold-allergy-mobile/dimetapp-cold-allergy-mobile';
import { DimetappColdFluMobilePage } from '../dimetapp-cold-flu-mobile/dimetapp-cold-flu-mobile';
import { DimetappColdCoughlaMobilePage } from '../dimetapp-cold-coughla-mobile/dimetapp-cold-coughla-mobile';
import { DimetappColdCongestionMobilePage } from '../dimetapp-cold-congestion-mobile/dimetapp-cold-congestion-mobile';

@Component({
  selector: 'page-dimetapp',
  templateUrl: 'dimetapp.html'
})
export class DimetappPage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      DimetappColdCoughMobilePage,  				// 0
      DimetappColdAllergyMobilePage,       			// 1
      DimetappColdFluMobilePage,   	    			// 2
      DimetappColdCoughlaMobilePage,     			// 3
      DimetappColdCongestionMobilePage,				// 4
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
