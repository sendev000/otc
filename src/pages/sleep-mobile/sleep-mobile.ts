import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { UrgentCarePage } from '../urgent-care/urgent-care';
import { SleepInfographicsMobilePage } from '../sleep-infographics-mobile/sleep-infographics-mobile';
// import { AdultTakeMobileListPage } from '../adult-take-mobile-list/adult-take-mobile-list';
import { SinusPressureMobilePage } from '../sinus-pressure-mobile/sinus-pressure-mobile';
import { AllergiesMobilePage } from '../allergies-mobile/allergies-mobile';
import { ColdMobileInfographicsPage } from '../cold-mobile-infographics/cold-mobile-infographics';

import { SinusAdultRecomMobilePage } from '../sinus-adult-recom-mobile/sinus-adult-recom-mobile';

@Component({
  selector: 'page-sleep-mobile',
  templateUrl: 'sleep-mobile.html'
})
export class SleepMobilePage {

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
	FYIDlg3 = {
	    show: false,
	    height: 304,
	    width: 0,
	    maxWidth: 0,
	    left: 0,
	    top: 0
	  };
	FYIDlg4 = {
	    show: false,
	    height: 243,
	    width: 0,
	    maxWidth: 0,
	    left: 0,
	    top: 0
	  };
	FYIDlg5 = {
	    show: false,
	    height: 243,
	    width: 0,
	    maxWidth: 0,
	    left: 0,
	    top: 0
	  }; 
	FYIDlg6 = {
	    show: false,
	    height: 243,
	    width: 0,
	    maxWidth: 0,
	    left: 0,
	    top: 0
	  }; 
	firstname: string;
	page: number;
	mode: number;
	mode2: number;
	subPages: any;
	pages: any;
	currentTemp: any;
	currentDay: any;
  AbsoluteURL: string;
  habit: any;
  medi: any;
  pattern: any;
  triedlist: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  	this.page = 0;
  	this.mode = 0;
  	this.mode2 = 0;
  	this.currentTemp = 98;	// default;
  	this.currentDay  = 0;
  	this.habit = [
  			false, false, false, false, false, false, false, false, false, false, false
  		]
  	this.medi = [
  			false, false, false, false, false, false, false, false, false, false, false
  		]
  	this.pattern = [
  			false, false, false, false, false, false, false, false, false, false, false
  		]
  	this.triedlist = [
  			false, false, false, false, false, false, false, false, false, false, false
  		]
  	this.pages = [true, true, true, true, true, true, true, true, true, true, true, true, true];
  	this.firstname = GlobalVars.getFirstname();
  	if (this.firstname != "")
  		this.firstname += ",";
  	this.subPages = [
  			UrgentCarePage, 				// 0
  			SleepInfographicsMobilePage,	// 1
  			// SinusPressureMobilePage,	// 2
  			// AllergiesMobilePage,		// 3
  			// ColdMobileInfographicsPage,	// 4
  		];

  }
  showMenu() {
  	this.menu.open();
  }
  togglePages(ind: number) {
    this.pages[ind] = !this.pages[ind];
  }
  toggleHabit(ind: number){
  	this.habit[7] = false;
  }
  toggleAllHabits(b: boolean){
  	for (let i=0;i<7;i++)
  		this.habit[i] = b;
  }
  toggleMedi(ind: number){
  	this.medi[6] = false;
  }
  toggleAllMedis(b: boolean){
  	for (let i=0;i<6;i++)
  		this.medi[i] = b;
  }
  togglePattern(ind: number){
  	this.pattern[6] = false;
  }
  toggleAllPattern(b: boolean){
  	for (let i=0;i<6;i++)
  		this.pattern[i] = b;
  }
  toggleTriedlist(ind: number){
  	this.triedlist[6] = false;
  }
  toggleAllTriedlists(b: boolean){
  	for (let i=0;i<6;i++)
  		this.triedlist[i] = b;
  }
  gotoSubPage(id: number) {
    this.navCtrl.push(this.subPages[id]);
  }
  goBack() {
  	this.toggleAllHabits(false);
  	this.habit[7] = false;
  	this.page = 20;
  }
  goBack2(){
  	this.currentTemp = 98;
  	this.page = 20;
  }
  goBack3() {
  	this.toggleAllMedis(false);
  	this.medi[6] = false;
  	this.page = 30;
  }
  goBack4() {
  	this.toggleAllPattern(false);
  	this.pattern[6] = false;
  	this.page = 40;
  }
  goBack5() {
  	this.toggleAllTriedlists(false);
  	this.triedlist[6] = false;
  	this.page = 60;
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
  toggleFYIDlg3(b: boolean) {
  	if (b)
    {
		var scrollPos = this.content.getContentDimensions().scrollTop;
		this.MyContent.screenWidth = this.platform.width();
		this.MyContent.screenHeight = this.platform.height();
		this.FYIDlg3.width = this.MyContent.screenWidth * 0.9;
		this.FYIDlg3.maxWidth = 600;
		if (this.FYIDlg3.width > this.FYIDlg3.maxWidth)
			this.FYIDlg3.width = this.FYIDlg3.maxWidth;
		this.FYIDlg3.left = (this.MyContent.screenWidth - this.FYIDlg3.width) / 2;
		this.FYIDlg3.top = (this.MyContent.screenHeight - this.FYIDlg3.height) / 2 + scrollPos - 60;
    }
    this.FYIDlg3.show = b;
  }
  toggleFYIDlg4(b: boolean) {
  	if (b)
    {
		var scrollPos = this.content.getContentDimensions().scrollTop;
		this.MyContent.screenWidth = this.platform.width();
		this.MyContent.screenHeight = this.platform.height();
		this.FYIDlg4.width = this.MyContent.screenWidth * 0.9;
		this.FYIDlg4.maxWidth = 300;
		if (this.FYIDlg4.width > this.FYIDlg4.maxWidth)
			this.FYIDlg4.width = this.FYIDlg4.maxWidth;
		this.FYIDlg4.left = (this.MyContent.screenWidth - this.FYIDlg4.width) / 2;
		this.FYIDlg4.top = (this.MyContent.screenHeight - this.FYIDlg4.height) / 2 + scrollPos - 60;
    }
    this.FYIDlg4.show = b;
  }
  toggleFYIDlg5(b: boolean) {
  	if (b)
    {
		var scrollPos = this.content.getContentDimensions().scrollTop;
		this.MyContent.screenWidth = this.platform.width();
		this.MyContent.screenHeight = this.platform.height();
		this.FYIDlg5.width = this.MyContent.screenWidth * 0.9;
		this.FYIDlg5.maxWidth = 300;
		if (this.FYIDlg5.width > this.FYIDlg5.maxWidth)
			this.FYIDlg5.width = this.FYIDlg5.maxWidth;
		this.FYIDlg5.left = (this.MyContent.screenWidth - this.FYIDlg5.width) / 2;
		this.FYIDlg5.top = (this.MyContent.screenHeight - this.FYIDlg5.height) / 2 + scrollPos - 60;
    }
    this.FYIDlg5.show = b;
  }
  toggleFYIDlg6(b: boolean) {
  	if (b)
    {
		var scrollPos = this.content.getContentDimensions().scrollTop;
		this.MyContent.screenWidth = this.platform.width();
		this.MyContent.screenHeight = this.platform.height();
		this.FYIDlg6.width = this.MyContent.screenWidth * 0.9;
		this.FYIDlg6.maxWidth = 322;
		if (this.FYIDlg6.width > this.FYIDlg6.maxWidth)
			this.FYIDlg6.width = this.FYIDlg6.maxWidth;
		this.FYIDlg6.left = (this.MyContent.screenWidth - this.FYIDlg6.width) / 2;
		this.FYIDlg6.top = (this.MyContent.screenHeight - this.FYIDlg6.height) / 2 + scrollPos - 60;
    }
    this.FYIDlg6.show = b;
  }
  togglePage(ind: number) {
  	if (ind == 21)
  	{
  		let trueCount = 0;
	  	for (let i=0;i<this.habit.length-1;i++)
	  		if (this.habit[i] == true)
	  			trueCount ++;
	  	if (this.habit[7] == true)
	  		this.mode = 1;
	  	else if (trueCount > 0)
	  		this.mode = 2;
	  	else{
	  		this.mode = 3;
	  		ind = 20;
	  	}
  	}
  	else if (ind == 31)
  	{
  		let trueCount = 0;
	  	for (let i=0;i<this.medi.length-1;i++)
	  		if (this.medi[i] == true)
	  			trueCount ++;
	  	if (this.medi[6] == true)
	  		this.mode = 1;
	  	else if (this.medi[5] == true)
	  		this.mode = 2;
	  	else if (trueCount > 0)
	  		this.mode = 3;
	  	else{
	  		this.mode = 4;
	  		ind = 30;
	  	}
  	}
  	else if (ind == 41)
  	{
  		let trueCount = 0;
	  	for (let i=0;i<this.pattern.length-1;i++)
	  		if (this.pattern[i] == true)
	  			trueCount ++;
	  	if (this.pattern[6] == true)
	  		this.mode = 1;
	  	else if (trueCount > 0)
	  		this.mode = 2;
	  	else{
	  		this.mode = 3;
	  		ind = 40;
	  	}
  	}
  	else if (ind == 61)
  	{
  		let trueCount = 0;
	  	for (let i=0;i<this.triedlist.length-1;i++)
	  		if (this.triedlist[i] == true)
	  			trueCount ++;
	  	if (this.triedlist[6] == true)
	  		this.mode = 1;
	  	else if (this.triedlist[3] == true)
	  		this.mode = 2;
	  	else if (trueCount > 0)
	  		this.mode = 3;
	  	else{
	  		this.mode = 4;
	  		ind = 60;
	  	}
  	}
  	else
  		this.mode = 0;
    this.page = ind;
  }
  goBackDay() {
  	this.page = 90;
  	this.currentDay = 0;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdultTakeMobileListPage');
  }

}
