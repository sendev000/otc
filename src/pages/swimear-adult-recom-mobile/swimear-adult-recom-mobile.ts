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
  selector: 'page-swimear-adult-recom-mobile',
  templateUrl: 'swimear-adult-recom-mobile.html'
})
export class SwimearAdultRecomMobilePage {

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
		this.recs[8] = false;
		this.recs[9] = false;
		if (ind>=8){
			this.recs[ind] = temp;
			this.toggleAllRecs(false);
		}
	}
	toggleAllRecs(b: boolean){
		for (let i=0;i<8;i++)
			this.recs[i] = b;
	}
	goBack() {
		this.toggleAllRecs(false);
		this.recs[8] = this.recs[9] = false;
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
			    ruptured = this.recs[0],
			pus = this.recs[1],
			painful = this.recs[2],
			fluid = this.recs[3],
			swollen = this.recs[4],
			fever = this.recs[5],
			muffled = this.recs[6],
			itchy = this.recs[7],
			/*iiii = $('#adult_recom_swimear_mobile_q1_8'),
			jjjj = $('#adult_recom_swimear_mobile_q1_9'),*/
			prevention = this.recs[8],
			allabove = false,
			none = this.recs[9];

			//Medication variables in collapsible

			var
			    ear_drops = fluid || muffled || itchy,
			pain_reliever = painful || swollen || fever,
			antihistamine = itchy,
			warm_compress = ruptured || painful || swollen,
			doctor = ruptured || pus || painful || swollen || fever || muffled;


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


			//conditions for doctor only.
			else if (ruptured) {
			    this.mode = 4;
			   

			}

			//condition for showing just one checked field

			//--------------single------------------------
			else if (ear_drops && !(pain_reliever || antihistamine || warm_compress || doctor)) {
			    this.mode = 5;
			    

			} else if (pain_reliever && !(ear_drops || antihistamine || warm_compress || doctor)) {

			    this.mode = 6;
			    

			} else if (antihistamine && !(ear_drops || pain_reliever || warm_compress || doctor)) {

			    this.mode = 7;
			    

			} else if (warm_compress && !(ear_drops || pain_reliever || antihistamine || doctor)) {

			    this.mode = 8;
			    

			} else if (doctor && !(ear_drops || pain_reliever || warm_compress || antihistamine)) {

			    this.mode = 9;
			    

			}



			//-------------------------------double---------------------------
			else if (ear_drops && pain_reliever && !(antihistamine || warm_compress || doctor)) {

			    this.mode = 10;
			    

			} else if (ear_drops && antihistamine && !(pain_reliever || warm_compress || doctor)) {

			    this.mode = 11;
			    

			} else if (ear_drops && warm_compress && !(pain_reliever || antihistamine || doctor)) {

			    this.mode = 12;
			    

			} else if (ear_drops && doctor && !(pain_reliever || antihistamine || warm_compress)) {

			    this.mode = 13;
			    

			} else if (pain_reliever && antihistamine && !(ear_drops || warm_compress || doctor)) {

			    this.mode = 14;
			    

			} else if (pain_reliever && warm_compress && !(ear_drops || antihistamine || doctor)) {

			    this.mode = 15;
			    

			} else if (pain_reliever && doctor && !(ear_drops || antihistamine || warm_compress)) {

			    this.mode = 16;
			    

			} else if (antihistamine && warm_compress && !(ear_drops || pain_reliever || doctor)) {

			    this.mode = 17;
			    

			} else if (antihistamine && doctor && !(ear_drops || pain_reliever || warm_compress)) {

			    this.mode = 18;
			    

			} else if (warm_compress && doctor && !(ear_drops || pain_reliever || antihistamine)) {

			    this.mode = 19;
			    

			}



			//---------------------Triple----------------------
			else if (ear_drops && pain_reliever && antihistamine && !(warm_compress || doctor)) {

			    this.mode = 20;
			    

			} else if (ear_drops && pain_reliever && warm_compress && !(antihistamine || doctor)) {

			    this.mode = 21;
			    

			} else if (ear_drops && pain_reliever && doctor && !(antihistamine || warm_compress)) {

			    this.mode = 22;
			    

			} else if (ear_drops && antihistamine && warm_compress && !(pain_reliever || doctor)) {

			    this.mode = 23;
			    

			} else if (ear_drops && antihistamine && doctor && !(pain_reliever || warm_compress)) {

			    this.mode = 24;
			    

			} else if (ear_drops && warm_compress && doctor && !(pain_reliever || antihistamine)) {

			    this.mode = 25;
			    

			} else if (pain_reliever && antihistamine && warm_compress && !(ear_drops || doctor)) {

			    this.mode = 26;
			    

			} else if (pain_reliever && antihistamine && doctor && !(ear_drops || warm_compress)) {

			    this.mode = 27;
			    

			} else if (pain_reliever && warm_compress && doctor && !(ear_drops || antihistamine)) {

			    this.mode = 28;
			    

			} else if (antihistamine && warm_compress && doctor && !(ear_drops || pain_reliever)) {

			    this.mode = 29;
			    

			}



			//---------------------Quadruple----------------------
			else if (ear_drops && pain_reliever && antihistamine && warm_compress && !(doctor)) {

			    this.mode = 30;
			    

			} else if (ear_drops && pain_reliever && antihistamine && doctor && !(warm_compress)) {

			    this.mode = 31;
			    

			} else if (ear_drops && pain_reliever && warm_compress && doctor && !(antihistamine)) {

			    this.mode = 32;
			    

			} else if (ear_drops && antihistamine && warm_compress && doctor && !(pain_reliever)) {

			    this.mode = 33;
			    

			} else if (pain_reliever && antihistamine && warm_compress && doctor && !(ear_drops)) {

			    this.mode = 34;
			    

			}



			//------------------------------All together------------------------------------
			else if (ear_drops && pain_reliever && antihistamine && warm_compress && doctor) {

			    this.mode = 35;

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
