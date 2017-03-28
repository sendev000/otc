import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the DoctorOffice page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-doctor-office',
  templateUrl: 'doctor-office.html'
})
export class DoctorOfficePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController)
  {
  	this.menu = menu;
  }
  showMenu() {
  	this.menu.open();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DoctorOfficePage');
  }

}
