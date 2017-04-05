import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';
import { SaveDoseLoginPage } from '../save-dose-login/save-dose-login';
import { SaveDoseListPage } from '../save-dose-list/save-dose-list';

import { DiphenhydraminePage } from '../diphenhydramine/diphenhydramine';
import { LoratadinePage } from '../loratadine/loratadine';
import { CetirizinePage } from '../cetirizine/cetirizine';
import { FexofenadinePage } from '../fexofenadine/fexofenadine';
import { TumsPage } from '../tums/tums';
import { MaaloxPage } from '../maalox/maalox';
import { MyliconPage } from '../mylicon/mylicon';
import { SudafedPage } from '../sudafed/sudafed';
import { PediacarePage } from '../pediacare/pediacare';
import { DimetappPage } from '../dimetapp/dimetapp';
import { TriaminicPage } from '../triaminic/triaminic';
import { PeptoPage } from '../pepto/pepto';
import { MucinexPage } from '../mucinex/mucinex';
import { LittleRemediesPage } from '../little-remedies/little-remedies';
import { AcetaminophenPage } from '../acetaminophen/acetaminophen';
import { IbuprofenPage } from '../ibuprofen/ibuprofen';
import { MiralaxPage } from '../miralax/miralax';
import { PedialaxPage } from '../pedialax/pedialax';
import { FletchersPage } from '../fletchers/fletchers';
import { ImodiumPage } from '../imodium/imodium';
import { MilkMagnesiaPage } from '../milk-magnesia/milk-magnesia';
import { RobitussinPage } from '../robitussin/robitussin';

@Component({
  selector: 'page-dosing',
  templateUrl: 'dosing.html'
})
export class DosingPage {
  currentPage: number;
	AbsoluteURL: string;
  pages: any;
  subPages: any;
  isLoggedIn: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private authService: AuthService) {
    let user = this.authService.getUserInfo();
    if (user == null)
      this.isLoggedIn = false;
    else
      this.isLoggedIn = true;
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
    this.currentPage = 0;
    this.pages = [true, true, true, true, true, true, true];
    this.subPages = [
      DiphenhydraminePage,  // 0
      LoratadinePage,       // 1
      CetirizinePage,       // 2
      FexofenadinePage,     // 3
      TumsPage,             // 4
      MaaloxPage,           // 5
      MyliconPage,          // 6
      SudafedPage,          // 7
      PediacarePage,        // 8
      DimetappPage,         // 9
      TriaminicPage,        // 10
      PeptoPage,            // 11
      MucinexPage,          // 12
      LittleRemediesPage,   // 13
      AcetaminophenPage,    // 14
      IbuprofenPage,        // 15
      MiralaxPage,          // 16
      PedialaxPage,         // 17
      FletchersPage,        // 18
      ImodiumPage,          // 19
      MilkMagnesiaPage,     // 20
      RobitussinPage        // 21
    ];
  }
  showMenu() {
  	this.menu.open();
  }
  transitPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  togglePage(ind: number) {
    this.pages[ind] = !this.pages[ind];
  }
  gotoSubPage(id: number) {
    this.navCtrl.push(this.subPages[id]);
  }
  gotoLogin() {
    this.navCtrl.push(SaveDoseLoginPage);
  }
  gotoSavedDose() {
    this.navCtrl.push(SaveDoseListPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DosingPage');
  }

}
