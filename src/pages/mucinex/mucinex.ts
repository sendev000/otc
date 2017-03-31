import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { MucinexMsColdFeverMobilePage } from '../mucinex-ms-cold-fever-mobile/mucinex-ms-cold-fever-mobile';
import { MucinexMsColdMobilePage } from '../mucinex-ms-cold-mobile/mucinex-ms-cold-mobile';
import { MucinexColdCoughSorethroatMobilePage } from '../mucinex-cold-cough-sorethroat-mobile/mucinex-cold-cough-sorethroat-mobile';
import { MucinexNighttimeMsColdMobilePage } from '../mucinex-nighttime-ms-cold-mobile/mucinex-nighttime-ms-cold-mobile';


@Component({
  selector: 'page-mucinex',
  templateUrl: 'mucinex.html'
})
export class MucinexPage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      MucinexMsColdFeverMobilePage,  				// 0
      MucinexMsColdMobilePage,       				// 1
      MucinexColdCoughSorethroatMobilePage,       	// 2
      MucinexNighttimeMsColdMobilePage		     	// 3
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
