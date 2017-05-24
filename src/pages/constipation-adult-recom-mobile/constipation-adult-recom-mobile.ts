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
import { LaxativesPage } from '../laxatives/laxatives';

@Component({
  selector: 'page-constipation-adult-recom-mobile',
  templateUrl: 'constipation-adult-recom-mobile.html'
})
export class ConstipationAdultRecomMobilePage {

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
		this.expands = [true, true, true, true, true, true, true, true, true, true, 
							true, true, true, true, true, true, true, true, true, true, true];
		this.firstname = GlobalVars.getFirstname();
		if (this.firstname != "")
			this.firstname += ",";
		this.subPages = [
				UrgentCarePage, 			// 0
				AllergyMedsPage,			// 1
				ContactSocialMobilePage,	// 2
				CommentLoginPage,			// 3
				LaxativesPage,				// 4
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
		if (ind == 2)
		{
			var
			    hard = this.recs[0],
			overnight = this.recs[1],
			fast = this.recs[2],
			daily = this.recs[3],
			history = this.recs[4],
			nausea = this.recs[5],
			stomachache = this.recs[6],
			blood = this.recs[7],
			diarrhea = this.recs[8],
			pencil_like = this.recs[9],
			prevention = this.recs[11],
			enema = this.recs[10],
			none = this.recs[12];

			//Medication variables in collapsible

			var
			    stool_softener = hard || history,
			stimulant = overnight || fast,
			lubricant = fast || stomachache,
			fibers = daily || history,
			saline = overnight || fast || enema,
			hyper_osmotic = daily || history || stomachache;


			//conditions for showing none of the above division.

			if (none) {
				this.mode =1;
			}
			else if (prevention) {
			    this.mode =2;
			}
			//conditions for All division + Others else if.
			else if (nausea || blood || diarrhea || pencil_like) {
			    this.mode =3;
			}

			//condition for showing just one checked field

			//--------------single------------------------
			else if (stool_softener && !(stimulant || lubricant || fibers || saline || hyper_osmotic)) {
			    this.mode = 4;

			} else if (stimulant && !(stool_softener || lubricant || fibers || saline || hyper_osmotic)) {
				this.mode = 5;
			    
			    
			    

			} else if (lubricant && !(stool_softener || stimulant || fibers || saline || hyper_osmotic)) {
				this.mode=6;

			    

			} else if (fibers && !(stool_softener || stimulant || lubricant || saline || hyper_osmotic)) {

			    this.mode=7;
			    

			} else if (saline && !(stool_softener || stimulant || fibers || lubricant || hyper_osmotic)) {

			    this.mode=8;
			    

			} else if (hyper_osmotic && !(stool_softener || stimulant || fibers || lubricant || saline)) {

			    this.mode=9;
			    

			}



			//-------------------------------double---------------------------
			else if (stool_softener && stimulant && !(lubricant || fibers || saline || hyper_osmotic)) {

			    this.mode=10;
			    

			} else if (stool_softener && lubricant && !(stimulant || fibers || saline || hyper_osmotic)) {

			    this.mode=11;
			    

			} else if (stool_softener && fibers && !(stimulant || lubricant || saline || hyper_osmotic)) {

			    this.mode=12;
			    

			} else if (stool_softener && saline && !(stimulant || lubricant || fibers || hyper_osmotic)) {

			    this.mode=13;
			    
			    

			} else if (stool_softener && hyper_osmotic && !(stimulant || lubricant || fibers || saline)) {

			    this.mode=14;
			    
			    

			} else if (stimulant && lubricant && !(stool_softener || fibers || saline || hyper_osmotic)) {

			    this.mode=15;
			    
			    

			} else if (stimulant && fibers && !(stool_softener || lubricant || saline || hyper_osmotic)) {

			    this.mode=16;
			    
			    

			} else if (stimulant && saline && !(stool_softener || lubricant || fibers || hyper_osmotic)) {

			    this.mode=17;
			    
			    

			} else if (stimulant && hyper_osmotic && !(stool_softener || lubricant || fibers || saline)) {

			    this.mode=18;
			    
			    

			} else if (lubricant && fibers && !(stool_softener || stimulant || saline || hyper_osmotic)) {

			    this.mode=19;
			    
			    

			} else if (lubricant && saline && !(stool_softener || stimulant || fibers || hyper_osmotic)) {

			    this.mode=20;
			    
			    

			} else if (lubricant && hyper_osmotic && !(stool_softener || stimulant || fibers || saline)) {

			    this.mode=21;
			    
			    

			} else if (fibers && saline && !(stool_softener || stimulant || lubricant || hyper_osmotic)) {

			    this.mode=22;
			    
			    

			} else if (fibers && hyper_osmotic && !(stool_softener || stimulant || lubricant || saline)) {

			    this.mode=23;
			    
			    

			} else if (saline && hyper_osmotic && !(stool_softener || stimulant || lubricant || fibers)) {

			    this.mode=24;
			    
			    

			}



			//---------------------Triple----------------------
			else if (stool_softener && stimulant && lubricant && !(fibers || saline || hyper_osmotic)) {

			    this.mode=25;
			    
			    

			} else if (stool_softener && stimulant && fibers && !(lubricant || saline || hyper_osmotic)) {

			    this.mode=26;
			    
			    

			} else if (stool_softener && stimulant && saline && !(lubricant || fibers || hyper_osmotic)) {

			    this.mode=27;
			    
			    

			} else if (stool_softener && stimulant && hyper_osmotic && !(lubricant || fibers || saline)) {

			    this.mode=28;
			    
			    

			} else if (stool_softener && lubricant && fibers && !(stimulant || saline || hyper_osmotic)) {

			    this.mode=29;
			    
			    

			} else if (stool_softener && lubricant && saline && !(stimulant || fibers || hyper_osmotic)) {

			    this.mode=30;
			    
			    

			} else if (stool_softener && lubricant && hyper_osmotic && !(stimulant || fibers || saline)) {

			    this.mode=31;
			    
			    

			} else if (stool_softener && fibers && saline && !(stimulant || lubricant || hyper_osmotic)) {

			    this.mode=32;
			    
			    

			} else if (stool_softener && fibers && hyper_osmotic && !(stimulant || lubricant || saline)) {

			    this.mode=33;
			    
			    

			} else if (stool_softener && saline && hyper_osmotic && !(stimulant || lubricant || fibers)) {

			    this.mode=34;
			    
			    

			} else if (stimulant && lubricant && fibers && !(stool_softener || saline || hyper_osmotic)) {

			    this.mode=35;
			    
			    

			} else if (stimulant && lubricant && saline && !(stool_softener || fibers || hyper_osmotic)) {

			    this.mode=36;
			    
			    

			} else if (stimulant && lubricant && hyper_osmotic && !(stool_softener || fibers || saline)) {

			    this.mode=37;
			    
			    

			} else if (stimulant && fibers && saline && !(stool_softener || lubricant || hyper_osmotic)) {

			    this.mode=38;
			    
			    

			} else if (stimulant && fibers && hyper_osmotic && !(stool_softener || lubricant || saline)) {

			    this.mode=39;
			    
			    

			} else if (stimulant && saline && hyper_osmotic && !(stool_softener || lubricant || fibers)) {

			    this.mode=40;
			    
			    

			} else if (lubricant && fibers && saline && !(stool_softener || stimulant || hyper_osmotic)) {

			    this.mode=41;
			    
			    

			} else if (lubricant && fibers && hyper_osmotic && !(stool_softener || stimulant || saline)) {

			    this.mode=42;
			    
			    

			} else if (lubricant && saline && hyper_osmotic && !(stool_softener || stimulant || fibers)) {

			    this.mode=43;
			    
			    

			} else if (fibers && saline && hyper_osmotic && !(stool_softener || stimulant || lubricant)) {

			    this.mode=44;
			    
			    

			}



			//---------------------Quadruple----------------------
			else if (stool_softener && stimulant && lubricant && fibers && !(saline || hyper_osmotic)) {

			    this.mode=45;
			    
			    

			} else if (stool_softener && stimulant && lubricant && saline && !(fibers || hyper_osmotic)) {

			    this.mode=46;
			    
			    

			} else if (stool_softener && stimulant && lubricant && hyper_osmotic && !(fibers || saline)) {

			    this.mode=47;
			    
			    

			} else if (stool_softener && stimulant && fibers && saline && !(lubricant || hyper_osmotic)) {

			    this.mode=48;
			    
			    

			} else if (stool_softener && stimulant && fibers && hyper_osmotic && !(lubricant || saline)) {

			    this.mode=49;
			    
			    

			} else if (stool_softener && stimulant && saline && hyper_osmotic && !(lubricant || fibers)) {

			    this.mode=50;
			    
			    

			} else if (stool_softener && lubricant && fibers && saline && !(stimulant || hyper_osmotic)) {

			    this.mode=51;
			    
			    

			} else if (stool_softener && lubricant && fibers && hyper_osmotic && !(stimulant || saline)) {

			    this.mode=52;
			    
			    

			} else if (stool_softener && lubricant && saline && hyper_osmotic && !(stimulant || fibers)) {

			    this.mode=53;
			    
			    

			} else if (stool_softener && fibers && saline && hyper_osmotic && !(stimulant || lubricant)) {

			    this.mode=54;
			    
			    

			} else if (stimulant && lubricant && fibers && saline && !(stool_softener || hyper_osmotic)) {

			    this.mode=55;
			    
			    

			} else if (stimulant && lubricant && fibers && hyper_osmotic && !(stool_softener || saline)) {

			    this.mode=56;
			    
			    

			} else if (stimulant && lubricant && saline && hyper_osmotic && !(stool_softener || fibers)) {

			    this.mode=57;
			    
			    

			} else if (stimulant && fibers && saline && hyper_osmotic && !(stool_softener || lubricant)) {

			    this.mode=58;
			    
			    

			} else if (lubricant && fibers && saline && hyper_osmotic && !(stool_softener || stimulant)) {

			    this.mode=59;
			    
			    

			}


			//------------------------------5 options------------------------------------
			else if (stool_softener && stimulant && lubricant && fibers && saline && !(hyper_osmotic)) {

			    this.mode=60;
			    
			    

			} else if (stool_softener && stimulant && lubricant && fibers && hyper_osmotic && !(saline)) {

			    this.mode=61;
			    
			    

			} else if (stool_softener && stimulant && lubricant && saline && hyper_osmotic && !(fibers)) {

			    this.mode=62;
			    
			    

			} else if (stool_softener && stimulant && fibers && saline && hyper_osmotic && !(lubricant)) {

			    this.mode=63;
			    
			    

			} else if (stool_softener && lubricant && fibers && saline && hyper_osmotic && !(stimulant)) {

			    this.mode=64;
			    
			    

			} else if (stimulant && lubricant && fibers && saline && hyper_osmotic && !(stool_softener)) {

			    this.mode=65;
			    
			    

			}



			//---------------All together-----------------------------	
			else if (stool_softener && stimulant && lubricant && fibers && saline && hyper_osmotic) {

			    this.mode=66;
			    
			    

			} else {
				ind = 1; this.mode = 100;
			}
		}
		this.page = ind;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AdultTakeMobileListPage');
	}
}
