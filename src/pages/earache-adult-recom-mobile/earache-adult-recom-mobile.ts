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
  selector: 'page-earache-adult-recom-mobile',
  templateUrl: 'earache-adult-recom-mobile.html'
})
export class EaracheAdultRecomMobilePage {

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
		if (ind>=10){
			this.recs[ind] = temp;
			this.toggleAllRecs(false);
		}
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
		if (ind == 2)
		{
			var cold = this.recs[0],
				ruptured = this.recs[1],
				toothache = this.recs[2],
				water = this.recs[3],
				swollen = this.recs[4],
				itchy = this.recs[5],
				fever = this.recs[6],
				sore_throat = this.recs[7],
				pressure = this.recs[8],
				draining = this.recs[9],
				prevention = this.recs[10],
				allabove = false,
				none = this.recs[11];

			//Medication variables in collapsible

			var
			    pain_reliever = cold || swollen || toothache || pressure,
				eardrops = water || itchy,
				decongestant = cold || pressure,
				warm_compress = ruptured || swollen || toothache,
				doctor = ruptured || swollen || fever || sore_throat || draining;


			//conditions for showing none of the above division.

			if (none) {
			    this.mode = 1;
			}
			//conditions for showing prevention division.
			else if (prevention) {
			    this.mode = 2;
			}
			//conditions for showing ruptured division.
			else if (ruptured) {
			    this.mode = 3;
			}
			//conditions for All division + Others else if.
			else if (allabove) {
			    this.mode = 4;
			}
			//condition for showing just one checked field
			//--------------single------------------------
			else if (pain_reliever && !(eardrops || decongestant || warm_compress || doctor)) {
			    this.mode = 5;
			} else if (eardrops && !(pain_reliever || decongestant || warm_compress || doctor)) {
			    this.mode = 6;
			} else if (decongestant && !(pain_reliever || eardrops || warm_compress || doctor)) {
			    this.mode = 7;
			} else if (warm_compress && !(pain_reliever || eardrops || decongestant || doctor)) {
			    this.mode = 8;
			} else if (doctor && !(pain_reliever || eardrops || warm_compress || decongestant)) {
			    this.mode = 9;
			}
			//-------------------------------double---------------------------
			else if (pain_reliever && eardrops && !(decongestant || warm_compress || doctor)) {
			    this.mode = 10;
			} else if (pain_reliever && decongestant && !(eardrops || warm_compress || doctor)) {
			    this.mode = 11;
			} else if (pain_reliever && warm_compress && !(eardrops || decongestant || doctor)) {
			    this.mode = 12;
			} else if (pain_reliever && doctor && !(eardrops || decongestant || warm_compress)) {
			    this.mode = 13;
			} else if (eardrops && decongestant && !(pain_reliever || warm_compress || doctor)) {
			    this.mode = 14;
			} else if (eardrops && warm_compress && !(pain_reliever || decongestant || doctor)) {
			    this.mode = 15;
			} else if (eardrops && doctor && !(pain_reliever || decongestant || warm_compress)) {
			    this.mode = 16;
			} else if (decongestant && warm_compress && !(pain_reliever || eardrops || doctor)) {
			    this.mode = 17;
			} else if (decongestant && doctor && !(pain_reliever || eardrops || warm_compress)) {
			    this.mode = 18;
			} else if (warm_compress && doctor && !(pain_reliever || eardrops || decongestant)) {
			    this.mode = 19;
			}
			//---------------------Triple----------------------
			else if (pain_reliever && eardrops && decongestant && !(warm_compress || doctor)) {
				this.mode = 20;
			} else if (pain_reliever && eardrops && warm_compress && !(decongestant || doctor)) {
				this.mode = 21;
			} else if (pain_reliever && eardrops && doctor && !(decongestant || warm_compress)) {
				this.mode = 22;
			} else if (pain_reliever && decongestant && warm_compress && !(eardrops || doctor)) {
				this.mode = 23;
			} else if (pain_reliever && decongestant && doctor && !(eardrops || warm_compress)) {
				this.mode = 24;
			} else if (pain_reliever && warm_compress && doctor && !(eardrops || decongestant)) {
				this.mode = 25;
			} else if (eardrops && decongestant && warm_compress && !(pain_reliever || doctor)) {
				this.mode = 26;
			} else if (eardrops && decongestant && doctor && !(pain_reliever || warm_compress)) {
				this.mode = 27;
			} else if (eardrops && warm_compress && doctor && !(pain_reliever || decongestant)) {
				this.mode = 28;
			} else if (decongestant && warm_compress && doctor && !(pain_reliever || eardrops)) {
				this.mode = 29;
			}
			//---------------------Quadruple----------------------
			else if (pain_reliever && eardrops && decongestant && warm_compress && !(doctor)) {
				this.mode = 30;
			} else if (pain_reliever && eardrops && decongestant && doctor && !(warm_compress)) {
				this.mode = 31;
			} else if (pain_reliever && eardrops && warm_compress && doctor && !(decongestant)) {
				this.mode = 32;
			} else if (pain_reliever && decongestant && warm_compress && doctor && !(eardrops)) {
				this.mode = 33;
			} else if (eardrops && decongestant && warm_compress && doctor && !(pain_reliever)) {
				this.mode = 34;
			}
			//------------------------------All together------------------------------------
			else if (pain_reliever && eardrops && decongestant && warm_compress && doctor) {
				this.mode = 35;
			} else {
				this.mode = 50;
				ind = 1;
			}
		}
		this.page = ind;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AdultTakeMobileListPage');
	}
}
