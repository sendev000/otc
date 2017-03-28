import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the PharmacyCare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pharmacy-care',
  templateUrl: 'pharmacy-care.html'
})
export class PharmacyCarePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController)
  {
  	this.menu = menu;
  }
  showMenu() {
  	this.menu.open();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PharmacyCarePage');
  }

}
