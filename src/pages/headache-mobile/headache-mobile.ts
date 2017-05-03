import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { NearestPage } from '../nearest/nearest';
import { HeadacheInfographicsMobilePage } from '../headache-infographics-mobile/headache-infographics-mobile';


@Component({
  selector: 'page-headache-mobile',
  templateUrl: 'headache-mobile.html'
})
export class HeadacheMobilePage {

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
	    height: 523,
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
	currentHeadache: any;
  sinusHeadache: any;
  AbsoluteURL: string;
  symptoms: any;
  triedlist: any;
  syms: any;
  sugs: any;
  triggers: any;
  auras: any;
  sinus: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  	this.page = 0;
  	this.mode = 0;
  	this.mode2 = 0;
  	this.currentTemp = 98;	// default;
  	this.currentHeadache  = 0;
    this.sinusHeadache = 0;
  	this.symptoms = [
  			false, false, false, false, false, false, false, false, false, false, false
  		]
  	this.triedlist = [
  			false, false, false, false, false, false, false, false, false, false, false
  		]
  	this.syms = [
  			false, false, false, false, false, false, false, false, false, false, false
  		]
    this.sugs = [
        false, false, false, false, false, false, false, false, false, false, false
      ]
    this.triggers = [
        false, false, false, false, false, false, false, false, false, false, false, false
      ]
    this.auras = [
        false, false, false, false, false, false, false, false, false, false, false, false
      ]
    this.sinus = [
        false, false, false, false, false, false, false, false, false, false, false, false
      ]
  	this.pages = [true, true, true, true, true, true, true, true, true, true, true, true, true];
  	this.firstname = GlobalVars.getFirstname();
  	if (this.firstname != "")
  		this.firstname += ",";
  	this.subPages = [
  			NearestPage,						// 0
  			HeadacheInfographicsMobilePage,		// 1
  		];
  }
  showMenu() {
  	this.menu.open();
  }
  togglePages(ind: number) {
    this.pages[ind] = !this.pages[ind];
  }
  toggleSymptom(ind: number){
  	this.symptoms[5] = false;
  }
  toggleAllSymptoms(b: boolean){
  	for (let i=0;i<5;i++)
  		this.symptoms[i] = b;
  	if (b == true)
  		this.symptoms[5] = false;
  	else
  		this.symptoms[5] = false;
  }
  toggleTriedlist(ind: number){
  	this.triedlist[6] = false;
  }
  toggleAllTriedlists(b: boolean){
  	for (let i=0;i<6;i++)
  		this.triedlist[i] = b;
  }
  toggleSyms(ind: number){
  	if (ind == 6)
  	{
  		for (let i=0;i<6;i++)
  			this.syms[i] = false;
  	}
  	this.syms[7] = false;
  }
  toggleAllSyms(b: boolean){
  	for (let i=0;i<7;i++)
  		this.syms[i] = b;
  }
  toggleSugs(ind: number){
    this.sugs[7] = false;
  }
  toggleAllSugs(b: boolean){
    for (let i=0;i<7;i++)
      this.sugs[i] = b;
  }
  toggleTriggers(ind: number){
    this.triggers[11] = false;
  }
  toggleAllTriggers(b: boolean){
    for (let i=0;i<11;i++)
      this.triggers[i] = b;
  }
  toggleAuras(ind: number){
    this.auras[6] = false;
  }
  toggleAllAuras(b: boolean){
    for (let i=0;i<6;i++)
      this.auras[i] = b;
  }
  toggleSinus(ind: number){
    this.sinus[9] = false;
  }
  toggleAllSinus(b: boolean){
    for (let i=0;i<9;i++)
      this.sinus[i] = b;
  }
  gotoSubPage(id: number) {
    this.navCtrl.push(this.subPages[id]);
  }
  goBack() {
  	this.toggleAllSymptoms(false);
  	this.symptoms[5] = false;
  	this.page = 110;
  	this.mode = 0;
  }
  goBack2(){
  	this.currentTemp = 98;
  	this.page = 20;
  }
  goBack3() {
  	this.toggleAllTriedlists(false);
  	this.symptoms[6] = false;
  	this.page = 140;
  	this.mode = 0;
  }
  goBack4() {
  	this.toggleAllSyms(false);
  	this.syms[7] = false;
  	this.page = 150;
  	this.mode = 0;
  }
  goBack5() {
    this.toggleAllSugs(false);
    this.sugs[7] = false;
    this.page = 210;
    this.mode = 0;
  }
  goBack6() {
    this.toggleAllTriggers(false);
    this.triggers[11] = false;
    this.page = 230;
    this.mode = 0;
  }
  goBack7() {
    this.toggleAllAuras(false);
    this.auras[6] = false;
    this.page = 240;
    this.mode = 0;
  }
  goBack8() {
    this.page=290;
    this.sinusHeadache = 1;
  }
  goBack9() {
    this.toggleAllSinus(false);
    this.sinus[9] = false;
    this.page = 301;
    this.mode = 0;
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
  	if (ind == 111)
  	{
  		let trueCount = 0;
	  	for (let i=0;i<this.symptoms.length-1;i++)
	  		if (this.symptoms[i] == true)
	  			trueCount ++;
	  	if (this.symptoms[5] == true)
	  		this.mode = 1;
	  	else if (this.symptoms[3] == true)
	  		this.mode = 2;
	  	else if (trueCount > 0)
	  		this.mode = 3;
	  	else{
	  		this.mode = 4;
	  		ind = 110;
	  	}
  	}
  	else if (ind == 141)
  	{
  		let trueCount = 0;
	  	for (let i=0;i<this.triedlist.length-1;i++)
	  		if (this.triedlist[i] == true)
	  			trueCount ++;
	  	if (this.triedlist[6] == true)
	  		this.mode = 1;
	  	else if (trueCount > 0)
	  		this.mode = 2;
	  	else{
	  		this.mode = 3;
	  		ind = 140;
	  	}
  	}
  	else if (ind == 151)
  	{
  		let trueCount = 0;
	  	for (let i=0;i<this.syms.length-1;i++)
	  		if (this.syms[i] == true)
	  			trueCount ++;
	  	if (this.syms[6] == true)
	  		this.mode = 1;
	  	else if (this.syms[7] == true)
	  		this.mode = 2;
	  	else if (this.syms[4] == true)
	  		this.mode = 3;
	  	else if (this.syms[0] == true)
	  		this.mode = 4;
	  	else if (trueCount > 0)
	  		this.mode = 5;
	  	else{
	  		this.mode = 6;
	  		ind = 150;
	  	}
  	}
    else if (ind == 211){
      let trueCount = 0;
      for (let i=0;i<this.sugs.length-1;i++)
        if (this.sugs[i] == true)
          trueCount ++;
      if (this.sugs[7] == true)
        this.mode = 1;
      else if (trueCount > 0)
        this.mode = 2;
      else{
        this.mode = 3;
        ind = 210;
      }
    }
    else if (ind == 231){
      let trueCount = 0;
      for (let i=0;i<this.triggers.length-1;i++)
        if (this.triggers[i] == true)
          trueCount ++;
      if (this.triggers[10] == true)
        this.mode = 1;
      else if (trueCount > 0)
        this.mode = 2;
      else{
        this.mode = 3;
        ind = 230;
      }
    }
    else if (ind == 241){
      let trueCount = 0;
      for (let i=0;i<this.auras.length-1;i++)
        if (this.auras[i] == true)
          trueCount ++;
      if (this.auras[6] == true)
        this.mode = 1;
      else if (trueCount > 0)
        this.mode = 2;
      else{
        this.mode = 3;
        ind = 230;
      }
    }
    else if (ind == 302){
      let trueCount = 0;
      for (let i=0;i<this.sinus.length-1;i++)
        if (this.sinus[i] == true)
          trueCount ++;
      if (this.sinus[6] == true)
        this.mode = 1;
      else if (trueCount > 0)
        this.mode = 2;
      else{
        this.mode = 3;
        ind = 301;
      }
    }
    else
      this.mode = 0;
    this.page = ind;
  }
  goBackHeadache() {
  	this.page = 90;
  	this.currentHeadache = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdultTakeMobileListPage');
  }

}
