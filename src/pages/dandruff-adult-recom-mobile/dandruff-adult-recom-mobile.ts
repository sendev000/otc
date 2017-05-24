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
  selector: 'page-dandruff-adult-recom-mobile',
  templateUrl: 'dandruff-adult-recom-mobile.html'
})
export class DandruffAdultRecomMobilePage {

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
			var
			    mild = this.recs[0],
			moderate = this.recs[1],
			severe = this.recs[2],
			painful = this.recs[3],
			crusty = this.recs[4],
			drainy = this.recs[5],
			blonde = this.recs[6],
			colored = this.recs[7],
			oily = this.recs[8],
			dry = this.recs[9],
			prevention = this.recs[11],
			allabove = this.recs[10],
			none = this.recs[12];

			//Medication variables in collapsible

			var
			    mild = mild,
			moderate = moderate,
			severe = severe,
			warning = oily || dry || blonde || colored,
			doctor = severe || painful || crusty || drainy;


			//conditions for showing none of the above division.

			if (none) {
				this.mode = 50;
			}
			//conditions for showing prevention division.
			else if (prevention) {
			    this.mode = 1;

			}
			//conditions for All division + Others else if.
			else if (allabove) {
				this.mode = 2;
			    

			}
			//condition for showing just one checked field

			//--------------single------------------------
			else if (mild && !(moderate || severe || warning || doctor)) {
				this.mode = 3;
			    

			} else if (moderate && !(mild || severe || warning || doctor)) {
				this.mode = 4;
			    

			} else if (severe && !(mild || moderate || warning || doctor)) {
				this.mode = 5;
			    

			} else if (warning && !(mild || moderate || severe || doctor)) {
				this.mode = 6;
			    

			} else if (doctor && !(mild || moderate || warning || severe)) {
				this.mode = 7;
			    

			}
			//-------------------------------double---------------------------
			else if (mild && moderate && !(severe || warning || doctor)) {
				this.mode = 8;
			    // $('#, #, #mild_moderate_adult_recom_dandruff_mobile, #, #').show(300).removeClass("displayNone");

			} else if (mild && severe && !(moderate || warning || doctor)) {
				this.mode = 9;
			    // $('#, #, #mild_severe_adult_recom_dandruff_mobile, #, #').show(300).removeClass("displayNone");

			} else if (mild && warning && !(moderate || severe || doctor)) {
				this.mode = 10;
			    

			} else if (mild && doctor && !(moderate || severe || warning)) {
				this.mode = 11;
			    

			} else if (moderate && severe && !(mild || warning || doctor)) {
				this.mode = 12;
			    //$('#, #, #moderate_severe_adult_recom_dandruff_mobile, 

			} else if (moderate && warning && !(mild || severe || doctor)) {
				this.mode = 13;
			    

			} else if (moderate && doctor && !(mild || severe || warning)) {
				this.mode = 14;
			    

			} else if (severe && warning && !(mild || moderate || doctor)) {
				this.mode = 15;
			    

			} else if (severe && doctor && !(mild || moderate || warning)) {
				this.mode = 16;
			    

			} else if (warning && doctor && !(mild || moderate || severe)) {
				this.mode = 17;
			    

			}
			//---------------------Triple----------------------
			else if (mild && moderate && severe && !(warning || doctor)) {
				this.mode = 18;
			    

			} else if (mild && moderate && warning && !(severe || doctor)) {
				this.mode = 19;
			    

			} else if (mild && moderate && doctor && !(severe || warning)) {
				this.mode = 20;
			    

			} else if (mild && severe && warning && !(moderate || doctor)) {
				this.mode = 21;
			    

			} else if (mild && severe && doctor && !(moderate || warning)) {
				this.mode = 22;
			    

			} else if (mild && warning && doctor && !(moderate || severe)) {
				this.mode = 23;
			    

			} else if (moderate && severe && warning && !(mild || doctor)) {
				this.mode = 24;
			    

			} else if (moderate && severe && doctor && !(mild || warning)) {
				this.mode = 25;
			    

			} else if (moderate && warning && doctor && !(mild || severe)) {
				this.mode = 26;
			    

			} else if (severe && warning && doctor && !(mild || moderate)) {
				this.mode = 27;
			    

			}
			//---------------------Quadruple----------------------
			else if (mild && moderate && severe && warning && !(doctor)) {
				this.mode = 28;
			    

			} else if (mild && moderate && severe && doctor && !(warning)) {
				this.mode = 29;

			} else if (mild && moderate && warning && doctor && !(severe)) {
				this.mode = 30;

			} else if (mild && severe && warning && doctor && !(moderate)) {
				this.mode = 31;

			} else if (moderate && severe && warning && doctor && !(mild)) {
				this.mode = 32;

			}
			//------------------------------All together------------------------------------
			else if (mild && moderate && severe && warning && doctor) {
				this.mode = 33;

			} else {
				this.mode = 100;
				ind = 1;
			}
		}
		this.page = ind;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AdultTakeMobileListPage');
	}

}
