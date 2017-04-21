import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { AdultTakeMobileListPage } from '../adult-take-mobile-list/adult-take-mobile-list';
import { NearestHospitalPage } from '../nearest-hospital/nearest-hospital';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-adult-take-mobile-intro',
  templateUrl: 'adult-take-mobile-intro.html'
})
export class AdultTakeMobileIntroPage {

	page: any;
	AbsoluteURL: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  	this.page = 0;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  showMenu() {
  	this.menu.open();
  }
  gotoNearest() {
  	this.navCtrl.push(NearestHospitalPage);
  }
  movePage(p: number){
  	this.page = p;
    // if (p == 0)
    //   this.navCtrl.push(AdultTakeMobileListPage);
  }
  gotoList() {
  	this.navCtrl.push(AdultTakeMobileListPage);
  }
  gotoAbout() {
  	this.navCtrl.push(AboutPage);	
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdultTakeMobileIntroPage');
  }

}
