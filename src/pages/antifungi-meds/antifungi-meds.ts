import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the AntifungiMeds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { CompareYeastPage } from '../compare-yeast/compare-yeast';
import { CompareAthletesfootPage } from '../compare-athletesfoot/compare-athletesfoot';

@Component({
  selector: 'page-antifungi-meds',
  templateUrl: 'antifungi-meds.html'
})
export class AntifungiMedsPage {
	AbsoluteURL: string;
  page = [
    CompareYeastPage,
    CompareAthletesfootPage
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  showMenu() {
  	this.menu.open();
  }
  showPage(id: number) {
    this.navCtrl.push(this.page[id]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AntifungiMedsPage');
  }

}
