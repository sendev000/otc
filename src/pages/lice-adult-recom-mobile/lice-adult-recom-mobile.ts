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
  selector: 'page-lice-adult-recom-mobile',
  templateUrl: 'lice-adult-recom-mobile.html'
})
export class LiceAdultRecomMobilePage {

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
		this.expands = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,
														true, true, true, true, true, true, true, true, true, true, true];
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
			    //found = $('#adult_recom_lice_mobile_q1_0'),
			    severe = this.recs[1],
			best = this.recs[2],
			prefer_natural = this.recs[3],
			tried = this.recs[4],
			returned = this.recs[5],
			resistant = this.recs[6],
			crusty = this.recs[7],
			family = this.recs[8],
			money = this.recs[9],
			prevention = this.recs[11],
			allabove = this.recs[10],
			none = this.recs[12];

			//Medication variables in collapsible

			var
			    pediculicides = family || best,
			natural = prefer_natural,
			outsource = severe || money || family,
			doctor = severe || tried || returned || resistant || crusty;


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

			//--------------single------------------------
			else if (pediculicides && !(natural || outsource || doctor)) {
			    this.mode = 4;


			} else if (natural && !(pediculicides || outsource || doctor)) {

			    this.mode = 5;


			} else if (outsource && !(pediculicides || natural || doctor)) {

			    this.mode = 6;


			} else if (doctor && !(pediculicides || natural || outsource)) {

			    this.mode = 7;

			}

			//-------------------------------double---------------------------
			else if (pediculicides && natural && !(outsource || doctor)) {

			    this.mode = 8;

			} else if (pediculicides && outsource && !(natural || doctor)) {

			    this.mode = 9;

			} else if (pediculicides && doctor && !(natural || outsource)) {

			    this.mode = 10;

			} else if (natural && outsource && !(pediculicides || doctor)) {

			    this.mode = 11;

			} else if (natural && doctor && !(pediculicides || outsource)) {

			    this.mode = 12;

			} else if (outsource && doctor && !(pediculicides || natural)) {

			    this.mode = 13;

			}

			//---------------------Triple----------------------
			else if (pediculicides && natural && outsource && !(doctor)) {

			    this.mode = 14;

			} else if (pediculicides && natural && doctor && !(outsource)) {

			    this.mode = 15;

			} else if (pediculicides && outsource && doctor && !(natural)) {

			    this.mode = 16;

			} else if (natural && outsource && doctor && !(pediculicides)) {

			    this.mode = 17;
			}

			//------------------------------All together------------------------------------
			else if (pediculicides && natural && outsource && doctor) {

			    this.mode = 18;

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
