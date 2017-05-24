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
  selector: 'page-dryeye-adult-recom-mobile',
  templateUrl: 'dryeye-adult-recom-mobile.html'
})
export class DryeyeAdultRecomMobilePage {

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
			    severe = this.recs[0],
			mild = this.recs[1],
			burning = this.recs[2],
			morning = this.recs[3],
			painful = this.recs[4],
			sand = this.recs[5],
			four_times = this.recs[6],
			blurry = this.recs[7],
			/*iiii = $('#adult_recom_dryeye_mobile_q1_8'),
			jjjj = $('#adult_recom_dryeye_mobile_q1_9'),*/
			prevention = this.recs[8],
			allabove = false,
			none = this.recs[9];

			//Medication variables in collapsible

			var
			    thicker = severe || painful || sand,
			watery = mild || burning || sand || blurry || painful,
			nighttime = severe || mild || morning,
			cold_warm_compress = severe || mild || painful,
			preservative_free = severe || four_times;


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
			else if (thicker && !(watery || nighttime || cold_warm_compress || preservative_free)) {
				this.mode = 4;
			    
			    

			} else if (watery && !(thicker || nighttime || cold_warm_compress || preservative_free)) {
				this.mode = 5;
			    
			    

			} else if (nighttime && !(thicker || watery || cold_warm_compress || preservative_free)) {

			    this.mode = 6;
			    

			} else if (cold_warm_compress && !(thicker || watery || nighttime || preservative_free)) {

			    this.mode = 7;
			    

			} else if (preservative_free && !(thicker || watery || cold_warm_compress || nighttime)) {

			    this.mode = 8;
			    

			}
			//-------------------------------double---------------------------
			else if (thicker && watery && !(nighttime || cold_warm_compress || preservative_free)) {

			    this.mode = 9;
			    

			} else if (thicker && nighttime && !(watery || cold_warm_compress || preservative_free)) {

			    this.mode = 10;
			    

			} else if (thicker && cold_warm_compress && !(watery || nighttime || preservative_free)) {

			    this.mode = 11;
			    

			} else if (thicker && preservative_free && !(watery || nighttime || cold_warm_compress)) {

			    this.mode = 12;
			    

			} else if (watery && nighttime && !(thicker || cold_warm_compress || preservative_free)) {

			    this.mode = 13;
			    

			} else if (watery && cold_warm_compress && !(thicker || nighttime || preservative_free)) {

			    this.mode = 14;
			    

			} else if (watery && preservative_free && !(thicker || nighttime || cold_warm_compress)) {

			    this.mode = 15;
			    

			} else if (nighttime && cold_warm_compress && !(thicker || watery || preservative_free)) {

			    this.mode = 16;
			    

			} else if (nighttime && preservative_free && !(thicker || watery || cold_warm_compress)) {

			    this.mode = 17;
			    

			} else if (cold_warm_compress && preservative_free && !(thicker || watery || nighttime)) {

			    this.mode = 18;
			    

			}
			//---------------------Triple----------------------
			else if (thicker && watery && nighttime && !(cold_warm_compress || preservative_free)) {

			    this.mode = 19;
			    

			} else if (thicker && watery && cold_warm_compress && !(nighttime || preservative_free)) {

			    this.mode = 20;
			    

			} else if (thicker && watery && preservative_free && !(nighttime || cold_warm_compress)) {

			    this.mode = 21;
			    

			} else if (thicker && nighttime && cold_warm_compress && !(watery || preservative_free)) {

			    this.mode = 22;
			    

			} else if (thicker && nighttime && preservative_free && !(watery || cold_warm_compress)) {

			    this.mode = 23;
			    

			} else if (thicker && cold_warm_compress && preservative_free && !(watery || nighttime)) {

			    this.mode = 24;
			    

			} else if (watery && nighttime && cold_warm_compress && !(thicker || preservative_free)) {

			    this.mode = 25;
			    

			} else if (watery && nighttime && preservative_free && !(thicker || cold_warm_compress)) {

			    this.mode = 26;
			    

			} else if (watery && cold_warm_compress && preservative_free && !(thicker || nighttime)) {

			    this.mode = 27;
			    

			} else if (nighttime && cold_warm_compress && preservative_free && !(thicker || watery)) {

			    this.mode = 28;
			    

			}
			//---------------------Quadruple----------------------
			else if (thicker && watery && nighttime && cold_warm_compress && !(preservative_free)) {

			    this.mode = 29;
			    

			} else if (thicker && watery && nighttime && preservative_free && !(cold_warm_compress)) {

			    this.mode = 30;
			    

			} else if (thicker && watery && cold_warm_compress && preservative_free && !(nighttime)) {

			    this.mode = 31;
			    

			} else if (thicker && nighttime && cold_warm_compress && preservative_free && !(watery)) {

			    this.mode = 32;
			    

			} else if (watery && nighttime && cold_warm_compress && preservative_free && !(thicker)) {

			    this.mode = 33;
			}
			//------------------------------All together------------------------------------
			else if (thicker && watery && nighttime && cold_warm_compress && preservative_free) {

			    this.mode = 34;
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
