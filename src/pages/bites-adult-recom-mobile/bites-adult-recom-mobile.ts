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
  selector: 'page-bites-adult-recom-mobile',
  templateUrl: 'bites-adult-recom-mobile.html'
})
export class BitesAdultRecomMobilePage {

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
	searchText: string;
	searchData = [
		{
			h2: 'Bed bugs',
			p: '',
			imgUrl: 'bedbug.svg',
			filterText: 'bed bugs',
			show: false,
			clicked: false,
		},
		{
			h2: 'Bees',
			p: 'Bumble bee',
			imgUrl: 'bee.svg',
			filterText: 'Bumble Africanized bees honey',
			show: false,
			clicked: false,
		},
		{
			h2: 'Black fly',
			p: '',
			imgUrl: 'blackfly.svg',
			filterText: 'black fly',
			show: false,
			clicked: false,
		},
		{
			h2: 'Chigger',
			p: '',
			imgUrl: 'chigger.svg',
			filterText: 'chigger',
			show: false,
			clicked: false,
		},
		{
			h2: 'Fire ants',
			p: '',
			imgUrl: 'fireant.svg',
			filterText: 'fire ants',
			show: false,
			clicked: false,
		},
		{
			h2: 'Flea',
			p: '',
			imgUrl: 'flea.svg',
			filterText: 'flea',
			show: false,
			clicked: false,
		},
		{
			h2: 'Mosquito',
			p: '',
			imgUrl: 'mosquito.svg',
			filterText: 'mosquito',
			show: false,
			clicked: false,
		},
		{
			h2: 'Other',
			p: '',
			imgUrl: 'mosquito.svg',
			filterText: 'other',
			show: false,
			clicked: false,
		},
		{
			h2: 'Puss moth caterpillar',
			p: '',
			imgUrl: 'puss-moth-cat.svg',
			filterText: 'puss moth caterpillar',
			show: false,
			clicked: false,
		},
		{
			h2: 'Spider',
			p: '',
			imgUrl: 'spider.svg',
			filterText: 'black widow brown recluse spider',
			show: false,
			clicked: false,
		},
		{
			h2: 'Tick',
			p: '',
			imgUrl: 'tick.svg',
			filterText: 'tick',
			show: false,
			clicked: false,
		},
		{
			h2: 'Wasps',
			p: '',
			imgUrl: 'wasps.svg',
			filterText: 'hornet yellow jacket paper wasps vespid bald-faced',
			show: false,
			clicked: false,
		},
	]
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
		this.searchText = "";
		this.tabId = 1;
		this.tabCss = "translate3d(0px, 0px, 0px)";
		this.tabConCss = "translate3d(0px, 0px, 0px)";
	}
	showMenu() {
		this.menu.open();
	}
	togglePage(data, b: boolean){
		data['clicked'] = b;
		this.page = 1;
	}
	filterItems() {
		var $this = this;
	    var q = this.searchText;
	    if (q.length == 0) {
	    	Object.keys(this.searchData).forEach(function(key) {
	    		$this.searchData[key]['show'] = false;
	    		$this.searchData[key]['clicked'] = false;
	    	});
			return;
	    }
	    Object.keys(this.searchData).forEach(function(key) {
			$this.searchData[key]['show'] = false;
			$this.searchData[key]['clicked'] = false;
			if ($this.searchData[key]['filterText'].toLowerCase().indexOf(q.toLowerCase()) > -1)
			{
				$this.searchData[key]['show'] = true;
			}
		});
	  }
	clearSearch() {
		this.searchText = "";
		this.filterItems();
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
		this.clearSearch();
		this.page = 0;
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
	
	ionViewDidLoad() {
		console.log('ionViewDidLoad AdultTakeMobileListPage');
	}

}
