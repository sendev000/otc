import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the AdultTakeMobileList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { AllergiesMobilePage }                 from '../allergies-mobile/allergies-mobile';
import { ColdMobilePage }                      from '../cold-mobile/cold-mobile';
import { FluMobilePage }                       from '../flu-mobile/flu-mobile';
import { HeadacheMobilePage } from '../headache-mobile/headache-mobile';
import { SleepMobilePage } from '../sleep-mobile/sleep-mobile';
import { HairlossMobilePage } from '../hairloss-mobile/hairloss-mobile';
import { DandruffMobilePage } from '../dandruff-mobile/dandruff-mobile';
import { LiceMobilePage } from '../lice-mobile/lice-mobile';
import { PinkeyeMobilePage } from '../pinkeye-mobile/pinkeye-mobile';
import { RedeyeMobilePage } from '../redeye-mobile/redeye-mobile';
import { StyeyeMobilePage } from '../styeye-mobile/styeye-mobile';
import { DryeyeMobilePage } from '../dryeye-mobile/dryeye-mobile';
import { EaracheMobilePage } from '../earache-mobile/earache-mobile';
import { SwimearMobilePage } from '../swimear-mobile/swimear-mobile';
import { EarwaxMobilePage } from '../earwax-mobile/earwax-mobile';
import { MotionSicknessMobilePage } from '../motion-sickness-mobile/motion-sickness-mobile';
import { VertigoMobilePage } from '../vertigo-mobile/vertigo-mobile';
import { ToothacheMobilePage } from '../toothache-mobile/toothache-mobile';
import { ColdSoreMobilePage } from '../cold-sore-mobile/cold-sore-mobile';
import { CankerSoreMobilePage } from '../canker-sore-mobile/canker-sore-mobile';
import { DrymouthMobilePage } from '../drymouth-mobile/drymouth-mobile';
import { BadBreathMobilePage } from '../bad-breath-mobile/bad-breath-mobile';
import { CongestionMobilePage } from '../congestion-mobile/congestion-mobile';
import { RunnyNoseMobilePage } from '../runny-nose-mobile/runny-nose-mobile';
import { SinusPressureMobilePage } from '../sinus-pressure-mobile/sinus-pressure-mobile';
import { SnoringMobilePage } from '../snoring-mobile/snoring-mobile';
import { CoughMobilePage } from '../cough-mobile/cough-mobile';
import { SoreThroatMobilePage } from '../sore-throat-mobile/sore-throat-mobile';
import { StiffNeckMobilePage } from '../stiff-neck-mobile/stiff-neck-mobile';
import { ChestCongestionMobilePage } from '../chest-congestion-mobile/chest-congestion-mobile';
import { BackPainMobilePage } from '../back-pain-mobile/back-pain-mobile';
import { HeartburnMobilePage } from '../heartburn-mobile/heartburn-mobile';
import { ChestpainMobilePage } from '../chestpain-mobile/chestpain-mobile';
import { ShoulderMobilePage } from '../shoulder-mobile/shoulder-mobile';
import { WristPainMobilePage } from '../wrist-pain-mobile/wrist-pain-mobile';
import { ElbowMobilePage } from '../elbow-mobile/elbow-mobile';
import { ConstipationMobilePage } from '../constipation-mobile/constipation-mobile';
import { DiarrheaMobilePage } from '../diarrhea-mobile/diarrhea-mobile';
import { NauseaMobilePage } from '../nausea-mobile/nausea-mobile';
import { StomachAcheMobilePage } from '../stomach-ache-mobile/stomach-ache-mobile';
import { StomachFluMobilePage } from '../stomach-flu-mobile/stomach-flu-mobile';
import { FoodPoisoningMobilePage } from '../food-poisoning-mobile/food-poisoning-mobile';
import { YeastMobilePage } from '../yeast-mobile/yeast-mobile';
import { UtiMobilePage } from '../uti-mobile/uti-mobile';
import { JockitchMobilePage } from '../jockitch-mobile/jockitch-mobile';
import { HemorrhoidsMobilePage } from '../hemorrhoids-mobile/hemorrhoids-mobile';
import { PinwormMobilePage } from '../pinworm-mobile/pinworm-mobile';
import { MenstrualMobilePage } from '../menstrual-mobile/menstrual-mobile';
import { BitesMobilePage } from '../bites-mobile/bites-mobile';
import { AcneMobilePage } from '../acne-mobile/acne-mobile';
import { RashMobilePage } from '../rash-mobile/rash-mobile';
import { EczemaMobilePage } from '../eczema-mobile/eczema-mobile';
import { BurnMobilePage } from '../burn-mobile/burn-mobile';
import { SunburnMobilePage } from '../sunburn-mobile/sunburn-mobile';
import { PoisonIvyMobilePage } from '../poison-ivy-mobile/poison-ivy-mobile';
import { HivesMobilePage } from '../hives-mobile/hives-mobile';
import { RingwormMobilePage } from '../ringworm-mobile/ringworm-mobile';
import { WartsMobilePage } from '../warts-mobile/warts-mobile';
import { ScabiesMobilePage } from '../scabies-mobile/scabies-mobile';
import { ShinglesMobilePage } from '../shingles-mobile/shingles-mobile';
import { AnkleSprainMobilePage } from '../ankle-sprain-mobile/ankle-sprain-mobile';
import { AthletesMobilePage } from '../athletes-mobile/athletes-mobile';
import { FootPainMobilePage } from '../foot-pain-mobile/foot-pain-mobile';
import { ArthritisMobilePage } from '../arthritis-mobile/arthritis-mobile';
import { NailFungusMobilePage } from '../nail-fungus-mobile/nail-fungus-mobile';
import { SwollenFootMobilePage } from '../swollen-foot-mobile/swollen-foot-mobile';
import { CornMobilePage } from '../corn-mobile/corn-mobile';
import { IngrownNailMobilePage } from '../ingrown-nail-mobile/ingrown-nail-mobile';

@Component({
  selector: 'page-adult-take-mobile-symptoms-list',
  templateUrl: 'adult-take-mobile-symptoms-list.html'
})
export class AdultTakeMobileSymptomsListPage {
	pages: any;
	subPages: any;
  AbsoluteURL: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  	this.pages = [true, true, true, true, true, true, true, true, true, true, true, true, true];
  	this.subPages = [
  			AllergiesMobilePage,		// 0
		    ColdMobilePage,				// 1
		    FluMobilePage,				// 2
		    HeadacheMobilePage,			// 3
		    SleepMobilePage,			// 4
		    HairlossMobilePage,			// 5
		    DandruffMobilePage,			// 6
		    LiceMobilePage,				// 7
		    PinkeyeMobilePage,			// 8
		    RedeyeMobilePage,			// 9
		    StyeyeMobilePage,			// 10
		    DryeyeMobilePage,			// 11
		    EaracheMobilePage,			// 12
		    SwimearMobilePage,			// 13
		    EarwaxMobilePage,			// 14
		    MotionSicknessMobilePage,	// 15
		    VertigoMobilePage,			// 16
		    ToothacheMobilePage,		// 17
		    ColdSoreMobilePage,			// 18
		    CankerSoreMobilePage,		// 19
		    DrymouthMobilePage,			// 20
		    BadBreathMobilePage,		// 21
		    CongestionMobilePage,		// 22
		    RunnyNoseMobilePage,		// 23
		    SinusPressureMobilePage,	// 24
		    SnoringMobilePage,			// 25
		    CoughMobilePage,			// 26
		    SoreThroatMobilePage,		// 27
		    StiffNeckMobilePage,		// 28
		    ChestCongestionMobilePage,	// 29
		    BackPainMobilePage,			// 30
		    HeartburnMobilePage,		// 31
		    ChestpainMobilePage,		// 32
		    ShoulderMobilePage,			// 33
		    WristPainMobilePage,		// 34
		    ElbowMobilePage,			// 35
		    ConstipationMobilePage,		// 36
		    DiarrheaMobilePage,			// 37
		    NauseaMobilePage,			// 38
		    StomachAcheMobilePage,		// 39
		    StomachFluMobilePage,		// 40
		    FoodPoisoningMobilePage,	// 41
		    YeastMobilePage,			// 42
		    UtiMobilePage,				// 43
		    JockitchMobilePage,			// 44
		    HemorrhoidsMobilePage,		// 45
		    PinwormMobilePage,			// 46
		    MenstrualMobilePage,		// 47
		    BitesMobilePage,			// 48
		    AcneMobilePage,				// 49
		    RashMobilePage,				// 50
		    EczemaMobilePage,			// 51
		    BurnMobilePage,				// 52
		    SunburnMobilePage,			// 53
		    PoisonIvyMobilePage,		// 54
		    HivesMobilePage,			// 55
		    RingwormMobilePage,			// 56
		    WartsMobilePage,			// 57
		    ScabiesMobilePage,			// 58
		    ShinglesMobilePage,			// 59
		    AnkleSprainMobilePage,		// 60
		    AthletesMobilePage,			// 61
		    FootPainMobilePage,			// 62
		    ArthritisMobilePage,		// 63
		    NailFungusMobilePage,		// 64
		    SwollenFootMobilePage,		// 65
		    CornMobilePage,				// 66
		    IngrownNailMobilePage,		// 67
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
