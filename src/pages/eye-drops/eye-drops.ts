import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the EyeDrops page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { DryEyeDropsPage } from '../dry-eye-drops/dry-eye-drops';
import { RedEyeDropsPage } from '../red-eye-drops/red-eye-drops';
import { ItchyEyeDropsPage } from '../itchy-eye-drops/itchy-eye-drops';

@Component({
  selector: 'page-eye-drops',
  templateUrl: 'eye-drops.html'
})
export class EyeDropsPage {
	AbsoluteURL: string;
  pages = [
    DryEyeDropsPage,
    RedEyeDropsPage,
    ItchyEyeDropsPage
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  showMenu() {
  	this.menu.open();
  }
  showPage(id: number) {
    this.navCtrl.push(this.pages[id]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EyeDropsPage');
  }

}
