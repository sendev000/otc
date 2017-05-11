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
  selector: 'page-cough-adult-recom-mobile',
  templateUrl: 'cough-adult-recom-mobile.html'
})
export class CoughAdultRecomMobilePage {

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
		this.expands = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
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
			// var    dry = $('#adult_recom_cough_mobile_q1_0').is(":checked");
			// productive = $('#adult_recom_cough_mobile_q1_1').is(":checked");
			// congestion = $('#adult_recom_cough_mobile_q1_2').is(":checked");
			// runnyNose = $('#adult_recom_cough_mobile_q1_3').is(":checked");
			// soreThroat = $('#adult_recom_cough_mobile_q1_4').is(":checked");
			// night = $('#adult_recom_cough_mobile_q1_5').is(":checked");
			// tickly = $('#adult_recom_cough_mobile_q1_6').is(":checked");
			// itchy = $('#adult_recom_cough_mobile_q1_14').is(":checked");
			// heaviness = $('#adult_recom_cough_mobile_q1_7').is(":checked");
			// headache = $('#adult_recom_cough_mobile_q1_8').is(":checked");
			// blood = $('#adult_recom_cough_mobile_q1_9').is(":checked");
			// noSleep = $('#adult_recom_cough_mobile_q1_13').is(":checked");
			// prevention = $('#adult_recom_cough_mobile_q1_12').is(":checked");
			// allabove = $('#adult_recom_cough_mobile_q1_10').is(":checked");
			// none = $('#adult_recom_cough_mobile_q1_11').is(":checked");

			// //Medication variables in collapsible

			// var
			//     dextromethorphan = dry || tickly || night;
			// guaifenesin = productive || heaviness;
			// coughDrops = dry || tickly || soreThroat;
			// decongestant = congestion;
			// antihistamine = runnyNose || itchy;


			// //conditions for showing none of the above division.

			// if (none) {

			//     $('#adult_recom_cough_mobile_q1,#selected_adult_recom_cough_mobile_q1_container, #intro_adult_cough_mobile_div, #worth_doing_cough_mobile').hide();
			//     $('#back_intro_adult_cough_mobile_div, #none_adult_recom_cough_mobile ').show(300).removeClass("displayNone");

			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// }

			// //conditions for showing prevention division.
			// else if (prevention) {
			//     $('#adult_recom_cough_mobile_q1, #intro_adult_cough_mobile_div, #selected_adult_recom_cough_mobile_q1_container, #worth_doing_cough_mobile').hide();
			//     $('#prevention_adult_recom_cough_mobile, #back_intro_adult_cough_mobile_div').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// }


			// //conditions for All division + Others else if.
			// else if (allabove) {
			//     $('#adult_recom_cough_mobile_q1, #intro_adult_cough_mobile_div, #selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#allabove_adult_recom_cough_mobile, #back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// }

			// //condition for a specific  checked field	
			// else if (headache || blood || noSleep) {
			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #see_doctor_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// }



			// //condition for showing just one checked field

			// //--------------single------------------------
			// else if (dextromethorphan && !(guaifenesin || coughDrops || decongestant || antihistamine)) {
			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (guaifenesin && !(dextromethorphan || coughDrops || decongestant || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #guaifenesin_adult_recom_cough_mobile, #guaifenesin_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (coughDrops && !(dextromethorphan || guaifenesin || decongestant || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #coughDrops_adult_recom_cough_mobile, #coughDrops_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (decongestant && !(dextromethorphan || guaifenesin || coughDrops || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #decongestant_adult_recom_cough_mobile, #decongestant_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (antihistamine && !(dextromethorphan || guaifenesin || decongestant || coughDrops)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #antihistamine_adult_recom_cough_mobile, #antihistamine_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// }



			// //-------------------------------double---------------------------
			// else if (dextromethorphan && guaifenesin && !(coughDrops || decongestant || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_guaifenesin_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #guaifenesin_adult_category_cough_mobile, #combination_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (dextromethorphan && coughDrops && !(guaifenesin || decongestant || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_coughDrops_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #coughDrops_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (dextromethorphan && decongestant && !(guaifenesin || coughDrops || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_decongestant_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (dextromethorphan && antihistamine && !(guaifenesin || coughDrops || decongestant)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_antihistamine_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (guaifenesin && coughDrops && !(dextromethorphan || decongestant || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #guaifenesin_coughDrops_adult_recom_cough_mobile, #guaifenesin_adult_category_cough_mobile, #coughDrops_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (guaifenesin && decongestant && !(dextromethorphan || coughDrops || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #guaifenesin_decongestant_adult_recom_cough_mobile, #guaifenesin_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (guaifenesin && antihistamine && !(dextromethorphan || coughDrops || decongestant)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #guaifenesin_antihistamine_adult_recom_cough_mobile, #guaifenesin_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (coughDrops && decongestant && !(dextromethorphan || guaifenesin || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #coughDrops_decongestant_adult_recom_cough_mobile, #coughDrops_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (coughDrops && antihistamine && !(dextromethorphan || guaifenesin || decongestant)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #coughDrops_antihistamine_adult_recom_cough_mobile, #coughDrops_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (decongestant && antihistamine && !(dextromethorphan || guaifenesin || coughDrops)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #decongestant_antihistamine_adult_recom_cough_mobile, #decongestant_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// }



			// //---------------------Triple----------------------
			// else if (dextromethorphan && guaifenesin && coughDrops && !(decongestant || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_guaifenesin_coughDrops_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #guaifenesin_adult_category_cough_mobile, #coughDrops_adult_category_cough_mobile, #combination_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (dextromethorphan && guaifenesin && decongestant && !(coughDrops || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_guaifenesin_decongestant_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #guaifenesin_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile, #combination_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (dextromethorphan && guaifenesin && antihistamine && !(coughDrops || decongestant)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_guaifenesin_antihistamine_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #guaifenesin_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile, #combination_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (dextromethorphan && coughDrops && decongestant && !(guaifenesin || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_coughDrops_decongestant_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #coughDrops_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (dextromethorphan && coughDrops && antihistamine && !(guaifenesin || decongestant)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_coughDrops_antihistamine_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #coughDrops_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (dextromethorphan && decongestant && antihistamine && !(guaifenesin || coughDrops)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_decongestant_antihistamine_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (guaifenesin && coughDrops && decongestant && !(dextromethorphan || antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #guaifenesin_coughDrops_decongestant_adult_recom_cough_mobile, #guaifenesin_adult_category_cough_mobile, #coughDrops_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (guaifenesin && coughDrops && antihistamine && !(dextromethorphan || decongestant)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #guaifenesin_coughDrops_antihistamine_adult_recom_cough_mobile, #guaifenesin_adult_category_cough_mobile, #coughDrops_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (guaifenesin && decongestant && antihistamine && !(dextromethorphan || coughDrops)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #guaifenesin_decongestant_antihistamine_adult_recom_cough_mobile, #guaifenesin_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (coughDrops && decongestant && antihistamine && !(dextromethorphan || guaifenesin)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #coughDrops_decongestant_antihistamine_adult_recom_cough_mobile, #coughDrops_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// }



			// //---------------------Quadruple----------------------
			// else if (dextromethorphan && guaifenesin && coughDrops && decongestant && !(antihistamine)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_guaifenesin_coughDrops_decongestant_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #guaifenesin_adult_category_cough_mobile, #coughDrops_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile, #combination_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (dextromethorphan && guaifenesin && coughDrops && antihistamine && !(decongestant)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_guaifenesin_coughDrops_antihistamine_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #guaifenesin_adult_category_cough_mobile, #coughDrops_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile, #combination_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (dextromethorphan && guaifenesin && decongestant && antihistamine && !(coughDrops)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_guaifenesin_decongestant_antihistamine_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #guaifenesin_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile, #combination_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (dextromethorphan && coughDrops && decongestant && antihistamine && !(guaifenesin)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_coughDrops_decongestant_antihistamine_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #coughDrops_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else if (guaifenesin && coughDrops && decongestant && antihistamine && !(dextromethorphan)) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div,#selected_adult_recom_cough_mobile_q1_container').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #guaifenesin_coughDrops_decongestant_antihistamine_adult_recom_cough_mobile, #guaifenesin_adult_category_cough_mobile, #coughDrops_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// }



			// //------------------------------All together------------------------------------
			// else if (dextromethorphan && guaifenesin && coughDrops && decongestant && antihistamine) {

			//     $('#adult_recom_cough_mobile_q1,#intro_adult_cough_mobile_div').hide();
			//     $('#back_intro_adult_cough_mobile_div, #worth_doing_cough_mobile, #dextromethorphan_guaifenesin_coughDrops_decongestant_antihistamine_adult_recom_cough_mobile, #dextromethorphan_adult_category_cough_mobile, #guaifenesin_adult_category_cough_mobile, #coughDrops_adult_category_cough_mobile, #decongestant_adult_category_cough_mobile, #antihistamine_adult_category_cough_mobile, #combination_cough_mobile').show(300).removeClass("displayNone");
			//     $('html, body').animate({
			//         scrollTop: 0
			//     });

			// } else {
			//     $('#selected_adult_recom_cough_mobile_q1').html('<span class="redfontLarge">Oops!,</span>' + ' ' + 'You told me nothing');
			//     $('#selected_adult_recom_cough_mobile_q1_container').show(300).removeClass("displayNone");
			// }
		}
		this.page = ind;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AdultTakeMobileListPage');
	}

}
