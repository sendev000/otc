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
  selector: 'page-cough-adult-recom-mobile',
  templateUrl: 'cough-adult-recom-mobile.html'
})
export class CoughAdultRecomMobilePage {

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
		this.expands = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
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
		this.recs[12] = false;
		this.recs[13] = false;
		if (ind>=12){
			this.recs[ind] = temp;
			if (ind == 12)
				this.toggleAllRecs(true);
			else
				this.toggleAllRecs(false);
		}
	}
	toggleAllRecs(b: boolean){
		for (let i=0;i<12;i++)
			this.recs[i] = b;
	}
	goBack() {
		this.toggleAllRecs(false);
		this.recs[12] = this.recs[13] = false;
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
			    dry = this.recs[0],
			productive = this.recs[1],
			congestion = this.recs[2],
			runnyNose = this.recs[3],
			soreThroat = this.recs[4],
			night = this.recs[5],
			tickly = this.recs[6],
			itchy = this.recs[7],
			heaviness = this.recs[8],
			headache = this.recs[9],
			blood = this.recs[10],
			noSleep = this.recs[11],
			prevention = false,
			allabove = this.recs[12],
			none = this.recs[13];

			//Medication variables in collapsible

			var
			    dextromethorphan = dry || tickly || night,
			guaifenesin = productive || heaviness,
			coughDrops = dry || tickly || soreThroat,
			decongestant = congestion,
			antihistamine = runnyNose || itchy;


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

			//condition for a specific  checked field	
			else if (headache || blood || noSleep) {
			    this.mode = 4;
			    

			}



			//condition for showing just one checked field

			//--------------single------------------------
			else if (dextromethorphan && !(guaifenesin || coughDrops || decongestant || antihistamine)) {
			    this.mode = 5;
			    

			} else if (guaifenesin && !(dextromethorphan || coughDrops || decongestant || antihistamine)) {
				this.mode = 6;
			    
			    

			} else if (coughDrops && !(dextromethorphan || guaifenesin || decongestant || antihistamine)) {

			    this.mode = 7;
			    

			} else if (decongestant && !(dextromethorphan || guaifenesin || coughDrops || antihistamine)) {

			    this.mode = 8;
			    

			} else if (antihistamine && !(dextromethorphan || guaifenesin || decongestant || coughDrops)) {

			    this.mode = 9;
			    

			}



			//-------------------------------double---------------------------
			else if (dextromethorphan && guaifenesin && !(coughDrops || decongestant || antihistamine)) {

			    this.mode = 10;
			    

			} else if (dextromethorphan && coughDrops && !(guaifenesin || decongestant || antihistamine)) {

			    this.mode = 11;
			    

			} else if (dextromethorphan && decongestant && !(guaifenesin || coughDrops || antihistamine)) {

			    this.mode = 12;
			    

			} else if (dextromethorphan && antihistamine && !(guaifenesin || coughDrops || decongestant)) {

			    this.mode = 13;
			    

			} else if (guaifenesin && coughDrops && !(dextromethorphan || decongestant || antihistamine)) {

			    this.mode = 14;
			    

			} else if (guaifenesin && decongestant && !(dextromethorphan || coughDrops || antihistamine)) {

			    this.mode = 15;
			    

			} else if (guaifenesin && antihistamine && !(dextromethorphan || coughDrops || decongestant)) {

			    this.mode = 16;
			    

			} else if (coughDrops && decongestant && !(dextromethorphan || guaifenesin || antihistamine)) {

			    this.mode = 17;
			    

			} else if (coughDrops && antihistamine && !(dextromethorphan || guaifenesin || decongestant)) {

			    this.mode = 18;
			    

			} else if (decongestant && antihistamine && !(dextromethorphan || guaifenesin || coughDrops)) {

			    this.mode = 19;
			    

			}



			//---------------------Triple----------------------
			else if (dextromethorphan && guaifenesin && coughDrops && !(decongestant || antihistamine)) {

			    this.mode = 20;
			    

			} else if (dextromethorphan && guaifenesin && decongestant && !(coughDrops || antihistamine)) {

			    this.mode = 21;
			    

			} else if (dextromethorphan && guaifenesin && antihistamine && !(coughDrops || decongestant)) {

			    this.mode = 22;
			    

			} else if (dextromethorphan && coughDrops && decongestant && !(guaifenesin || antihistamine)) {

			    this.mode = 23;
			    

			} else if (dextromethorphan && coughDrops && antihistamine && !(guaifenesin || decongestant)) {

			    this.mode = 24;
			    

			} else if (dextromethorphan && decongestant && antihistamine && !(guaifenesin || coughDrops)) {

			    this.mode = 25;
			    

			} else if (guaifenesin && coughDrops && decongestant && !(dextromethorphan || antihistamine)) {

			    this.mode = 26;
			    

			} else if (guaifenesin && coughDrops && antihistamine && !(dextromethorphan || decongestant)) {

			    this.mode = 27;
			    

			} else if (guaifenesin && decongestant && antihistamine && !(dextromethorphan || coughDrops)) {

			    this.mode = 28;
			    

			} else if (coughDrops && decongestant && antihistamine && !(dextromethorphan || guaifenesin)) {

			    this.mode = 29;
			    

			}



			//---------------------Quadruple----------------------
			else if (dextromethorphan && guaifenesin && coughDrops && decongestant && !(antihistamine)) {

			    this.mode = 30;
			    

			} else if (dextromethorphan && guaifenesin && coughDrops && antihistamine && !(decongestant)) {

			    this.mode = 31;
			    

			} else if (dextromethorphan && guaifenesin && decongestant && antihistamine && !(coughDrops)) {

			    this.mode = 32;
			    

			} else if (dextromethorphan && coughDrops && decongestant && antihistamine && !(guaifenesin)) {

			    this.mode = 33;
			    

			} else if (guaifenesin && coughDrops && decongestant && antihistamine && !(dextromethorphan)) {

			    this.mode = 34;
			    

			}
			//------------------------------All together------------------------------------
			else if (dextromethorphan && guaifenesin && coughDrops && decongestant && antihistamine) {

			    this.mode = 35;
			   
			} else {
				this.mode = 50;
			}
		}
		this.page = ind;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AdultTakeMobileListPage');
	}

}
