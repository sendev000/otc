import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { IbuprofenInfantDropsMobilePage } from '../ibuprofen-infant-drops-mobile/ibuprofen-infant-drops-mobile';
import { IbuprofenSuspensionMobilePage } from '../ibuprofen-suspension-mobile/ibuprofen-suspension-mobile';
import { IbuprofenChewableMobilePage } from '../ibuprofen-chewable-mobile/ibuprofen-chewable-mobile';
import { IbuprofenAdultMobilePage } from '../ibuprofen-adult-mobile/ibuprofen-adult-mobile';


@Component({
  selector: 'page-ibuprofen',
  templateUrl: 'ibuprofen.html'
})
export class IbuprofenPage {

  AbsoluteURL: string;
  pages: any;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.pages = [true, true];
    this.subPages = [
      IbuprofenInfantDropsMobilePage,  				// 0
      IbuprofenSuspensionMobilePage,       			// 1
      IbuprofenChewableMobilePage,       			// 2
      IbuprofenAdultMobilePage		     			// 3
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