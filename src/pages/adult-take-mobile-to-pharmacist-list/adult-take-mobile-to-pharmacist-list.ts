import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { AllergyAdultRecomMobilePage } from '../allergy-adult-recom-mobile/allergy-adult-recom-mobile';
import { ColdAdultRecomMobilePage } from '../cold-adult-recom-mobile/cold-adult-recom-mobile';
import { FluAdultRecomMobilePage } from '../flu-adult-recom-mobile/flu-adult-recom-mobile';
import { HeadacheAdultRecomMobilePage } from '../headache-adult-recom-mobile/headache-adult-recom-mobile';
import { SleepAdultRecomMobilePage } from '../sleep-adult-recom-mobile/sleep-adult-recom-mobile';
import { HairlossAdultRecomMobilePage } from '../hairloss-adult-recom-mobile/hairloss-adult-recom-mobile';
import { DandruffAdultRecomMobilePage } from '../dandruff-adult-recom-mobile/dandruff-adult-recom-mobile';
import { LiceAdultRecomMobilePage } from '../lice-adult-recom-mobile/lice-adult-recom-mobile';
import { PinkeyeAdultRecomMobilePage } from '../pinkeye-adult-recom-mobile/pinkeye-adult-recom-mobile';
import { RedeyeAdultRecomMobilePage } from '../redeye-adult-recom-mobile/redeye-adult-recom-mobile';
import { StyAdultRecomMobilePage } from '../sty-adult-recom-mobile/sty-adult-recom-mobile';
import { DryeyeAdultRecomMobilePage } from '../dryeye-adult-recom-mobile/dryeye-adult-recom-mobile';
import { EaracheAdultRecomMobilePage } from '../earache-adult-recom-mobile/earache-adult-recom-mobile';
import { SwimearAdultRecomMobilePage } from '../swimear-adult-recom-mobile/swimear-adult-recom-mobile';
import { EarwaxAdultRecomMobilePage } from '../earwax-adult-recom-mobile/earwax-adult-recom-mobile';
import { MotionAdultRecomMobilePage } from '../motion-adult-recom-mobile/motion-adult-recom-mobile';
import { VertigoAdultRecomMobilePage } from '../vertigo-adult-recom-mobile/vertigo-adult-recom-mobile';
import { ToothacheAdultRecomMobilePage } from '../toothache-adult-recom-mobile/toothache-adult-recom-mobile';
import { ColdsoreAdultRecomMobilePage } from '../coldsore-adult-recom-mobile/coldsore-adult-recom-mobile';
import { CankerAdultRecomMobilePage } from '../canker-adult-recom-mobile/canker-adult-recom-mobile';
import { DrymouthAdultRecomMobilePage } from '../drymouth-adult-recom-mobile/drymouth-adult-recom-mobile';
import { BadbreathAdultRecomMobilePage } from '../badbreath-adult-recom-mobile/badbreath-adult-recom-mobile';
import { StuffyAdultRecomMobilePage } from '../stuffy-adult-recom-mobile/stuffy-adult-recom-mobile';
import { RunnyAdultRecomMobilePage } from '../runny-adult-recom-mobile/runny-adult-recom-mobile';
import { SinusAdultRecomMobilePage } from '../sinus-adult-recom-mobile/sinus-adult-recom-mobile';
import { SnoringAdultRecomMobilePage } from '../snoring-adult-recom-mobile/snoring-adult-recom-mobile';
import { CoughAdultRecomMobilePage } from '../cough-adult-recom-mobile/cough-adult-recom-mobile';
import { SorethroatAdultRecomMobilePage } from '../sorethroat-adult-recom-mobile/sorethroat-adult-recom-mobile';
import { StiffneckAdultRecomMobilePage } from '../stiffneck-adult-recom-mobile/stiffneck-adult-recom-mobile';
import { ChestCongestionAdultRecomMobilePage } from '../chest-congestion-adult-recom-mobile/chest-congestion-adult-recom-mobile';
import { BackPainAdultRecomMobilePage } from '../back-pain-adult-recom-mobile/back-pain-adult-recom-mobile';
import { HeartburnAdultRecomMobilePage } from '../heartburn-adult-recom-mobile/heartburn-adult-recom-mobile';
import { ChestpainAdultRecomMobilePage } from '../chestpain-adult-recom-mobile/chestpain-adult-recom-mobile';
import { ShoulderAdultRecomMobilePage } from '../shoulder-adult-recom-mobile/shoulder-adult-recom-mobile';
import { WristAdultRecomMobilePage } from '../wrist-adult-recom-mobile/wrist-adult-recom-mobile';
import { ElbowAdultRecomMobilePage } from '../elbow-adult-recom-mobile/elbow-adult-recom-mobile';
import { ConstipationAdultRecomMobilePage } from '../constipation-adult-recom-mobile/constipation-adult-recom-mobile';
import { DiarrheaAdultRecomMobilePage } from '../diarrhea-adult-recom-mobile/diarrhea-adult-recom-mobile';
import { NauseaAdultRecomMobilePage } from '../nausea-adult-recom-mobile/nausea-adult-recom-mobile';
import { StomachacheAdultRecomMobilePage } from '../stomachache-adult-recom-mobile/stomachache-adult-recom-mobile';
import { StomachfluAdultRecomMobilePage } from '../stomachflu-adult-recom-mobile/stomachflu-adult-recom-mobile';
import { FoodpoisoningAdultRecomMobilePage } from '../foodpoisoning-adult-recom-mobile/foodpoisoning-adult-recom-mobile';
import { YeastAdultRecomMobilePage } from '../yeast-adult-recom-mobile/yeast-adult-recom-mobile';
import { UtiAdultRecomMobilePage } from '../uti-adult-recom-mobile/uti-adult-recom-mobile';
import { JockitchAdultRecomMobilePage } from '../jockitch-adult-recom-mobile/jockitch-adult-recom-mobile';
import { HemorrhoidsAdultRecomMobilePage } from '../hemorrhoids-adult-recom-mobile/hemorrhoids-adult-recom-mobile';
import { PinwormAdultRecomMobilePage } from '../pinworm-adult-recom-mobile/pinworm-adult-recom-mobile';
import { MenstrualAdultRecomMobilePage } from '../menstrual-adult-recom-mobile/menstrual-adult-recom-mobile';
import { BitesAdultRecomMobilePage } from '../bites-adult-recom-mobile/bites-adult-recom-mobile';
import { AcneAdultRecomMobilePage } from '../acne-adult-recom-mobile/acne-adult-recom-mobile';
import { RashAdultRecomMobilePage } from '../rash-adult-recom-mobile/rash-adult-recom-mobile';
import { EczemaAdultRecomMobilePage } from '../eczema-adult-recom-mobile/eczema-adult-recom-mobile';
import { BurnAdultRecomMobilePage } from '../burn-adult-recom-mobile/burn-adult-recom-mobile';
import { SunburnAdultRecomMobilePage } from '../sunburn-adult-recom-mobile/sunburn-adult-recom-mobile';
import { PoisonivyAdultRecomMobilePage } from '../poisonivy-adult-recom-mobile/poisonivy-adult-recom-mobile';
import { HivesAdultRecomMobilePage } from '../hives-adult-recom-mobile/hives-adult-recom-mobile';
import { RingwormAdultRecomMobilePage } from '../ringworm-adult-recom-mobile/ringworm-adult-recom-mobile';
import { WartsAdultRecomMobilePage } from '../warts-adult-recom-mobile/warts-adult-recom-mobile';
import { SprainAdultRecomMobilePage } from '../sprain-adult-recom-mobile/sprain-adult-recom-mobile';
import { AthletesfootAdultRecomMobilePage } from '../athletesfoot-adult-recom-mobile/athletesfoot-adult-recom-mobile';
import { FootpainAdultRecomMobilePage } from '../footpain-adult-recom-mobile/footpain-adult-recom-mobile';
import { ArthritisAdultRecomMobilePage } from '../arthritis-adult-recom-mobile/arthritis-adult-recom-mobile';
import { NailfungusAdultRecomMobilePage } from '../nailfungus-adult-recom-mobile/nailfungus-adult-recom-mobile';
import { SwollenfootAdultRecomMobilePage } from '../swollenfoot-adult-recom-mobile/swollenfoot-adult-recom-mobile';
import { CornAdultRecomMobilePage } from '../corn-adult-recom-mobile/corn-adult-recom-mobile';
import { IngrownAdultRecomMobilePage } from '../ingrown-adult-recom-mobile/ingrown-adult-recom-mobile';

@Component({
  selector: 'page-adult-take-mobile-to-pharmacist-list',
  templateUrl: 'adult-take-mobile-to-pharmacist-list.html'
})
export class AdultTakeMobileToPharmacistListPage {

  	pages: any;
	subPages: any;
  	AbsoluteURL: string;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
	  	this.menu = menu;
	  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
	  	this.pages = [true, true, true, true, true, true, true, true, true, true, true, true, true];
	  	this.subPages = [
  			AllergyAdultRecomMobilePage, 
			ColdAdultRecomMobilePage, 
			FluAdultRecomMobilePage, 
			HeadacheAdultRecomMobilePage, 
			SleepAdultRecomMobilePage, 
			HairlossAdultRecomMobilePage, 
			DandruffAdultRecomMobilePage, 
			LiceAdultRecomMobilePage, 
			PinkeyeAdultRecomMobilePage, 
			RedeyeAdultRecomMobilePage, 
			StyAdultRecomMobilePage, 
			DryeyeAdultRecomMobilePage, 
			EaracheAdultRecomMobilePage, 
			SwimearAdultRecomMobilePage, 
			EarwaxAdultRecomMobilePage, 
			MotionAdultRecomMobilePage, 
			VertigoAdultRecomMobilePage, 
			ToothacheAdultRecomMobilePage, 
			ColdsoreAdultRecomMobilePage, 
			CankerAdultRecomMobilePage, 
			DrymouthAdultRecomMobilePage, 
			BadbreathAdultRecomMobilePage, 
			StuffyAdultRecomMobilePage, 
			RunnyAdultRecomMobilePage, 
			SinusAdultRecomMobilePage, 
			SnoringAdultRecomMobilePage, 
			CoughAdultRecomMobilePage, 
			SorethroatAdultRecomMobilePage, 
			StiffneckAdultRecomMobilePage, 
			ChestCongestionAdultRecomMobilePage, 
			BackPainAdultRecomMobilePage, 
			HeartburnAdultRecomMobilePage, 
			ChestpainAdultRecomMobilePage, 
			ShoulderAdultRecomMobilePage, 
			WristAdultRecomMobilePage, 
			ElbowAdultRecomMobilePage, 
			ConstipationAdultRecomMobilePage, 
			DiarrheaAdultRecomMobilePage, 
			HeartburnAdultRecomMobilePage, 
			NauseaAdultRecomMobilePage, 
			StomachacheAdultRecomMobilePage, 
			StomachfluAdultRecomMobilePage, 
			FoodpoisoningAdultRecomMobilePage, 
			YeastAdultRecomMobilePage, 
			UtiAdultRecomMobilePage, 
			JockitchAdultRecomMobilePage,
			HemorrhoidsAdultRecomMobilePage, 
			PinwormAdultRecomMobilePage, 
			MenstrualAdultRecomMobilePage, 
			BitesAdultRecomMobilePage, 
			AcneAdultRecomMobilePage, 
			RashAdultRecomMobilePage, 
			EczemaAdultRecomMobilePage, 
			BurnAdultRecomMobilePage, 
			SunburnAdultRecomMobilePage, 
			PoisonivyAdultRecomMobilePage, 
			HivesAdultRecomMobilePage, 
			RingwormAdultRecomMobilePage, 
			WartsAdultRecomMobilePage, 
			SprainAdultRecomMobilePage, 
			AthletesfootAdultRecomMobilePage, 
			FootpainAdultRecomMobilePage, 
			ArthritisAdultRecomMobilePage, 
			NailfungusAdultRecomMobilePage, 
			WartsAdultRecomMobilePage, 
			SwollenfootAdultRecomMobilePage, 
			CornAdultRecomMobilePage, 
			IngrownAdultRecomMobilePage, 
  		];
	}
	showMenu() {
		this.menu.open();
	}
	gotoSubPage(id: number) {
	this.navCtrl.push(this.subPages[id]);
	}
	togglePage(ind: number) {
	this.pages[ind] = !this.pages[ind];
	}
	ionViewDidLoad() {
	console.log('ionViewDidLoad AdultTakeMobileListPage');
	}

}
