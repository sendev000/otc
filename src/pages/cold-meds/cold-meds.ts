import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the ColdMeds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { DecongestantsPage } from '../decongestants/decongestants';
import { MultisymptomsPage } from '../multisymptoms/multisymptoms';
import { ImmuneboostersPage } from '../immuneboosters/immuneboosters';


@Component({
  selector: 'page-cold-meds',
  templateUrl: 'cold-meds.html'
})
export class ColdMedsPage {
  pages = [
    DecongestantsPage, MultisymptomsPage, ImmuneboostersPage
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  }
  showMenu() {
  	this.menu.open();
  }
  showPage(id: number) {
    this.navCtrl.push(this.pages[id]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ColdMedsPage');
  }

}
