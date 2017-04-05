import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';

import { SaveDoseLoginPage } from '../save-dose-login/save-dose-login';

@Component({
  selector: 'page-save-dose-list',
  templateUrl: 'save-dose-list.html'
})
export class SaveDoseListPage {

  AbsoluteURL: string;
  dosingData: any;
  loginCredentials = {'email': '', 'password': ''};
  constructor(public http: Http, private sanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private authService: AuthService) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  	this.dosingData = [];
  }
  showMenu() {
  	this.menu.open();
  }
  logout(){
  	this.authService.setLoginPage(SaveDoseLoginPage);
	this.authService.logout();
  }
  loadData() {
  	let user = this.authService.getUserInfo();
  	let email = user.email;
  	let url = GlobalVars.getApiURL() + "page=dosing_list&email=" + email;
	this.http.get(url).map(response => response.json()).subscribe(data => {
			this.dosingData = data;
	 	}),err => {
          console.log("Oops");
        }
  }
  ionViewDidLoad() {
  	this.loadData();
    console.log('ionViewDidLoad DosingPage');
  }

}
