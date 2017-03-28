import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the SleepAids page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';

@Component({
  selector: 'page-sleep-aids',
  templateUrl: 'sleep-aids.html'
})
export class SleepAidsPage {
	AbsoluteURL: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  showMenu() {
  	this.menu.open();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SleepAidsPage');
  }

}
