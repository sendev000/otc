import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the AntifungiMeds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { ComparePage } from '../compare/compare';

@Component({
  selector: 'page-compare-yeast',
  templateUrl: 'compare-yeast.html'
})
export class CompareYeastPage {
	currentPage: number;
  AbsoluteURL: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  	this.currentPage = -1;
  }
  showMenu() {
  	this.menu.open();
  }
  transitPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  showCompare() {
  	this.navCtrl.push(ComparePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AntifungiMedsPage');
  }

}
