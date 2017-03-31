import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { CetirizineLiquidMobilePage } from '../cetirizine-liquid-mobile/cetirizine-liquid-mobile';
import { CetirizineChewableMobilePage } from '../cetirizine-chewable-mobile/cetirizine-chewable-mobile';
import { CetirizineAdultMobilePage } from '../cetirizine-adult-mobile/cetirizine-adult-mobile';

@Component({
  selector: 'page-cetirizine',
  templateUrl: 'cetirizine.html'
})
export class CetirizinePage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      CetirizineLiquidMobilePage,  				// 0
      CetirizineChewableMobilePage,       		// 1
      CetirizineAdultMobilePage,       			// 2
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
