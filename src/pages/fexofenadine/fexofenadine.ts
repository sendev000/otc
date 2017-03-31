import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { FexofenadineLiquidMobilePage } from '../fexofenadine-liquid-mobile/fexofenadine-liquid-mobile';
import { FexofenadineChewableMobilePage } from '../fexofenadine-chewable-mobile/fexofenadine-chewable-mobile';

@Component({
  selector: 'page-fexofenadine',
  templateUrl: 'fexofenadine.html'
})
export class FexofenadinePage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      FexofenadineLiquidMobilePage,  				// 0
      FexofenadineChewableMobilePage,       		// 1
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
