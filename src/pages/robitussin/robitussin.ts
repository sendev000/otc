import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { RobitussinCoughColdMobilePage } from '../robitussin-cough-cold-mobile/robitussin-cough-cold-mobile';
import { RobitussinCoughChestMobilePage } from '../robitussin-cough-chest-mobile/robitussin-cough-chest-mobile';
import { RobitussinCoughColdLaMobilePage } from '../robitussin-cough-cold-la-mobile/robitussin-cough-cold-la-mobile';

@Component({
  selector: 'page-robitussin',
  templateUrl: 'robitussin.html'
})
export class RobitussinPage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      RobitussinCoughColdMobilePage,  				// 0
      RobitussinCoughChestMobilePage,       			// 1
      RobitussinCoughColdLaMobilePage,       			// 2
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
