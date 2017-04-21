import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { AdultTakeMobileSymptomsListPage } from '../adult-take-mobile-symptoms-list/adult-take-mobile-symptoms-list';
import { AdultTakeMobileToPharmacistListPage } from '../adult-take-mobile-to-pharmacist-list/adult-take-mobile-to-pharmacist-list';

@Component({
  selector: 'page-adult-take-mobile-list',
  templateUrl: 'adult-take-mobile-list.html'
})
export class AdultTakeMobileListPage {
	AbsoluteURL: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  showMenu() {
  	this.menu.open();
  }
  movePage(p: number){
    if (p == 0)
      this.navCtrl.push(AdultTakeMobileSymptomsListPage);
    else
      this.navCtrl.push(AdultTakeMobileToPharmacistListPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdultTakeMobileListPage');
  }

}
