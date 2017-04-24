import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import { GlobalVars } from '../providers/globalvars';
import { ColdMobilePage } from '../cold-mobile/cold-mobile';
import { UrgentCarePage } from '../urgent-care/urgent-care';
import { ColdAdultRecomMobilePage } from '../cold-adult-recom-mobile/cold-adult-recom-mobile';

@Component({
  selector: 'page-cold-mobile-infographics',
  templateUrl: 'cold-mobile-infographics.html'
})
export class ColdMobileInfographicsPage {
	@ViewChild(Content) content: Content;
	MyContent = {
	    screenWidth: 0,
	    screenHeight: 0,
	  }
	FYIDlg = {
	    show: false,
	    height: 321,
	    width: 0,
	    maxWidth: 0,
	    left: 0,
	    top: 0
	  };
	FYIDlg2 = {
	    show: false,
	    height: 321,
	    width: 0,
	    maxWidth: 0,
	    left: 0,
	    top: 0
	  };
	FYIDlg3 = {
	    show: false,
	    height: 321,
	    width: 0,
	    maxWidth: 0,
	    left: 0,
	    top: 0
	  };
	subPages: any;
	feedbackPage: number;
	AbsoluteURL: string;
	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform) {
		this.menu = menu;
		this.AbsoluteURL = GlobalVars.getAbsoluteURL();
		this.feedbackPage = 0;
		this.subPages = [
  			ColdMobilePage, 			// 0
  			UrgentCarePage,				// 1
  			ColdAdultRecomMobilePage,	// 2

  		];
	}
	showMenu() {
		this.menu.open();
	}
	startFeedback() {
		this.feedbackPage = 1;
		this.FYIDlg2.show = false;
		this.FYIDlg3.show = false;
	}
	gotoSubPage(id: number) {
	    this.navCtrl.push(this.subPages[id]);
	}
	toggleFYIDlg(b: boolean) {
	    if (b)
	    {
			var scrollPos = this.content.getContentDimensions().scrollTop;
			this.MyContent.screenWidth = this.platform.width();
			this.MyContent.screenHeight = this.platform.height();
			this.FYIDlg.width = this.MyContent.screenWidth * 0.9;
			this.FYIDlg.maxWidth = 310;
			if (this.FYIDlg.width > this.FYIDlg.maxWidth)
				this.FYIDlg.width = this.FYIDlg.maxWidth;
			this.FYIDlg.left = (this.MyContent.screenWidth - this.FYIDlg.width) / 2;
			this.FYIDlg.top = (this.MyContent.screenHeight - this.FYIDlg.height) / 2 + scrollPos - 60;
	    }
	    this.FYIDlg.show = b;
	}
	toggleFYIDlg2(b: boolean) {
	    if (b)
	    {
			var scrollPos = this.content.getContentDimensions().scrollTop;
			this.MyContent.screenWidth = this.platform.width();
			this.MyContent.screenHeight = this.platform.height();
			this.FYIDlg2.width = this.MyContent.screenWidth * 0.9;
			this.FYIDlg2.maxWidth = 480;
			if (this.FYIDlg2.width > this.FYIDlg2.maxWidth)
				this.FYIDlg2.width = this.FYIDlg2.maxWidth;
			this.FYIDlg2.left = (this.MyContent.screenWidth - this.FYIDlg2.width) / 2;
			this.FYIDlg2.top = (this.MyContent.screenHeight - this.FYIDlg2.height) / 2 + scrollPos - 60;
	    }
	    this.FYIDlg2.show = b;
	}
	toggleFYIDlg3(b: boolean) {
	    if (b)
	    {
			var scrollPos = this.content.getContentDimensions().scrollTop;
			this.MyContent.screenWidth = this.platform.width();
			this.MyContent.screenHeight = this.platform.height();
			this.FYIDlg3.width = this.MyContent.screenWidth * 0.9;
			this.FYIDlg3.maxWidth = 480;
			if (this.FYIDlg3.width > this.FYIDlg3.maxWidth)
				this.FYIDlg3.width = this.FYIDlg3.maxWidth;
			this.FYIDlg3.left = (this.MyContent.screenWidth - this.FYIDlg3.width) / 2;
			this.FYIDlg3.top = (this.MyContent.screenHeight - this.FYIDlg3.height) / 2 + scrollPos - 60;
	    }
	    this.FYIDlg3.show = b;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AdultTakeMobileListPage');
	}
}
