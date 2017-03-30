import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the PainRelievers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { PainPillsPage } from '../pain-pills/pain-pills';
import { PainCreamsPage } from '../pain-creams/pain-creams';
import { PainPatchesPage } from '../pain-patches/pain-patches';


@Component({
  selector: 'page-pain-relievers',
  templateUrl: 'pain-relievers.html'
})
export class PainRelieversPage {
	AbsoluteURL: string;
  page = [
    PainPillsPage, 
    PainCreamsPage, 
    PainPatchesPage
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
    console.log('ionViewDidLoad PainRelieversPage');
  }

}
