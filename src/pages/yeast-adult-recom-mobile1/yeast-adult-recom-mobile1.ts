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
  selector: 'page-yeast-adult-recom-mobile1',
  templateUrl: 'yeast-adult-recom-mobile1.html'
})
export class YeastAdultRecomMobile1Page {

	@ViewChild('mainBody') elementView: ElementRef;
	@ViewChild(Content) content: Content;
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
	MyContent = {
	    width: 0,
	    height: 0,
	    screenWidth: 0,
	    screenHeight: 0,
	    scrollPos: 0,
	    isArrowShow: false
	};
	SortDlg = {
	    show: false,
	    height: 117,
	    width: 176,
	    maxWidth: 0,
	    left: 0,
	    top: 0
	}
	Dlg = [
		{ // 0
		    show: false,
		    width: 254,
		    height: 78,
		    maxWidth: 0,
		    left: 0,
		    top: 0
	  	},
	  	{ // 1
		    show: false,
		    width: 274,
		    height: 122,
		    maxWidth: 0,
		    left: 0,
		    top: 0
	  	},
	  	{ // 2
		    show: false,
		    width: 260,
		    height: 56,
		    maxWidth: 0,
		    left: 0,
		    top: 0
	  	},
	  	{ // 3
		    show: false,
		    width: 274,
		    height: 122,
		    maxWidth: 0,
		    left: 0,
		    top: 0
	  	},
	  	{ // 4
		    show: false,
		    width: 274,
		    height: 78,
		    maxWidth: 0,
		    left: 0,
		    top: 0
	  	},
	  	{ // 5
		    show: false,
		    width: 274,
		    height: 210,
		    maxWidth: 0,
		    left: 0,
		    top: 0
	  	},
	  	{ // 6
		    show: false,
		    width: 274,
		    height: 166,
		    maxWidth: 0,
		    left: 0,
		    top: 0
	  	},
		{ // 7
		    show: false,
		    width: 274,
		    height: 78,
		    maxWidth: 0,
		    left: 0,
		    top: 0
	  	},
	  	{ // 8
		    show: false,
		    width: 274,
		    height: 122,
		    maxWidth: 0,
		    left: 0,
		    top: 0
	  	},
	  	{ // 9
		    show: false,
		    width: 274,
		    height: 78,
		    maxWidth: 0,
		    left: 0,
		    top: 0
	  	},
	];
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform) {
		this.menu = menu;
		this.AbsoluteURL = GlobalVars.getAbsoluteURL();
		this.page = 0;
		this.mode = 0;
		this.why = false;
		this.recs = [
			true, true, false, false
		];
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

		this.MyContent.screenWidth = this.platform.width();
	    this.MyContent.screenHeight = this.platform.height();
	    this.MyContent.scrollPos = 0;
	}
	showMenu() {
		this.menu.open();
	}
	toggleSortDlg(b: boolean) {
	    if (b)
	    {
	      var scrollPos = this.content.getContentDimensions().scrollTop;
	      if (this.MyContent.height == 0)
	      {
	        this.MyContent.height = this.elementView.nativeElement.offsetHeight + 56;
	        this.MyContent.width = this.elementView.nativeElement.offsetWidth;
	      }
	      this.SortDlg.maxWidth = this.MyContent.width * 0.8;
	      this.SortDlg.left = this.MyContent.screenWidth - this.SortDlg.width - 20;
	      this.SortDlg.top = (this.MyContent.screenHeight - this.SortDlg.height) / 2 + scrollPos;
	    }
	    this.SortDlg.show = b;
	}
	toggleDlg(ind: number, b: boolean) {
		if (b)
		{
			var scrollPos = this.content.getContentDimensions().scrollTop;
			this.Dlg[ind].maxWidth = this.MyContent.width * 0.8;
			this.Dlg[ind].left = (this.MyContent.screenWidth - this.Dlg[ind].width) / 2;
			this.Dlg[ind].top = (this.MyContent.screenHeight - this.Dlg[ind].height) / 2 + scrollPos - 60;
		}
		this.Dlg[ind].show = b;
	}
	toggleSort(ind: number) {
	    this.recs[ind] = !this.recs[ind];
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
			// 
		}
		this.page = ind;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AdultTakeMobileListPage');
	}

}
