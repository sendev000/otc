import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { UrgentCarePage } from '../urgent-care/urgent-care';
import { AllergyMedsPage } from '../allergy-meds/allergy-meds';
import { ContactSocialMobilePage } from '../contact-social-mobile/contact-social-mobile';
import { CommentLoginPage } from '../comment-login/comment-login';

@Component({
  selector: 'page-pinkeye-adult-recom-mobile',
  templateUrl: 'pinkeye-adult-recom-mobile.html'
})
export class PinkeyeAdultRecomMobilePage {

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
	tabCss: string;
	tabConCss: string;
	tabId: number;
	recs: any;
	expands: any;
	mode: number;
	why: boolean;
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform) {
		this.menu = menu;
		this.AbsoluteURL = GlobalVars.getAbsoluteURL();
		this.page = 0;
		this.mode = 0;
		this.why = false;
		this.recs = [
			false, false, false, false, false, false, false, false, false, false, false, false, false
		];
		this.pages = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
		this.expands = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
		this.firstname = GlobalVars.getFirstname();
		if (this.firstname != "")
			this.firstname += ",";
		this.subPages = [
				UrgentCarePage, 			// 0
				AllergyMedsPage,			// 1
				ContactSocialMobilePage,	// 2
				CommentLoginPage,			// 3
			];
		this.tabId = 1;
		this.tabCss = "translate3d(0px, 0px, 0px)";
		this.tabConCss = "translate3d(0px, 0px, 0px)";
	}
	showMenu() {
		this.menu.open();
	}
	showTab(id: number){
		this.tabId = id;
		this.content.scrollToTop(0);
		this.tabCss = "translate3d(" + ((id-1)*100) + "%, 0px, 0px)";
		this.tabConCss = "translate3d(" + ((-id+1)*100) + "%, 0px, 0px)";
	}
	toggleRecs(ind: number){
		let temp = this.recs[ind];
		this.recs[10] = false;
		this.recs[11] = false;
		if (ind ==8)
			this.recs[9] = false;
		else if (ind == 9)
			this.recs[8] = false;
		else if (ind>=10){
			this.toggleAllRecs(false);
		}
		this.recs[ind] = temp;
	}
	toggleAllRecs(b: boolean){
		for (let i=0;i<10;i++)
			this.recs[i] = b;
	}
	goBack() {
		this.toggleAllRecs(false);
		this.recs[10] = this.recs[11] = false;
	}
	goBackSymptom(){
		this.goBack();
		this.page = 1;
		this.mode = 0;
	}
	toggleWhy(){
		this.why = !this.why;
	}
	gotoSubPage(id: number) {
		this.navCtrl.push(this.subPages[id]);
	}
	expandPage(id: number){
		this.expands[id] = !this.expands[id];
	}
	togglePage(ind: number) {
		if (ind == 2)
		{
			var pus = this.recs[0],
				one_eye = this.recs[1],
				eyelids_stuck = this.recs[2],
				watery = this.recs[3],
				foreign_object = this.recs[4],
				allergy_symptoms = this.recs[5],
				red_quickly = this.recs[6],
				itchy = this.recs[7],
				contact_lens = this.recs[8],
				chemical = this.recs[9],
				prevention = this.recs[10],
				allabove = false,
				none = this.recs[11];

			//Medication variables in collapsible

			var allergy = allergy_symptoms || itchy || red_quickly,
				viral = foreign_object || watery,
				doctor = pus || one_eye || eyelids_stuck;


			//conditions for showing none of the above division.

			if (none) {
			    this.mode = 1;
			}
			//conditions for showing prevention division.
			else if (prevention) {
			    this.mode = 2;
			}
			//conditions for All division + Others else if.
			else if (allabove) {
			    this.mode = 3;
			}
			//condition for showing just one checked field
			else if (contact_lens) {
			    this.mode = 4;
			} else if (chemical) {
			    this.mode = 5;
			}
			//--------------single------------------------
			else if (allergy && !(viral || doctor)) {
			    this.mode = 6;

			} else if (viral && !(allergy || doctor)) {
			    this.mode = 7;
			} else if (doctor && !(allergy || viral)) {
			    this.mode = 8;
			}
			//-------------------------------double---------------------------
			else if (allergy && viral && !(doctor)) {
			    this.mode = 9;
			} else if (allergy && doctor && !(viral)) {
			    this.mode = 10;
			} else if (viral && doctor && !(allergy)) {
			    this.mode = 11;
			}
			//------------------------------All together------------------------------------
			else if (allergy && viral && doctor) {
			    this.mode = 12;
			} else {
			    ind = 1; this.mode = 50;
			}
		}
		this.page = ind;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AdultTakeMobileListPage');
	}

}
