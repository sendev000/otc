import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { LoratadineLiquidMobilePage } from '../loratadine-liquid-mobile/loratadine-liquid-mobile';
import { LoratadineChewableMobilePage } from '../loratadine-chewable-mobile/loratadine-chewable-mobile';
import { LoratadineDisintegratingMobilePage } from '../loratadine-disintegrating-mobile/loratadine-disintegrating-mobile';
import { LoratadineAdultMobilePage } from '../loratadine-adult-mobile/loratadine-adult-mobile';
@Component({
  selector: 'page-loratadine',
  templateUrl: 'loratadine.html'
})
export class LoratadinePage {

  AbsoluteURL: string;
  subPages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.subPages = [
      LoratadineLiquidMobilePage,  					// 0
      LoratadineChewableMobilePage,       			// 1
      LoratadineDisintegratingMobilePage,       	// 2
      LoratadineAdultMobilePage		     			// 3
    ];
  }
  showMenu() {
  	this.menu.open();
  }
  gotoSubPage(id: number) {
    this.navCtrl.push(this.subPages[id]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DosingPage');
  }

}
