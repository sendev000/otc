import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { PediacareMultiSymptomColdMobilePage } from '../pediacare-multi-symptom-cold-mobile/pediacare-multi-symptom-cold-mobile';
import { PediacareCoughRunnynoseMobilePage } from '../pediacare-cough-runnynose-mobile/pediacare-cough-runnynose-mobile';
import { PediacareCoughCongestionMobilePage } from '../pediacare-cough-congestion-mobile/pediacare-cough-congestion-mobile';
import { PediacareDaytimeMsColdMobilePage } from '../pediacare-daytime-ms-cold-mobile/pediacare-daytime-ms-cold-mobile';
import { PediacareFluMobilePage } from '../pediacare-flu-mobile/pediacare-flu-mobile';
import { PediacareNightimeMsColdMobilePage } from '../pediacare-nightime-ms-cold-mobile/pediacare-nightime-ms-cold-mobile';
import { PediacareCoughSorethroatMobilePage } from '../pediacare-cough-sorethroat-mobile/pediacare-cough-sorethroat-mobile';

@Component({
  selector: 'page-pediacare',
  templateUrl: 'pediacare.html'
})
export class PediacarePage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      PediacareMultiSymptomColdMobilePage,  				// 0
      PediacareCoughRunnynoseMobilePage,       				// 1
      PediacareCoughCongestionMobilePage,       			// 2
      PediacareDaytimeMsColdMobilePage,		     			// 3
      PediacareFluMobilePage,								// 4
      PediacareNightimeMsColdMobilePage,					// 5
      PediacareCoughSorethroatMobilePage					// 6
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
