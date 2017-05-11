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
  selector: 'page-stomachache-adult-recom-mobile',
  templateUrl: 'stomachache-adult-recom-mobile.html'
})
export class StomachacheAdultRecomMobilePage {

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
		this.recs[11] = false;
		this.recs[12] = false;
		if (ind>=10){
			this.recs[10] = false;
			this.recs[ind] = temp;
			if (ind == 10)
				this.toggleAllRecs(true);
			else
				this.toggleAllRecs(false);
		}
	}
	toggleAllRecs(b: boolean){
		for (let i=0;i<10;i++)
			this.recs[i] = b;
	}
	goBack() {
		this.toggleAllRecs(false);
		this.recs[10] = this.recs[11] = this.recs[12] = false;
	}
	goBackSymptom(){
		this.goBack();
		this.page = 0;
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
		if (ind == 1)
		{
			let 
				sorethroat = this.recs[0],
				scratchythroat = this.recs[1],
				stuffynose = this.recs[2],
				runnynose = this.recs[3],
				sneezing = this.recs[4],
				headache = this.recs[5],
				itchyeyes = this.recs[6],
				cough = this.recs[7],
				wateryeyes = this.recs[8],
				sinuscongestion = false,
				chestcongestion = this.recs[9],
				prevention =  this.recs[11],
				All =  this.recs[10],
				none = this.recs[12];
				
			//category variables
			let 
			    antihistamine = runnynose || scratchythroat || sneezing || itchyeyes || wateryeyes,
				decongestant = stuffynose || sinuscongestion,
				painrelief = headache || sorethroat,
				coughrelief = cough || chestcongestion,
				itchyeyesrelief = itchyeyes || wateryeyes;
			if (none) {
				this.mode = 1;
			}
			//conditions for showing prevention division.
			else if (prevention) {
				this.mode = 2;
			}
			//conditions for All division.
			else if (All) {
				this.mode = 3;
			}
			//--------------single------------------------
			else if (antihistamine && !(decongestant || painrelief || coughrelief || itchyeyesrelief)) {
			    this.mode = 4;
			} else if (decongestant && !(antihistamine || painrelief || coughrelief || itchyeyesrelief)) {
			    this.mode = 5;
			} else if (painrelief && !(decongestant || antihistamine || coughrelief || itchyeyesrelief)) {
			    this.mode = 6;
			} else if (coughrelief && !(decongestant || painrelief || antihistamine || itchyeyesrelief)) {
			    this.mode = 7;
			} else if (itchyeyesrelief && !(decongestant || painrelief || antihistamine || coughrelief)) {
			    this.mode = 8;
			}
			//-------------------------------double---------------------------
			else if (painrelief && decongestant && !(coughrelief || antihistamine || itchyeyesrelief)) {
			    this.mode = 9;
			} else if (painrelief && antihistamine && !(coughrelief || decongestant || itchyeyesrelief)) {
			    this.mode = 10;
			} else if (painrelief && coughrelief && !(antihistamine || decongestant || itchyeyesrelief)) {
			    this.mode = 11;
			} else if (painrelief && itchyeyesrelief && !(antihistamine || decongestant || coughrelief)) {
			    this.mode = 12;
			} else if (antihistamine && decongestant && !(painrelief || coughrelief || itchyeyesrelief)) {
			    this.mode = 13;
			} else if (antihistamine && coughrelief && !(painrelief || decongestant || itchyeyesrelief)) {
			    this.mode = 14;
			} else if (antihistamine && itchyeyesrelief && !(painrelief || coughrelief || decongestant)) {
			    this.mode = 15;
			} else if (decongestant && coughrelief && !(painrelief || antihistamine || itchyeyesrelief)) {
			    this.mode = 16;
			} else if (decongestant && itchyeyesrelief && !(painrelief || antihistamine || coughrelief)) {
			    this.mode = 17;
			} else if (itchyeyesrelief && coughrelief && !(painrelief || antihistamine || decongestant)) {
			    this.mode = 18;
			}
			//---------------------Triple----------------------
			else if (painrelief && antihistamine && decongestant && !(coughrelief || itchyeyesrelief)) {
			    this.mode = 19;
			} else if (painrelief && antihistamine && coughrelief && !(decongestant || itchyeyesrelief)) {
				this.mode = 20;
			} else if (painrelief && antihistamine && itchyeyesrelief && !(decongestant || coughrelief)) {
				this.mode = 21;
			} else if (painrelief && decongestant && coughrelief && !(antihistamine || itchyeyesrelief)) {
				this.mode = 22;
			} else if (painrelief && decongestant && itchyeyesrelief && !(antihistamine || coughrelief)) {
				this.mode = 23;
			} else if (painrelief && itchyeyesrelief && coughrelief && !(decongestant || antihistamine)) {
				this.mode = 24;
			} else if (decongestant && itchyeyesrelief && coughrelief && !(antihistamine || painrelief)) {
				this.mode = 25;
			} else if (antihistamine && itchyeyesrelief && coughrelief && !(decongestant || painrelief)) {
				this.mode = 26;
			} else if (antihistamine && decongestant && coughrelief && !(itchyeyesrelief || painrelief)) {
			    this.mode = 27;
			} else if (antihistamine && decongestant && itchyeyesrelief && !(coughrelief || painrelief)) {
			    this.mode = 28;
			}
			//---------------------------------Quadriple-------------------------------------
			else if (painrelief && antihistamine && decongestant && itchyeyesrelief && !(coughrelief)) {
			    this.mode = 29;
			} else if (painrelief && antihistamine && decongestant && coughrelief && !(itchyeyesrelief)) {
			    this.mode = 30;
			} else if (painrelief && antihistamine && itchyeyesrelief && coughrelief && !(decongestant)) {
			    this.mode = 31;
			} else if (painrelief && decongestant && itchyeyesrelief && coughrelief && !(antihistamine)) {
			    this.mode = 32;
			} else if (antihistamine && decongestant && itchyeyesrelief && coughrelief && !(painrelief)) {
			    this.mode = 33;
			}
			//------------------------------All together------------------------------------
			else if (painrelief && antihistamine && decongestant && coughrelief && itchyeyesrelief) {
			    this.mode = 34;
			} else {
			    ind = 0; this.mode = 50;
			}
		}
		this.page = ind;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AdultTakeMobileListPage');
	}

}
