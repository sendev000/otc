import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { UrgentCarePage } from '../urgent-care/urgent-care';
import { SinusPressureMobilePage } from '../sinus-pressure-mobile/sinus-pressure-mobile';
import { SinusAdultRecomMobilePage } from '../sinus-adult-recom-mobile/sinus-adult-recom-mobile';

@Component({
  selector: 'page-sinus-pressure-infographics-mobile',
  templateUrl: 'sinus-pressure-infographics-mobile.html'
})
export class SinusPressureInfographicsMobilePage {

@ViewChild(Content) content: Content;
	MyContent = {
	    screenWidth: 0,
	    screenHeight: 0,
	  }
	FYIDlg = {
	    show: false,
	    height: 176,
	    width: 0,
	    maxWidth: 0,
	    left: 0,
	    top: 0
	  };
	page: number;
	subPages: any;
  	AbsoluteURL: string;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform) {
	  	this.menu = menu;
	  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
	  	this.page = 0;
	  	this.subPages = [
	  			UrgentCarePage,					// 0
	  			SinusAdultRecomMobilePage,		// 1
	  			SinusPressureMobilePage, 		// 2
	  		];

	}
	showMenu() {
		this.menu.open();
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
			this.FYIDlg.maxWidth = 600;
			if (this.FYIDlg.width > this.FYIDlg.maxWidth)
				this.FYIDlg.width = this.FYIDlg.maxWidth;
			this.FYIDlg.left = (this.MyContent.screenWidth - this.FYIDlg.width) / 2;
			this.FYIDlg.top = (this.MyContent.screenHeight - this.FYIDlg.height) / 2 + scrollPos - 60;
		}
		this.FYIDlg.show = b;
	}
	togglePage(ind: number) {
		this.page = ind;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AdultTakeMobileListPage');
	}

}
