import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Compare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { AllergyMedsPage } from '../allergy-meds/allergy-meds';
import { ColdMedsPage } from '../cold-meds/cold-meds';
import { ColdMedsChildPage } from '../cold-meds-child/cold-meds-child';
import { CoughMedsPage } from '../cough-meds/cough-meds';
import { ColdsoreMedsPage } from '../coldsore-meds/coldsore-meds';
import { EnergyDrinksPage } from '../energy-drinks/energy-drinks';
import { EyeDropsPage } from '../eye-drops/eye-drops';
import { AntifungiMedsPage } from '../antifungi-meds/antifungi-meds';
import { HeartburnMedsPage } from '../heartburn-meds/heartburn-meds';
import { LaxativesPage } from '../laxatives/laxatives';
import { PainRelieversPage } from '../pain-relievers/pain-relievers';
import { ProbioticsPage } from '../probiotics/probiotics';
import { SleepAidsPage } from '../sleep-aids/sleep-aids';

@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html'
})
export class ComparePage {
  items = {
    1     : AllergyMedsPage,
    2     : ColdMedsPage,
    3     : ColdMedsChildPage,
    4     : CoughMedsPage,
    5     : ColdsoreMedsPage,
    6     : EnergyDrinksPage,
    7     : EyeDropsPage,
    8     : AntifungiMedsPage,
    9     : HeartburnMedsPage,
    10    : LaxativesPage,
    11    : PainRelieversPage,
    12    : ProbioticsPage,
    13    : SleepAidsPage,
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  }
  showMenu() {
  	this.menu.open();
  }
  goTo(index: string) {
    if (index.length > 0)
    {
      let page = (<any>this.items)[index];
      this.navCtrl.push(page);
    }
  }
  ionViewDidLoad() {
    
  }

}
