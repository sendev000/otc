import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { UrgentCarePage } from '../urgent-care/urgent-care';
import { AdultTakeMobileListPage } from '../adult-take-mobile-list/adult-take-mobile-list';
import { SinusPressureMobilePage } from '../sinus-pressure-mobile/sinus-pressure-mobile';

@Component({
  selector: 'page-cold-mobile',
  templateUrl: 'cold-mobile.html'
})
export class ColdMobilePage {

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
	    height: 300,
	    width: 0,
	    maxWidth: 0,
	    left: 0,
	    top: 0
	  };
	firstname: string;
	page: number;
	mode: number;
	subPages: any;
	currentTemp: any;
  AbsoluteURL: string;
  symptoms: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  	this.page = 0;
  	this.mode = 0;
  	this.currentTemp = 98;	// default;
  	this.symptoms = [
  			false, false, false, false, false, false, false, false, false, false, false
  		]
  	this.firstname = GlobalVars.getFirstname();
  	if (this.firstname != "")
  		this.firstname += ",";
  	this.subPages = [
  			UrgentCarePage, 			// 0
  			AdultTakeMobileListPage,	// 1
  			SinusPressureMobilePage,	// 2
  		];
  }
  showMenu() {
  	this.menu.open();
  }
  toggleAllSymptoms(b: boolean){
  	for (let i=0;i<9;i++)
  		this.symptoms[i] = b;
  	if (b == true)
  		this.symptoms[9] = !this.symptoms[9];
  	else
  		this.symptoms[10] = !this.symptoms[10];
  }
  gotoSubPage(id: number) {
    this.navCtrl.push(this.subPages[id]);
  }
  goBack() {
  	this.toggleAllSymptoms(false);
  	this.symptoms[9] = this.symptoms[10] = false;
  	this.page = 10;
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
  	if (ind == 11){
  		let trueCount = 0;
	  	for (let i=0;i<this.symptoms.length-1;i++)
	  		if (this.symptoms[i] == true)
	  			trueCount ++;

    	if (this.symptoms[10] == true)
    		this.mode = 1;
    	else if (this.symptoms[9] == true)
    		this.mode = 2;
    	else if (this.symptoms[8] == true)
    		this.mode = 3;
    	else if (this.symptoms[3] == false && trueCount > 0)
    		this.mode = 4;
    	else if (trueCount > 0)
    		this.mode = 5;
    	else{
    		this.mode = 6;
    		ind = 10;
    	}
    }
    this.page = ind;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdultTakeMobileListPage');
  }

}
