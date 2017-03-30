import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the HeartburnMeds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { AntacidsPage } from '../antacids/antacids';
import { AcidReducersPage } from '../acid-reducers/acid-reducers';
import { HeartburnGroupPage } from '../heartburn-group/heartburn-group';


@Component({
  selector: 'page-heartburn-meds',
  templateUrl: 'heartburn-meds.html'
})
export class HeartburnMedsPage {
	AbsoluteURL: string;
  pages = [
    AntacidsPage,
    AcidReducersPage,
    HeartburnGroupPage
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
    console.log('ionViewDidLoad HeartburnMedsPage');
  }

}
