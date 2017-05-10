import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { UrgentCarePage } from '../urgent-care/urgent-care';
@Component({
  selector: 'page-allergy-adult-recom-mobile',
  templateUrl: 'allergy-adult-recom-mobile.html'
})
export class AllergyAdultRecomMobilePage {

	@ViewChild(Content) content: Content;
	MyContent = {
	    screenWidth: 0,
	    screenHeight: 0,
	  }
	firstname: string;
	page: number;
	subPages: any;
	pages: any;
	AbsoluteURL: string;
	symptoms: any;
	tabCss: string;
	tabId: number;
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform) {
		this.menu = menu;
		this.AbsoluteURL = GlobalVars.getAbsoluteURL();
		this.page = 0;
		this.symptoms = [
				false, false, false, false, false, false, false, false, false, false, false
			]
		this.pages = [true, true, true, true, true, true, true, true, true, true, true, true, true];
		this.firstname = GlobalVars.getFirstname();
		if (this.firstname != "")
			this.firstname += ",";
		this.subPages = [
				UrgentCarePage, 			// 0
			];
		this.tabId = 1;
		this.tabCss = "translate3d(0px, 0px, 0px)";
	}
	showMenu() {
		this.menu.open();
	}
	showTab(id: number){
		this.tabId = id;
		this.tabCss = "translate3d(" + ((id-1)*100) + "%, 0px, 0px)";
		console.log(this.tabCss);
	}
	togglePages(ind: number) {
		this.pages[ind] = !this.pages[ind];
	}
	toggleSymptom(ind: number){
		this.symptoms[9] = false;
	}
	toggleAllSymptoms(b: boolean){
		for (let i=0;i<8;i++)
			this.symptoms[i] = b;
		if (b == true)
			this.symptoms[9] = false;
		else
			this.symptoms[8] = false;
	}
	goBack() {
		this.toggleAllSymptoms(false);
		this.symptoms[8] = this.symptoms[9] = false;
		this.page = 50;
	}
	gotoSubPage(id: number) {
		this.navCtrl.push(this.subPages[id]);
	}
	togglePage(ind: number) {
		this.page = ind;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AdultTakeMobileListPage');
	}

}
