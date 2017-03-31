import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { TriaminicMultiSymptomFeverColdMobilePage } from '../triaminic-multi-symptom-fever-cold-mobile/triaminic-multi-symptom-fever-cold-mobile';
import { TriaminicCoughCongestionMobilePage } from '../triaminic-cough-congestion-mobile/triaminic-cough-congestion-mobile';
import { TriaminicCoughSorethroatMobilePage } from '../triaminic-cough-sorethroat-mobile/triaminic-cough-sorethroat-mobile';
import { TriaminicDaytimeColdCoughMobilePage } from '../triaminic-daytime-cold-cough-mobile/triaminic-daytime-cold-cough-mobile';
import { TriaminicNighttimeColdCoughMobilePage } from '../triaminic-nighttime-cold-cough-mobile/triaminic-nighttime-cold-cough-mobile';

@Component({
  selector: 'page-triaminic',
  templateUrl: 'triaminic.html'
})
export class TriaminicPage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      TriaminicMultiSymptomFeverColdMobilePage,  				// 0
      TriaminicCoughCongestionMobilePage,       				// 1
      TriaminicCoughSorethroatMobilePage,       				// 2
      TriaminicDaytimeColdCoughMobilePage,		     			// 3
      TriaminicNighttimeColdCoughMobilePage,					// 4
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
