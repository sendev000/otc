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
  selector: 'page-sleep-adult-recom-mobile',
  templateUrl: 'sleep-adult-recom-mobile.html'
})
export class SleepAdultRecomMobilePage {

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
		this.expands = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
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
			    sleep_quicker = this.recs[0],
			wake_early = this.recs[1],
			wake_often = this.recs[2],
			work_nights = this.recs[3],
			stressed = this.recs[4],
			toothache = this.recs[5],
			headache = this.recs[6],
			anxiety = this.recs[7],
			bigday = this.recs[8],
			jetlag = this.recs[9],
			prevention = this.recs[11],
			allabove = this.recs[10],
			none = this.recs[12];

			//Medication variables in collapsible

			var
			    antihistamine = wake_early || wake_often,
			antihistamine_painrelief = toothache || headache,
			melatonin = sleep_quicker || work_nights || bigday || jetlag,
			valerian = stressed || anxiety || bigday,
			combination = stressed || anxiety || bigday || sleep_quicker;


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
			else if (antihistamine && !(antihistamine_painrelief || melatonin || valerian || combination)) {
				this.mode = 4;
			    

			} else if (antihistamine_painrelief && !(antihistamine || melatonin || valerian || combination)) {
				this.mode = 5;
			    

			} else if (melatonin && !(antihistamine || antihistamine_painrelief || valerian || combination)) {
				this.mode = 6;
			    

			} else if (valerian && !(antihistamine || antihistamine_painrelief || melatonin || combination)) {
				this.mode = 7;
			    

			} else if (combination && !(antihistamine || antihistamine_painrelief || valerian || melatonin)) {
				this.mode = 8;
			    

			}
			//-------------------------------double---------------------------
			else if (antihistamine && antihistamine_painrelief && !(melatonin || valerian || combination)) {
				this.mode = 9;
			    

			} else if (antihistamine && melatonin && !(antihistamine_painrelief || valerian || combination)) {
				this.mode = 10;
			    

			} else if (antihistamine && valerian && !(antihistamine_painrelief || melatonin || combination)) {
				this.mode = 11;
			    

			} else if (antihistamine && combination && !(antihistamine_painrelief || melatonin || valerian)) {
				this.mode = 12;
			    

			} else if (antihistamine_painrelief && melatonin && !(antihistamine || valerian || combination)) {
				this.mode = 13;
			    

			} else if (antihistamine_painrelief && valerian && !(antihistamine || melatonin || combination)) {
				this.mode = 14;
			    

			} else if (antihistamine_painrelief && combination && !(antihistamine || melatonin || valerian)) {
				this.mode = 15;
			    

			} else if (melatonin && valerian && !(antihistamine || antihistamine_painrelief || combination)) {
				this.mode = 16;
			    

			} else if (melatonin && combination && !(antihistamine || antihistamine_painrelief || valerian)) {
				this.mode = 17;
			    

			} else if (valerian && combination && !(antihistamine || antihistamine_painrelief || melatonin)) {
				this.mode = 18;
			    

			}
			//---------------------Triple----------------------
			else if (antihistamine && antihistamine_painrelief && melatonin && !(valerian || combination)) {
				this.mode = 19;
			    

			} else if (antihistamine && antihistamine_painrelief && valerian && !(melatonin || combination)) {
				this.mode = 20;
			    

			} else if (antihistamine && antihistamine_painrelief && combination && !(melatonin || valerian)) {
				this.mode = 21;
			    

			} else if (antihistamine && melatonin && valerian && !(antihistamine_painrelief || combination)) {
				this.mode = 22;
			    

			} else if (antihistamine && melatonin && combination && !(antihistamine_painrelief || valerian)) {
				this.mode = 23;
			    

			} else if (antihistamine && valerian && combination && !(antihistamine_painrelief || melatonin)) {
				this.mode = 24;
			    

			} else if (antihistamine_painrelief && melatonin && valerian && !(antihistamine || combination)) {
				this.mode = 25;
			    

			} else if (antihistamine_painrelief && melatonin && combination && !(antihistamine || valerian)) {
				this.mode = 26;
			    

			} else if (antihistamine_painrelief && valerian && combination && !(antihistamine || melatonin)) {
				this.mode = 27;
			    

			} else if (melatonin && valerian && combination && !(antihistamine || antihistamine_painrelief)) {
				this.mode = 28;
			    

			}
			//---------------------Quadruple----------------------
			else if (antihistamine && antihistamine_painrelief && melatonin && valerian && !(combination)) {
				this.mode = 29;
			    

			} else if (antihistamine && antihistamine_painrelief && melatonin && combination && !(valerian)) {
				this.mode = 30;
			    

			} else if (antihistamine && antihistamine_painrelief && valerian && combination && !(melatonin)) {
				this.mode = 31;
			    

			} else if (antihistamine && melatonin && valerian && combination && !(antihistamine_painrelief)) {
				this.mode = 32;
			    

			} else if (antihistamine_painrelief && melatonin && valerian && combination && !(antihistamine)) {
				this.mode = 33;
			    

			}
			//------------------------------All together------------------------------------
			else if (antihistamine && antihistamine_painrelief && melatonin && valerian && combination) {
				this.mode = 34;
			    

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
