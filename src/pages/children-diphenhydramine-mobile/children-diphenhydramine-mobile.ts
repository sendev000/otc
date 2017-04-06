import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { DiphenLiquidMobilePage } from '../diphen-liquid-mobile/diphen-liquid-mobile';
import { DiphenChewableMobilePage } from '../diphen-chewable-mobile/diphen-chewable-mobile';
import { DiphenAdultMobilePage } from '../diphen-adult-mobile/diphen-adult-mobile';

@Component({
  selector: 'page-children-diphenhydramine-mobile',
  templateUrl: 'children-diphenhydramine-mobile.html'
})
export class ChildrenDiphenhydramineMobilePage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      DiphenLiquidMobilePage,  				// 0
      DiphenChewableMobilePage,       		// 1
      DiphenAdultMobilePage,       			// 2
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
