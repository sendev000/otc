import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { UrgentCarePage } from '../urgent-care/urgent-care';
import { SinusPressureInfographicsMobilePage } from '../sinus-pressure-infographics-mobile/sinus-pressure-infographics-mobile';

@Component({
  selector: 'page-sinus-pressure-mobile',
  templateUrl: 'sinus-pressure-mobile.html'
})
export class SinusPressureMobilePage {

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
	FYIDlg2 = {
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
  			UrgentCarePage, 						// 0
  			SinusPressureInfographicsMobilePage,	//1
  		];
  }
  showMenu() {
  	this.menu.open();
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
	toggleFYIDlg2(b: boolean) {
	    if (b)
	    {
			var scrollPos = this.content.getContentDimensions().scrollTop;
			this.MyContent.screenWidth = this.platform.width();
			this.MyContent.screenHeight = this.platform.height();
			this.FYIDlg2.width = this.MyContent.screenWidth * 0.9;
			this.FYIDlg2.maxWidth = 600;
			if (this.FYIDlg2.width > this.FYIDlg2.maxWidth)
				this.FYIDlg2.width = this.FYIDlg2.maxWidth;
			this.FYIDlg2.left = (this.MyContent.screenWidth - this.FYIDlg2.width) / 2;
			this.FYIDlg2.top = (this.MyContent.screenHeight - this.FYIDlg2.height) / 2 + scrollPos - 60;
	    }
	    this.FYIDlg2.show = b;
	}
  togglePage(ind: number) {
  	this.page = ind;
  }
  gotoSubPage(id: number) {
    this.navCtrl.push(this.subPages[id]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdultTakeMobileListPage');
  }

}
