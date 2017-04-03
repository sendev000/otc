import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { LittleMsColdFeverMobilePage } from '../little-ms-cold-fever-mobile/little-ms-cold-fever-mobile';
import { LittleDecongestantDropsMobilePage } from '../little-decongestant-drops-mobile/little-decongestant-drops-mobile';

@Component({
  selector: 'page-little-remedies',
  templateUrl: 'little-remedies.html'
})
export class LittleRemediesPage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      LittleMsColdFeverMobilePage,  				// 0
      LittleDecongestantDropsMobilePage,       		// 1
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
