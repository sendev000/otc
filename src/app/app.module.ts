import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage} from '../pages/home/home';
import { SelfCarePage } from '../pages/self-care/self-care';
import { ComparePage } from '../pages/compare/compare';
import { ChildrenPage } from '../pages/children/children';
import { DrugPage } from '../pages/drug/drug';
import { AboutPage } from '../pages/about/about';

import { NearestHospitalPage } from '../pages/nearest-hospital/nearest-hospital';
import { UrgentCarePage } from '../pages/urgent-care/urgent-care';
import { DoctorOfficePage } from '../pages/doctor-office/doctor-office';
import { ChildrenClinicPage } from '../pages/children-clinic/children-clinic';
import { DentalCarePage } from '../pages/dental-care/dental-care';
import { PharmacyCarePage } from '../pages/pharmacy-care/pharmacy-care';

import { AllergyMedsPage } from '../pages/allergy-meds/allergy-meds';
import { ColdMedsPage } from '../pages/cold-meds/cold-meds';
import { ColdMedsChildPage } from '../pages/cold-meds-child/cold-meds-child';
import { CoughMedsPage } from '../pages/cough-meds/cough-meds';
import { ColdsoreMedsPage } from '../pages/coldsore-meds/coldsore-meds';
import { EnergyDrinksPage } from '../pages/energy-drinks/energy-drinks';
import { EyeDropsPage } from '../pages/eye-drops/eye-drops';
import { AntifungiMedsPage } from '../pages/antifungi-meds/antifungi-meds';
import { HeartburnMedsPage } from '../pages/heartburn-meds/heartburn-meds';
import { LaxativesPage } from '../pages/laxatives/laxatives';
import { PainRelieversPage } from '../pages/pain-relievers/pain-relievers';
import { ProbioticsPage } from '../pages/probiotics/probiotics';
import { SleepAidsPage } from '../pages/sleep-aids/sleep-aids';

import { AdultTakeMobileIntroPage } from '../pages/adult-take-mobile-intro/adult-take-mobile-intro';
import { ChildTakeMobileIntroPage } from '../pages/child-take-mobile-intro/child-take-mobile-intro';
import { AdultTakeMobileListPage } from '../pages/adult-take-mobile-list/adult-take-mobile-list';
import { ChildTakeMobileListPage } from '../pages/child-take-mobile-list/child-take-mobile-list';
import { DosingPage } from '../pages/dosing/dosing';
import { NearestPage } from '../pages/nearest/nearest';

import { CommentComparePage } from '../pages/comment-compare/comment-compare';
import { CommentCompareBluePage } from '../pages/comment-compare-blue/comment-compare-blue';
import { CommentCompareCyanPage } from '../pages/comment-compare-cyan/comment-compare-cyan';
import { CommentCompareOrangePage } from '../pages/comment-compare-orange/comment-compare-orange';
import { CommentCompareGreenPage } from '../pages/comment-compare-green/comment-compare-green';
import { CommentComparePinkPage } from '../pages/comment-compare-pink/comment-compare-pink';
import { CommentLoginPage } from '../pages/comment-login/comment-login';

import { DecongestantsPage } from '../pages/decongestants/decongestants';
import { MultisymptomsPage } from '../pages/multisymptoms/multisymptoms';
import { ImmuneboostersPage } from '../pages/immuneboosters/immuneboosters';

import { RedEyeDropsPage } from '../pages/red-eye-drops/red-eye-drops';
import { DryEyeDropsPage } from '../pages/dry-eye-drops/dry-eye-drops';
import { ItchyEyeDropsPage } from '../pages/itchy-eye-drops/itchy-eye-drops';
import { AntacidsPage } from '../pages/antacids/antacids';
import { AcidReducersPage } from '../pages/acid-reducers/acid-reducers';
import { HeartburnGroupPage } from '../pages/heartburn-group/heartburn-group';
import { PainPillsPage } from '../pages/pain-pills/pain-pills';
import { PainCreamsPage } from '../pages/pain-creams/pain-creams';
import { PainPatchesPage } from '../pages/pain-patches/pain-patches';
import { CompareFeedbackPage } from '../pages/compare-feedback/compare-feedback';
import { CompareYeastPage } from '../pages/compare-yeast/compare-yeast';
import { CompareAthletesfootPage } from '../pages/compare-athletesfoot/compare-athletesfoot';

import { DiphenhydraminePage } from '../pages/diphenhydramine/diphenhydramine';
import { LoratadinePage } from '../pages/loratadine/loratadine';
import { CetirizinePage } from '../pages/cetirizine/cetirizine';
import { FexofenadinePage } from '../pages/fexofenadine/fexofenadine';
import { TumsPage } from '../pages/tums/tums';
import { MaaloxPage } from '../pages/maalox/maalox';
import { MyliconPage } from '../pages/mylicon/mylicon';
import { SudafedPage } from '../pages/sudafed/sudafed';
import { PediacarePage } from '../pages/pediacare/pediacare';
import { DimetappPage } from '../pages/dimetapp/dimetapp';
import { TriaminicPage } from '../pages/triaminic/triaminic';
import { PeptoPage } from '../pages/pepto/pepto';
import { MucinexPage } from '../pages/mucinex/mucinex';
import { LittleRemediesPage } from '../pages/little-remedies/little-remedies';
import { AcetaminophenPage } from '../pages/acetaminophen/acetaminophen';
import { IbuprofenPage } from '../pages/ibuprofen/ibuprofen';
import { MiralaxPage } from '../pages/miralax/miralax';
import { PedialaxPage } from '../pages/pedialax/pedialax';
import { FletchersPage } from '../pages/fletchers/fletchers';
import { ImodiumPage } from '../pages/imodium/imodium';
import { MilkMagnesiaPage } from '../pages/milk-magnesia/milk-magnesia';
import { RobitussinPage } from '../pages/robitussin/robitussin';

import { InfantSuspMobilePage } from '../pages/infant-susp-mobile/infant-susp-mobile';
import { ChildrenSuspMobilePage } from '../pages/children-susp-mobile/children-susp-mobile';
import { ChildrenChewableMobilePage } from '../pages/children-chewable-mobile/children-chewable-mobile';
import { JuniorChewableMobilePage } from '../pages/junior-chewable-mobile/junior-chewable-mobile';
import { RegularAcetMobilePage } from '../pages/regular-acet-mobile/regular-acet-mobile';
import { InfantSuppositoryMobilePage } from '../pages/infant-suppository-mobile/infant-suppository-mobile';
import { ChildrenSuppositoryMobilePage } from '../pages/children-suppository-mobile/children-suppository-mobile';
import { JuniorSuppositoryMobilePage } from '../pages/junior-suppository-mobile/junior-suppository-mobile';

import { IbuprofenInfantDropsMobilePage } from '../pages/ibuprofen-infant-drops-mobile/ibuprofen-infant-drops-mobile';
import { IbuprofenSuspensionMobilePage } from '../pages/ibuprofen-suspension-mobile/ibuprofen-suspension-mobile';
import { IbuprofenChewableMobilePage } from '../pages/ibuprofen-chewable-mobile/ibuprofen-chewable-mobile';
import { IbuprofenAdultMobilePage } from '../pages/ibuprofen-adult-mobile/ibuprofen-adult-mobile';

import { LoratadineLiquidMobilePage } from '../pages/loratadine-liquid-mobile/loratadine-liquid-mobile';
import { LoratadineChewableMobilePage } from '../pages/loratadine-chewable-mobile/loratadine-chewable-mobile';
import { LoratadineDisintegratingMobilePage } from '../pages/loratadine-disintegrating-mobile/loratadine-disintegrating-mobile';
import { LoratadineAdultMobilePage } from '../pages/loratadine-adult-mobile/loratadine-adult-mobile';

import { CetirizineLiquidMobilePage } from '../pages/cetirizine-liquid-mobile/cetirizine-liquid-mobile';
import { CetirizineChewableMobilePage } from '../pages/cetirizine-chewable-mobile/cetirizine-chewable-mobile';
import { CetirizineAdultMobilePage } from '../pages/cetirizine-adult-mobile/cetirizine-adult-mobile';

import { FexofenadineLiquidMobilePage } from '../pages/fexofenadine-liquid-mobile/fexofenadine-liquid-mobile';
import { FexofenadineChewableMobilePage } from '../pages/fexofenadine-chewable-mobile/fexofenadine-chewable-mobile';

import { TumsKidsMobilePage } from '../pages/tums-kids-mobile/tums-kids-mobile';
import { TumsRegularMobilePage } from '../pages/tums-regular-mobile/tums-regular-mobile';

import { MaaloxChildrenMobilePage } from '../pages/maalox-children-mobile/maalox-children-mobile';
import { MaaloxJuniorMobilePage } from '../pages/maalox-junior-mobile/maalox-junior-mobile';
import { MaaloxRegularMobilePage } from '../pages/maalox-regular-mobile/maalox-regular-mobile';

import { SudafedPseudoMobilePage } from '../pages/sudafed-pseudo-mobile/sudafed-pseudo-mobile';
import { SudafedPeMobilePage } from '../pages/sudafed-pe-mobile/sudafed-pe-mobile';
import { SudafedColdCoughMobilePage } from '../pages/sudafed-cold-cough-mobile/sudafed-cold-cough-mobile';
import { SudafedPseudotabMobilePage } from '../pages/sudafed-pseudotab-mobile/sudafed-pseudotab-mobile';

import { PediacareMultiSymptomColdMobilePage } from '../pages/pediacare-multi-symptom-cold-mobile/pediacare-multi-symptom-cold-mobile';
import { PediacareCoughRunnynoseMobilePage } from '../pages/pediacare-cough-runnynose-mobile/pediacare-cough-runnynose-mobile';
import { PediacareCoughCongestionMobilePage } from '../pages/pediacare-cough-congestion-mobile/pediacare-cough-congestion-mobile';
import { PediacareDaytimeMsColdMobilePage } from '../pages/pediacare-daytime-ms-cold-mobile/pediacare-daytime-ms-cold-mobile';
import { PediacareFluMobilePage } from '../pages/pediacare-flu-mobile/pediacare-flu-mobile';
import { PediacareNightimeMsColdMobilePage } from '../pages/pediacare-nightime-ms-cold-mobile/pediacare-nightime-ms-cold-mobile';
import { PediacareCoughSorethroatMobilePage } from '../pages/pediacare-cough-sorethroat-mobile/pediacare-cough-sorethroat-mobile';

import { DimetappColdCoughMobilePage } from '../pages/dimetapp-cold-cough-mobile/dimetapp-cold-cough-mobile';
import { DimetappColdAllergyMobilePage } from '../pages/dimetapp-cold-allergy-mobile/dimetapp-cold-allergy-mobile';
import { DimetappColdFluMobilePage } from '../pages/dimetapp-cold-flu-mobile/dimetapp-cold-flu-mobile';
import { DimetappColdCoughlaMobilePage } from '../pages/dimetapp-cold-coughla-mobile/dimetapp-cold-coughla-mobile';
import { DimetappColdCongestionMobilePage } from '../pages/dimetapp-cold-congestion-mobile/dimetapp-cold-congestion-mobile';

import { TriaminicMultiSymptomFeverColdMobilePage } from '../pages/triaminic-multi-symptom-fever-cold-mobile/triaminic-multi-symptom-fever-cold-mobile';
import { TriaminicCoughCongestionMobilePage } from '../pages/triaminic-cough-congestion-mobile/triaminic-cough-congestion-mobile';
import { TriaminicCoughSorethroatMobilePage } from '../pages/triaminic-cough-sorethroat-mobile/triaminic-cough-sorethroat-mobile';
import { TriaminicDaytimeColdCoughMobilePage } from '../pages/triaminic-daytime-cold-cough-mobile/triaminic-daytime-cold-cough-mobile';
import { TriaminicNighttimeColdCoughMobilePage } from '../pages/triaminic-nighttime-cold-cough-mobile/triaminic-nighttime-cold-cough-mobile';

import { MucinexMsColdFeverMobilePage } from '../pages/mucinex-ms-cold-fever-mobile/mucinex-ms-cold-fever-mobile';
import { MucinexMsColdMobilePage } from '../pages/mucinex-ms-cold-mobile/mucinex-ms-cold-mobile';
import { MucinexColdCoughSorethroatMobilePage } from '../pages/mucinex-cold-cough-sorethroat-mobile/mucinex-cold-cough-sorethroat-mobile';
import { MucinexNighttimeMsColdMobilePage } from '../pages/mucinex-nighttime-ms-cold-mobile/mucinex-nighttime-ms-cold-mobile';

import { LittleMsColdFeverMobilePage } from '../pages/little-ms-cold-fever-mobile/little-ms-cold-fever-mobile';
import { LittleDecongestantDropsMobilePage } from '../pages/little-decongestant-drops-mobile/little-decongestant-drops-mobile';

import { RobitussinCoughColdMobilePage } from '../pages/robitussin-cough-cold-mobile/robitussin-cough-cold-mobile';
import { RobitussinCoughChestMobilePage } from '../pages/robitussin-cough-chest-mobile/robitussin-cough-chest-mobile';
import { RobitussinCoughColdLaMobilePage } from '../pages/robitussin-cough-cold-la-mobile/robitussin-cough-cold-la-mobile';

import { PedialaxChewableMobilePage } from '../pages/pedialax-chewable-mobile/pedialax-chewable-mobile';
import { PedialaxLiquidMobilePage } from '../pages/pedialax-liquid-mobile/pedialax-liquid-mobile';
import { PedialaxGlycerinMobilePage } from '../pages/pedialax-glycerin-mobile/pedialax-glycerin-mobile';
import { PedialaxEnemaMobilePage } from '../pages/pedialax-enema-mobile/pedialax-enema-mobile';

import { SaveDoseInsertPage } from '../pages/save-dose-insert/save-dose-insert';
import { SaveDoseLoginPage } from '../pages/save-dose-login/save-dose-login';
import { SaveDoseInsertSuccessPage } from '../pages/save-dose-insert-success/save-dose-insert-success';
import { SaveDoseListPage } from '../pages/save-dose-list/save-dose-list';
import { SaveDoseLogoutConfirmPage } from '../pages/save-dose-logout-confirm/save-dose-logout-confirm';
import { SaveDoseLoginDirectPage } from '../pages/save-dose-login-direct/save-dose-login-direct';
import { SaveDoseRegisterPage } from '../pages/save-dose-register/save-dose-register';

import { ChildrenDiphenhydramineMobilePage } from '../pages/children-diphenhydramine-mobile/children-diphenhydramine-mobile';
import { DiphenLiquidMobilePage } from '../pages/diphen-liquid-mobile/diphen-liquid-mobile';
import { DiphenChewableMobilePage } from '../pages/diphen-chewable-mobile/diphen-chewable-mobile';
import { DiphenAdultMobilePage } from '../pages/diphen-adult-mobile/diphen-adult-mobile';

import { AgmCoreModule } from "angular2-google-maps/core";
import { NearestHospitalListPage } from '../pages/nearest-hospital-list/nearest-hospital-list';
import { PlaceDetailsPage } from '../pages/place-details/place-details';
import { OrderByPipe } from '../pages/orderby/orderby';
import { PlaceNavigationPage } from '../pages/place-navigation/place-navigation';
import { DirectionsMapDirective } from '../pages/place-navigation/google-map.directive';
import { UrgentcareListPage } from '../pages/urgentcare-list/urgentcare-list';
import { DoctorOfficeListPage } from '../pages/doctor-office-list/doctor-office-list';
import { ChildrenClinicListPage } from '../pages/children-clinic-list/children-clinic-list';
import { DentalCareListPage } from '../pages/dental-care-list/dental-care-list';
import { PharmacyCareListPage } from '../pages/pharmacy-care-list/pharmacy-care-list';

import { AdultTakeMobileSymptomsListPage } from '../pages/adult-take-mobile-symptoms-list/adult-take-mobile-symptoms-list';
import { AdultTakeMobileToPharmacistListPage } from '../pages/adult-take-mobile-to-pharmacist-list/adult-take-mobile-to-pharmacist-list';
import { AllergiesMobilePage }                 from '../pages/allergies-mobile/allergies-mobile';
import { ColdMobilePage }                      from '../pages/cold-mobile/cold-mobile';
import { FluMobilePage }                       from '../pages/flu-mobile/flu-mobile';
import { HeadacheMobilePage } from '../pages/headache-mobile/headache-mobile';
import { SleepMobilePage } from '../pages/sleep-mobile/sleep-mobile';
import { HairlossMobilePage } from '../pages/hairloss-mobile/hairloss-mobile';
import { DandruffMobilePage } from '../pages/dandruff-mobile/dandruff-mobile';
import { LiceMobilePage } from '../pages/lice-mobile/lice-mobile';
import { PinkeyeMobilePage } from '../pages/pinkeye-mobile/pinkeye-mobile';
import { RedeyeMobilePage } from '../pages/redeye-mobile/redeye-mobile';
import { StyeyeMobilePage } from '../pages/styeye-mobile/styeye-mobile';
import { DryeyeMobilePage } from '../pages/dryeye-mobile/dryeye-mobile';
import { EaracheMobilePage } from '../pages/earache-mobile/earache-mobile';
import { SwimearMobilePage } from '../pages/swimear-mobile/swimear-mobile';
import { EarwaxMobilePage } from '../pages/earwax-mobile/earwax-mobile';
import { MotionSicknessMobilePage } from '../pages/motion-sickness-mobile/motion-sickness-mobile';
import { VertigoMobilePage } from '../pages/vertigo-mobile/vertigo-mobile';
import { ToothacheMobilePage } from '../pages/toothache-mobile/toothache-mobile';
import { ColdSoreMobilePage } from '../pages/cold-sore-mobile/cold-sore-mobile';
import { CankerSoreMobilePage } from '../pages/canker-sore-mobile/canker-sore-mobile';
import { DrymouthMobilePage } from '../pages/drymouth-mobile/drymouth-mobile';
import { BadBreathMobilePage } from '../pages/bad-breath-mobile/bad-breath-mobile';
import { CongestionMobilePage } from '../pages/congestion-mobile/congestion-mobile';
import { RunnyNoseMobilePage } from '../pages/runny-nose-mobile/runny-nose-mobile';
import { SinusPressureMobilePage } from '../pages/sinus-pressure-mobile/sinus-pressure-mobile';
import { SnoringMobilePage } from '../pages/snoring-mobile/snoring-mobile';
import { CoughMobilePage } from '../pages/cough-mobile/cough-mobile';
import { SoreThroatMobilePage } from '../pages/sore-throat-mobile/sore-throat-mobile';
import { StiffNeckMobilePage } from '../pages/stiff-neck-mobile/stiff-neck-mobile';
import { ChestCongestionMobilePage } from '../pages/chest-congestion-mobile/chest-congestion-mobile';
import { BackPainMobilePage } from '../pages/back-pain-mobile/back-pain-mobile';
import { HeartburnMobilePage } from '../pages/heartburn-mobile/heartburn-mobile';
import { ChestpainMobilePage } from '../pages/chestpain-mobile/chestpain-mobile';
import { ShoulderMobilePage } from '../pages/shoulder-mobile/shoulder-mobile';
import { WristPainMobilePage } from '../pages/wrist-pain-mobile/wrist-pain-mobile';
import { ElbowMobilePage } from '../pages/elbow-mobile/elbow-mobile';
import { ConstipationMobilePage } from '../pages/constipation-mobile/constipation-mobile';
import { DiarrheaMobilePage } from '../pages/diarrhea-mobile/diarrhea-mobile';
import { NauseaMobilePage } from '../pages/nausea-mobile/nausea-mobile';
import { StomachAcheMobilePage } from '../pages/stomach-ache-mobile/stomach-ache-mobile';
import { StomachFluMobilePage } from '../pages/stomach-flu-mobile/stomach-flu-mobile';
import { FoodPoisoningMobilePage } from '../pages/food-poisoning-mobile/food-poisoning-mobile';
import { YeastMobilePage } from '../pages/yeast-mobile/yeast-mobile';
import { UtiMobilePage } from '../pages/uti-mobile/uti-mobile';
import { JockitchMobilePage } from '../pages/jockitch-mobile/jockitch-mobile';
import { HemorrhoidsMobilePage } from '../pages/hemorrhoids-mobile/hemorrhoids-mobile';
import { PinwormMobilePage } from '../pages/pinworm-mobile/pinworm-mobile';
import { MenstrualMobilePage } from '../pages/menstrual-mobile/menstrual-mobile';
import { BitesMobilePage } from '../pages/bites-mobile/bites-mobile';
import { AcneMobilePage } from '../pages/acne-mobile/acne-mobile';
import { RashMobilePage } from '../pages/rash-mobile/rash-mobile';
import { EczemaMobilePage } from '../pages/eczema-mobile/eczema-mobile';
import { BurnMobilePage } from '../pages/burn-mobile/burn-mobile';
import { SunburnMobilePage } from '../pages/sunburn-mobile/sunburn-mobile';
import { PoisonIvyMobilePage } from '../pages/poison-ivy-mobile/poison-ivy-mobile';
import { HivesMobilePage } from '../pages/hives-mobile/hives-mobile';
import { RingwormMobilePage } from '../pages/ringworm-mobile/ringworm-mobile';
import { WartsMobilePage } from '../pages/warts-mobile/warts-mobile';
import { ScabiesMobilePage } from '../pages/scabies-mobile/scabies-mobile';
import { ShinglesMobilePage } from '../pages/shingles-mobile/shingles-mobile';
import { AnkleSprainMobilePage } from '../pages/ankle-sprain-mobile/ankle-sprain-mobile';
import { AthletesMobilePage } from '../pages/athletes-mobile/athletes-mobile';
import { FootPainMobilePage } from '../pages/foot-pain-mobile/foot-pain-mobile';
import { ArthritisMobilePage } from '../pages/arthritis-mobile/arthritis-mobile';
import { NailFungusMobilePage } from '../pages/nail-fungus-mobile/nail-fungus-mobile';
import { SwollenFootMobilePage } from '../pages/swollen-foot-mobile/swollen-foot-mobile';
import { CornMobilePage } from '../pages/corn-mobile/corn-mobile';
import { IngrownNailMobilePage } from '../pages/ingrown-nail-mobile/ingrown-nail-mobile';

import { ColdMobileInfographicsPage } from '../pages/cold-mobile-infographics/cold-mobile-infographics';
import { SinusPressureInfographicsMobilePage } from '../pages/sinus-pressure-infographics-mobile/sinus-pressure-infographics-mobile';

import { AllergyAdultRecomMobilePage } from '../pages/allergy-adult-recom-mobile/allergy-adult-recom-mobile';
import { ColdAdultRecomMobilePage } from '../pages/cold-adult-recom-mobile/cold-adult-recom-mobile';
import { FluAdultRecomMobilePage } from '../pages/flu-adult-recom-mobile/flu-adult-recom-mobile';
import { HeadacheAdultRecomMobilePage } from '../pages/headache-adult-recom-mobile/headache-adult-recom-mobile';
import { SleepAdultRecomMobilePage } from '../pages/sleep-adult-recom-mobile/sleep-adult-recom-mobile';
import { HairlossAdultRecomMobilePage } from '../pages/hairloss-adult-recom-mobile/hairloss-adult-recom-mobile';
import { DandruffAdultRecomMobilePage } from '../pages/dandruff-adult-recom-mobile/dandruff-adult-recom-mobile';
import { LiceAdultRecomMobilePage } from '../pages/lice-adult-recom-mobile/lice-adult-recom-mobile';
import { PinkeyeAdultRecomMobilePage } from '../pages/pinkeye-adult-recom-mobile/pinkeye-adult-recom-mobile';
import { RedeyeAdultRecomMobilePage } from '../pages/redeye-adult-recom-mobile/redeye-adult-recom-mobile';
import { StyAdultRecomMobilePage } from '../pages/sty-adult-recom-mobile/sty-adult-recom-mobile';
import { DryeyeAdultRecomMobilePage } from '../pages/dryeye-adult-recom-mobile/dryeye-adult-recom-mobile';
import { EaracheAdultRecomMobilePage } from '../pages/earache-adult-recom-mobile/earache-adult-recom-mobile';
import { SwimearAdultRecomMobilePage } from '../pages/swimear-adult-recom-mobile/swimear-adult-recom-mobile';
import { EarwaxAdultRecomMobilePage } from '../pages/earwax-adult-recom-mobile/earwax-adult-recom-mobile';
import { MotionAdultRecomMobilePage } from '../pages/motion-adult-recom-mobile/motion-adult-recom-mobile';
import { VertigoAdultRecomMobilePage } from '../pages/vertigo-adult-recom-mobile/vertigo-adult-recom-mobile';
import { ToothacheAdultRecomMobilePage } from '../pages/toothache-adult-recom-mobile/toothache-adult-recom-mobile';
import { ColdsoreAdultRecomMobilePage } from '../pages/coldsore-adult-recom-mobile/coldsore-adult-recom-mobile';
import { CankerAdultRecomMobilePage } from '../pages/canker-adult-recom-mobile/canker-adult-recom-mobile';
import { DrymouthAdultRecomMobilePage } from '../pages/drymouth-adult-recom-mobile/drymouth-adult-recom-mobile';
import { BadbreathAdultRecomMobilePage } from '../pages/badbreath-adult-recom-mobile/badbreath-adult-recom-mobile';
import { StuffyAdultRecomMobilePage } from '../pages/stuffy-adult-recom-mobile/stuffy-adult-recom-mobile';
import { RunnyAdultRecomMobilePage } from '../pages/runny-adult-recom-mobile/runny-adult-recom-mobile';
import { SinusAdultRecomMobilePage } from '../pages/sinus-adult-recom-mobile/sinus-adult-recom-mobile';
import { SnoringAdultRecomMobilePage } from '../pages/snoring-adult-recom-mobile/snoring-adult-recom-mobile';
import { CoughAdultRecomMobilePage } from '../pages/cough-adult-recom-mobile/cough-adult-recom-mobile';
import { SorethroatAdultRecomMobilePage } from '../pages/sorethroat-adult-recom-mobile/sorethroat-adult-recom-mobile';
import { StiffneckAdultRecomMobilePage } from '../pages/stiffneck-adult-recom-mobile/stiffneck-adult-recom-mobile';
import { ChestCongestionAdultRecomMobilePage } from '../pages/chest-congestion-adult-recom-mobile/chest-congestion-adult-recom-mobile';
import { BackPainAdultRecomMobilePage } from '../pages/back-pain-adult-recom-mobile/back-pain-adult-recom-mobile';
import { HeartburnAdultRecomMobilePage } from '../pages/heartburn-adult-recom-mobile/heartburn-adult-recom-mobile';
import { ChestpainAdultRecomMobilePage } from '../pages/chestpain-adult-recom-mobile/chestpain-adult-recom-mobile';
import { ShoulderAdultRecomMobilePage } from '../pages/shoulder-adult-recom-mobile/shoulder-adult-recom-mobile';
import { WristAdultRecomMobilePage } from '../pages/wrist-adult-recom-mobile/wrist-adult-recom-mobile';
import { ElbowAdultRecomMobilePage } from '../pages/elbow-adult-recom-mobile/elbow-adult-recom-mobile';
import { ConstipationAdultRecomMobilePage } from '../pages/constipation-adult-recom-mobile/constipation-adult-recom-mobile';
import { DiarrheaAdultRecomMobilePage } from '../pages/diarrhea-adult-recom-mobile/diarrhea-adult-recom-mobile';
import { NauseaAdultRecomMobilePage } from '../pages/nausea-adult-recom-mobile/nausea-adult-recom-mobile';
import { StomachacheAdultRecomMobilePage } from '../pages/stomachache-adult-recom-mobile/stomachache-adult-recom-mobile';
import { StomachfluAdultRecomMobilePage } from '../pages/stomachflu-adult-recom-mobile/stomachflu-adult-recom-mobile';
import { FoodpoisoningAdultRecomMobilePage } from '../pages/foodpoisoning-adult-recom-mobile/foodpoisoning-adult-recom-mobile';
import { YeastAdultRecomMobilePage } from '../pages/yeast-adult-recom-mobile/yeast-adult-recom-mobile';
import { UtiAdultRecomMobilePage } from '../pages/uti-adult-recom-mobile/uti-adult-recom-mobile';
import { JockitchAdultRecomMobilePage } from '../pages/jockitch-adult-recom-mobile/jockitch-adult-recom-mobile';
import { HemorrhoidsAdultRecomMobilePage } from '../pages/hemorrhoids-adult-recom-mobile/hemorrhoids-adult-recom-mobile';
import { PinwormAdultRecomMobilePage } from '../pages/pinworm-adult-recom-mobile/pinworm-adult-recom-mobile';
import { MenstrualAdultRecomMobilePage } from '../pages/menstrual-adult-recom-mobile/menstrual-adult-recom-mobile';
import { BitesAdultRecomMobilePage } from '../pages/bites-adult-recom-mobile/bites-adult-recom-mobile';
import { AcneAdultRecomMobilePage } from '../pages/acne-adult-recom-mobile/acne-adult-recom-mobile';
import { RashAdultRecomMobilePage } from '../pages/rash-adult-recom-mobile/rash-adult-recom-mobile';
import { EczemaAdultRecomMobilePage } from '../pages/eczema-adult-recom-mobile/eczema-adult-recom-mobile';
import { BurnAdultRecomMobilePage } from '../pages/burn-adult-recom-mobile/burn-adult-recom-mobile';
import { SunburnAdultRecomMobilePage } from '../pages/sunburn-adult-recom-mobile/sunburn-adult-recom-mobile';
import { PoisonivyAdultRecomMobilePage } from '../pages/poisonivy-adult-recom-mobile/poisonivy-adult-recom-mobile';
import { HivesAdultRecomMobilePage } from '../pages/hives-adult-recom-mobile/hives-adult-recom-mobile';
import { RingwormAdultRecomMobilePage } from '../pages/ringworm-adult-recom-mobile/ringworm-adult-recom-mobile';
import { WartsAdultRecomMobilePage } from '../pages/warts-adult-recom-mobile/warts-adult-recom-mobile';
import { SprainAdultRecomMobilePage } from '../pages/sprain-adult-recom-mobile/sprain-adult-recom-mobile';
import { AthletesfootAdultRecomMobilePage } from '../pages/athletesfoot-adult-recom-mobile/athletesfoot-adult-recom-mobile';
import { FootpainAdultRecomMobilePage } from '../pages/footpain-adult-recom-mobile/footpain-adult-recom-mobile';
import { ArthritisAdultRecomMobilePage } from '../pages/arthritis-adult-recom-mobile/arthritis-adult-recom-mobile';
import { NailfungusAdultRecomMobilePage } from '../pages/nailfungus-adult-recom-mobile/nailfungus-adult-recom-mobile';
import { SwollenfootAdultRecomMobilePage } from '../pages/swollenfoot-adult-recom-mobile/swollenfoot-adult-recom-mobile';
import { CornAdultRecomMobilePage } from '../pages/corn-adult-recom-mobile/corn-adult-recom-mobile';
import { IngrownAdultRecomMobilePage } from '../pages/ingrown-adult-recom-mobile/ingrown-adult-recom-mobile';
import { YeastAdultRecomMobile1Page } from '../pages/yeast-adult-recom-mobile1/yeast-adult-recom-mobile1';

import { FluMobileInfographicsPage } from '../pages/flu-mobile-infographics/flu-mobile-infographics';
import { HeadacheInfographicsMobilePage } from '../pages/headache-infographics-mobile/headache-infographics-mobile';
import { SleepInfographicsMobilePage } from '../pages/sleep-infographics-mobile/sleep-infographics-mobile';
import { HairlossInfographicsMobilePage } from '../pages/hairloss-infographics-mobile/hairloss-infographics-mobile';
import { DandruffInfographicsMobilePage } from '../pages/dandruff-infographics-mobile/dandruff-infographics-mobile';
import { LiceInfographicsMobilePage } from '../pages/lice-infographics-mobile/lice-infographics-mobile';
import { PinkeyeMobileInfographicsPage } from '../pages/pinkeye-mobile-infographics/pinkeye-mobile-infographics';
import { RedeyeMobileInfographicsPage } from '../pages/redeye-mobile-infographics/redeye-mobile-infographics';
import { StyeyeMobileInfographicsPage } from '../pages/styeye-mobile-infographics/styeye-mobile-infographics';
import { DryeyeMobileInfographicsPage } from '../pages/dryeye-mobile-infographics/dryeye-mobile-infographics';
import { EaracheInfographicsMobilePage } from '../pages/earache-infographics-mobile/earache-infographics-mobile';
import { SwimearInfographicsMobilePage } from '../pages/swimear-infographics-mobile/swimear-infographics-mobile';
import { EarwaxInfographicMobilePage } from '../pages/earwax-infographic-mobile/earwax-infographic-mobile';
import { MotionSicknessInfographicsMobilePage } from '../pages/motion-sickness-infographics-mobile/motion-sickness-infographics-mobile';
import { VertigoInfographicsMobilePage } from '../pages/vertigo-infographics-mobile/vertigo-infographics-mobile';
import { ToothacheInfographicsMobilePage } from '../pages/toothache-infographics-mobile/toothache-infographics-mobile';
import { ColdSoreInfographicsMobilePage } from '../pages/cold-sore-infographics-mobile/cold-sore-infographics-mobile';
import { CankerSoreInfographicsMobilePage } from '../pages/canker-sore-infographics-mobile/canker-sore-infographics-mobile';
import { DrymouthInfographicsMobilePage } from '../pages/drymouth-infographics-mobile/drymouth-infographics-mobile';
import { BadBreathInfographicsMobilePage } from '../pages/bad-breath-infographics-mobile/bad-breath-infographics-mobile';
import { CongestionInfographicsMobilePage } from '../pages/congestion-infographics-mobile/congestion-infographics-mobile';
import { RunnyNoseInfographicsMobilePage } from '../pages/runny-nose-infographics-mobile/runny-nose-infographics-mobile';
import { SnoringInfographicsMobilePage } from '../pages/snoring-infographics-mobile/snoring-infographics-mobile';
import { CoughInfographicsMobilePage } from '../pages/cough-infographics-mobile/cough-infographics-mobile';
import { ChestCongestionInfographicsMobilePage } from '../pages/chest-congestion-infographics-mobile/chest-congestion-infographics-mobile';
import { ShoulderInfographicsMobilePage } from '../pages/shoulder-infographics-mobile/shoulder-infographics-mobile';
import { ConstipationInfographicsMobilePage } from '../pages/constipation-infographics-mobile/constipation-infographics-mobile';
import { YeastInfographicsMobilePage } from '../pages/yeast-infographics-mobile/yeast-infographics-mobile';
import { BitesInfographicsMobilePage } from '../pages/bites-infographics-mobile/bites-infographics-mobile';
import { AnkleSprainInfographicsMobilePage } from '../pages/ankle-sprain-infographics-mobile/ankle-sprain-infographics-mobile';
import { SoreThroatInfographicsMobilePage } from '../pages/sore-throat-infographics-mobile/sore-throat-infographics-mobile';
import { StiffNeckInfographicsMobilePage } from '../pages/stiff-neck-infographics-mobile/stiff-neck-infographics-mobile';
import { BackPainInfographicsMobilePage } from '../pages/back-pain-infographics-mobile/back-pain-infographics-mobile';
import { HeartburnInfographicsMobilePage } from '../pages/heartburn-infographics-mobile/heartburn-infographics-mobile';
import { WristPainInfographicsMobilePage } from '../pages/wrist-pain-infographics-mobile/wrist-pain-infographics-mobile';
import { ElbowInfographicsMobilePage } from '../pages/elbow-infographics-mobile/elbow-infographics-mobile';
import { DiarrheaInfographicsMobilePage } from '../pages/diarrhea-infographics-mobile/diarrhea-infographics-mobile';
import { NauseaInfographicsMobilePage } from '../pages/nausea-infographics-mobile/nausea-infographics-mobile';
import { StomachAcheInfographicsMobilePage } from '../pages/stomach-ache-infographics-mobile/stomach-ache-infographics-mobile';
import { StomachFluInfographicsMobilePage } from '../pages/stomach-flu-infographics-mobile/stomach-flu-infographics-mobile';
import { FoodPoisoningInfographicsMobilePage } from '../pages/food-poisoning-infographics-mobile/food-poisoning-infographics-mobile';
import { UtiInfographicsMobilePage } from '../pages/uti-infographics-mobile/uti-infographics-mobile';
import { JockitchInfographicsMobilePage } from '../pages/jockitch-infographics-mobile/jockitch-infographics-mobile';
import { HemorrhoidsInfographicsMobilePage } from '../pages/hemorrhoids-infographics-mobile/hemorrhoids-infographics-mobile';
import { PinwormInfographicsMobilePage }from '../pages/pinworm-infographics-mobile/pinworm-infographics-mobile';
import { MenstrualInfographicsMobilePage } from '../pages/menstrual-infographics-mobile/menstrual-infographics-mobile';
import { RashInfographicsMobilePage } from '../pages/rash-infographics-mobile/rash-infographics-mobile';
import { EczemaInfographicsMobilePage } from '../pages/eczema-infographics-mobile/eczema-infographics-mobile';
import { BurnInfographicsMobilePage } from '../pages/burn-infographics-mobile/burn-infographics-mobile';
import { SunburnInfographicsMobilePage } from '../pages/sunburn-infographics-mobile/sunburn-infographics-mobile';
import { PoisonIvyInfographicsMobilePage } from '../pages/poison-ivy-infographics-mobile/poison-ivy-infographics-mobile';
import { HivesInfographicsMobilePage } from '../pages/hives-infographics-mobile/hives-infographics-mobile';
import { RingwormInfographicsMobilePage } from '../pages/ringworm-infographics-mobile/ringworm-infographics-mobile';
import { WartsInfographicsMobilePage } from '../pages/warts-infographics-mobile/warts-infographics-mobile';
import { AthletesInfographicsMobilePage } from '../pages/athletes-infographics-mobile/athletes-infographics-mobile';
import { FootPainInfographicsMobilePage } from '../pages/foot-pain-infographics-mobile/foot-pain-infographics-mobile';
import { ArthritisInfographicsMobilePage } from '../pages/arthritis-infographics-mobile/arthritis-infographics-mobile';
import { NailFungusInfographicsMobilePage } from '../pages/nail-fungus-infographics-mobile/nail-fungus-infographics-mobile';
import { SwollenFootInfographicsMobilePage } from '../pages/swollen-foot-infographics-mobile/swollen-foot-infographics-mobile';
import { CornInfographicsMobilePage } from '../pages/corn-infographics-mobile/corn-infographics-mobile';
import { IngrownNailInfographicsMobilePage } from '../pages/ingrown-nail-infographics-mobile/ingrown-nail-infographics-mobile';

import { ContactSocialMobilePage } from '../pages/contact-social-mobile/contact-social-mobile';

import { AuthService} from '../pages/providers/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelfCarePage,
    ComparePage,
    ChildrenPage,
    DrugPage,
    AboutPage,

    NearestHospitalPage,
    UrgentCarePage,
    DoctorOfficePage,
    ChildrenClinicPage,
    DentalCarePage,
    PharmacyCarePage,

    AllergyMedsPage,
    ColdMedsPage,
    ColdMedsChildPage,
    CoughMedsPage,
    ColdsoreMedsPage,
    EnergyDrinksPage,
    EyeDropsPage,
    AntifungiMedsPage,
    HeartburnMedsPage,
    LaxativesPage,
    PainRelieversPage,
    ProbioticsPage,
    SleepAidsPage,

    AdultTakeMobileListPage,
    AdultTakeMobileIntroPage,
    ChildTakeMobileListPage,
    ChildTakeMobileIntroPage,
    DosingPage,
    NearestPage,

    CommentComparePage,
    CommentCompareBluePage,
    CommentCompareCyanPage,
    CommentCompareOrangePage,
    CommentCompareGreenPage,
    CommentComparePinkPage,
    CommentLoginPage,

    DecongestantsPage,
    MultisymptomsPage,
    ImmuneboostersPage,

    RedEyeDropsPage,
    DryEyeDropsPage,
    ItchyEyeDropsPage,
    AntacidsPage,
    AcidReducersPage,
    HeartburnGroupPage,
    PainPillsPage,
    PainCreamsPage,
    PainPatchesPage,
    CompareFeedbackPage,
    CompareYeastPage,
    CompareAthletesfootPage,

    DiphenhydraminePage,  // 0
    LoratadinePage,       // 1
    CetirizinePage,       // 2
    FexofenadinePage,     // 3
    TumsPage,             // 4
    MaaloxPage,           // 5
    MyliconPage,          // 6
    SudafedPage,          // 7
    PediacarePage,        // 8
    DimetappPage,         // 9
    TriaminicPage,        // 10
    PeptoPage,            // 11
    MucinexPage,          // 12
    LittleRemediesPage,   // 13
    AcetaminophenPage,    // 14
    IbuprofenPage,        // 15
    MiralaxPage,          // 16
    PedialaxPage,         // 17
    FletchersPage,        // 18
    ImodiumPage,          // 19
    MilkMagnesiaPage,     // 20
    RobitussinPage,       // 21

    InfantSuspMobilePage,                   // 0
    ChildrenSuspMobilePage,                   // 1
    ChildrenChewableMobilePage,               // 2
    JuniorChewableMobilePage,                 // 3
    RegularAcetMobilePage,                    // 4
    InfantSuppositoryMobilePage,              // 5
    ChildrenSuppositoryMobilePage,            // 6
    JuniorSuppositoryMobilePage,              // 7

    IbuprofenInfantDropsMobilePage,               // 0
    IbuprofenSuspensionMobilePage,                // 1
    IbuprofenChewableMobilePage,                  // 2
    IbuprofenAdultMobilePage,                     // 3

    LoratadineLiquidMobilePage,                     // 0
    LoratadineChewableMobilePage,                 // 1
    LoratadineDisintegratingMobilePage,           // 2
    LoratadineAdultMobilePage,                    // 3

    CetirizineLiquidMobilePage,                 // 0
    CetirizineChewableMobilePage,             // 1
    CetirizineAdultMobilePage,                // 2

    FexofenadineLiquidMobilePage,               // 0
    FexofenadineChewableMobilePage,               // 1

    TumsKidsMobilePage,                 // 0
    TumsRegularMobilePage,            // 1

    MaaloxChildrenMobilePage,               // 0
    MaaloxJuniorMobilePage,                   // 1
    MaaloxRegularMobilePage,                  // 2

    SudafedPseudoMobilePage,                  // 0
    SudafedPeMobilePage,                      // 1
    SudafedColdCoughMobilePage,               // 2
    SudafedPseudotabMobilePage,               // 3

    PediacareMultiSymptomColdMobilePage,                  // 0
    PediacareCoughRunnynoseMobilePage,                    // 1
    PediacareCoughCongestionMobilePage,                   // 2
    PediacareDaytimeMsColdMobilePage,                     // 3
    PediacareFluMobilePage,                               // 4
    PediacareNightimeMsColdMobilePage,                    // 5
    PediacareCoughSorethroatMobilePage,                   // 6

    DimetappColdCoughMobilePage,                  // 0
    DimetappColdAllergyMobilePage,                // 1
    DimetappColdFluMobilePage,                    // 2
    DimetappColdCoughlaMobilePage,                // 3
    DimetappColdCongestionMobilePage,             // 4

    TriaminicMultiSymptomFeverColdMobilePage,               // 0
    TriaminicCoughCongestionMobilePage,                       // 1
    TriaminicCoughSorethroatMobilePage,                       // 2
    TriaminicDaytimeColdCoughMobilePage,                      // 3
    TriaminicNighttimeColdCoughMobilePage,                    // 4

    MucinexMsColdFeverMobilePage,                 // 0
    MucinexMsColdMobilePage,                      // 1
    MucinexColdCoughSorethroatMobilePage,         // 2
    MucinexNighttimeMsColdMobilePage,             // 3

    LittleMsColdFeverMobilePage,
    LittleDecongestantDropsMobilePage,

    RobitussinCoughColdMobilePage,                  // 0
    RobitussinCoughChestMobilePage,                   // 1
    RobitussinCoughColdLaMobilePage,                  // 2

    PedialaxChewableMobilePage,                 // 0
    PedialaxLiquidMobilePage,                 // 1
    PedialaxGlycerinMobilePage,               // 2
    PedialaxEnemaMobilePage,                  // 3

    SaveDoseInsertPage,
    SaveDoseLoginPage,
    SaveDoseInsertSuccessPage,
    SaveDoseListPage,
    SaveDoseLogoutConfirmPage,
    SaveDoseLoginDirectPage,
    SaveDoseRegisterPage,

    ChildrenDiphenhydramineMobilePage,
    DiphenLiquidMobilePage,                 // 0
    DiphenChewableMobilePage,             // 1
    DiphenAdultMobilePage,                // 2

    NearestHospitalListPage,
    PlaceDetailsPage,
    OrderByPipe,
    PlaceNavigationPage,
    DirectionsMapDirective,
    UrgentcareListPage,
    DoctorOfficeListPage,
    ChildrenClinicListPage,
    DentalCareListPage,
    PharmacyCareListPage,

    AdultTakeMobileSymptomsListPage,
    AdultTakeMobileToPharmacistListPage,

    AllergiesMobilePage,
    ColdMobilePage,
    FluMobilePage,
    HeadacheMobilePage,
    SleepMobilePage,
    HairlossMobilePage,
    DandruffMobilePage,
    LiceMobilePage,
    PinkeyeMobilePage,
    RedeyeMobilePage,
    StyeyeMobilePage,
    DryeyeMobilePage,
    EaracheMobilePage,
    SwimearMobilePage,
    EarwaxMobilePage,
    MotionSicknessMobilePage,
    VertigoMobilePage,
    ToothacheMobilePage,
    ColdSoreMobilePage,
    CankerSoreMobilePage,
    DrymouthMobilePage,
    BadBreathMobilePage,
    CongestionMobilePage,
    RunnyNoseMobilePage,
    SinusPressureMobilePage,
    SnoringMobilePage,
    CoughMobilePage,
    SoreThroatMobilePage,
    StiffNeckMobilePage,
    ChestCongestionMobilePage,
    BackPainMobilePage,
    HeartburnMobilePage,
    ChestpainMobilePage,
    ShoulderMobilePage,
    WristPainMobilePage,
    ElbowMobilePage,
    ConstipationMobilePage,
    DiarrheaMobilePage,
    NauseaMobilePage,
    StomachAcheMobilePage,
    StomachFluMobilePage,
    FoodPoisoningMobilePage,
    YeastMobilePage,
    UtiMobilePage,
    JockitchMobilePage,
    HemorrhoidsMobilePage,
    PinwormMobilePage,
    MenstrualMobilePage,
    BitesMobilePage,
    AcneMobilePage,
    RashMobilePage,
    EczemaMobilePage,
    BurnMobilePage,
    SunburnMobilePage,
    PoisonIvyMobilePage,
    HivesMobilePage,
    RingwormMobilePage,
    WartsMobilePage,
    ScabiesMobilePage,
    ShinglesMobilePage,
    AnkleSprainMobilePage,
    AthletesMobilePage,
    FootPainMobilePage,
    ArthritisMobilePage,
    NailFungusMobilePage,
    SwollenFootMobilePage,
    CornMobilePage,
    IngrownNailMobilePage,

    ColdMobileInfographicsPage,
    SinusPressureInfographicsMobilePage,
    SinusAdultRecomMobilePage,

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
    YeastAdultRecomMobile1Page,

    FluMobileInfographicsPage,
    SleepInfographicsMobilePage,
    HairlossInfographicsMobilePage,
    DandruffInfographicsMobilePage,
    LiceInfographicsMobilePage,
    PinkeyeMobileInfographicsPage,
    RedeyeMobileInfographicsPage,
    StyeyeMobileInfographicsPage,
    DryeyeMobileInfographicsPage,
    EaracheInfographicsMobilePage,
    SwimearInfographicsMobilePage,
    EarwaxInfographicMobilePage,
    MotionSicknessInfographicsMobilePage,
    VertigoInfographicsMobilePage,
    ToothacheInfographicsMobilePage,
    ColdSoreInfographicsMobilePage,
    CankerSoreInfographicsMobilePage,
    DrymouthInfographicsMobilePage,
    BadBreathInfographicsMobilePage,
    CongestionInfographicsMobilePage,
    RunnyNoseInfographicsMobilePage,
    SnoringInfographicsMobilePage,
    CoughInfographicsMobilePage,
    ChestCongestionInfographicsMobilePage,
    ShoulderInfographicsMobilePage,
    ConstipationInfographicsMobilePage,
    YeastInfographicsMobilePage,
    BitesInfographicsMobilePage,
    AnkleSprainInfographicsMobilePage,
    SoreThroatInfographicsMobilePage,
    StiffNeckInfographicsMobilePage,
    BackPainInfographicsMobilePage,
    HeartburnInfographicsMobilePage,
    WristPainInfographicsMobilePage,
    ElbowInfographicsMobilePage,
    DiarrheaInfographicsMobilePage,
    NauseaInfographicsMobilePage,
    StomachAcheInfographicsMobilePage,
    StomachFluInfographicsMobilePage,
    FoodPoisoningInfographicsMobilePage,
    UtiInfographicsMobilePage,
    JockitchInfographicsMobilePage,
    HemorrhoidsInfographicsMobilePage,
    PinwormInfographicsMobilePage,
    MenstrualInfographicsMobilePage,
    RashInfographicsMobilePage,
    EczemaInfographicsMobilePage,
    BurnInfographicsMobilePage,
    SunburnInfographicsMobilePage,
    PoisonIvyInfographicsMobilePage,
    HivesInfographicsMobilePage,
    RingwormInfographicsMobilePage,
    WartsInfographicsMobilePage,
    AthletesInfographicsMobilePage,
    FootPainInfographicsMobilePage,
    ArthritisInfographicsMobilePage,
    NailFungusInfographicsMobilePage,
    SwollenFootInfographicsMobilePage,
    CornInfographicsMobilePage,
    IngrownNailInfographicsMobilePage,

    ContactSocialMobilePage,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAB-IzrU8UFGLp9h772cgt3-5DscZYMnYE",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelfCarePage,
    ComparePage,
    ChildrenPage,
    DrugPage,
    AboutPage,

    NearestHospitalPage,
    UrgentCarePage,
    DoctorOfficePage,
    ChildrenClinicPage,
    DentalCarePage,
    PharmacyCarePage,

    AllergyMedsPage,
    ColdMedsPage,
    ColdMedsChildPage,
    CoughMedsPage,
    ColdsoreMedsPage,
    EnergyDrinksPage,
    EyeDropsPage,
    AntifungiMedsPage,
    HeartburnMedsPage,
    LaxativesPage,
    PainRelieversPage,
    ProbioticsPage,
    SleepAidsPage,

    AdultTakeMobileListPage,
    AdultTakeMobileIntroPage,
    ChildTakeMobileListPage,
    ChildTakeMobileIntroPage,
    DosingPage,
    NearestPage,

    CommentComparePage,
    CommentCompareBluePage,
    CommentCompareCyanPage,
    CommentCompareOrangePage,
    CommentCompareGreenPage,
    CommentComparePinkPage,
    CommentLoginPage,

    DecongestantsPage,
    MultisymptomsPage,
    ImmuneboostersPage,

    RedEyeDropsPage,
    DryEyeDropsPage,
    ItchyEyeDropsPage,
    AntacidsPage,
    AcidReducersPage,
    HeartburnGroupPage,
    PainPillsPage,
    PainCreamsPage,
    PainPatchesPage,
    CompareFeedbackPage,
    CompareYeastPage,
    CompareAthletesfootPage,

    DiphenhydraminePage,  // 0
    LoratadinePage,       // 1
    CetirizinePage,       // 2
    FexofenadinePage,     // 3
    TumsPage,             // 4
    MaaloxPage,           // 5
    MyliconPage,          // 6
    SudafedPage,          // 7
    PediacarePage,        // 8
    DimetappPage,         // 9
    TriaminicPage,        // 10
    PeptoPage,            // 11
    MucinexPage,          // 12
    LittleRemediesPage,   // 13
    AcetaminophenPage,    // 14
    IbuprofenPage,        // 15
    MiralaxPage,          // 16
    PedialaxPage,         // 17
    FletchersPage,        // 18
    ImodiumPage,          // 19
    MilkMagnesiaPage,     // 20
    RobitussinPage,       // 21

    InfantSuspMobilePage,                   // 0
    ChildrenSuspMobilePage,                   // 1
    ChildrenChewableMobilePage,               // 2
    JuniorChewableMobilePage,                 // 3
    RegularAcetMobilePage,                    // 4
    InfantSuppositoryMobilePage,              // 5
    ChildrenSuppositoryMobilePage,            // 6
    JuniorSuppositoryMobilePage,              // 7

    IbuprofenInfantDropsMobilePage,               // 0
    IbuprofenSuspensionMobilePage,                // 1
    IbuprofenChewableMobilePage,                  // 2
    IbuprofenAdultMobilePage,                     // 3

    LoratadineLiquidMobilePage,                     // 0
    LoratadineChewableMobilePage,                 // 1
    LoratadineDisintegratingMobilePage,           // 2
    LoratadineAdultMobilePage,                    // 3

    CetirizineLiquidMobilePage,                 // 0
    CetirizineChewableMobilePage,             // 1
    CetirizineAdultMobilePage,                // 2

    FexofenadineLiquidMobilePage,               // 0
    FexofenadineChewableMobilePage,               // 1

    TumsKidsMobilePage,                 // 0
    TumsRegularMobilePage,            // 1

    MaaloxChildrenMobilePage,               // 0
    MaaloxJuniorMobilePage,                   // 1
    MaaloxRegularMobilePage,                  // 2

    SudafedPseudoMobilePage,                  // 0
    SudafedPeMobilePage,                      // 1
    SudafedColdCoughMobilePage,               // 2
    SudafedPseudotabMobilePage,               // 3

    PediacareMultiSymptomColdMobilePage,                  // 0
    PediacareCoughRunnynoseMobilePage,                    // 1
    PediacareCoughCongestionMobilePage,                   // 2
    PediacareDaytimeMsColdMobilePage,                     // 3
    PediacareFluMobilePage,                               // 4
    PediacareNightimeMsColdMobilePage,                    // 5
    PediacareCoughSorethroatMobilePage,                   // 6

    DimetappColdCoughMobilePage,                  // 0
    DimetappColdAllergyMobilePage,                // 1
    DimetappColdFluMobilePage,                    // 2
    DimetappColdCoughlaMobilePage,                // 3
    DimetappColdCongestionMobilePage,             // 4

    TriaminicMultiSymptomFeverColdMobilePage,               // 0
    TriaminicCoughCongestionMobilePage,                       // 1
    TriaminicCoughSorethroatMobilePage,                       // 2
    TriaminicDaytimeColdCoughMobilePage,                      // 3
    TriaminicNighttimeColdCoughMobilePage,                    // 4

    MucinexMsColdFeverMobilePage,                 // 0
    MucinexMsColdMobilePage,                      // 1
    MucinexColdCoughSorethroatMobilePage,         // 2
    MucinexNighttimeMsColdMobilePage,             // 3

    LittleMsColdFeverMobilePage,
    LittleDecongestantDropsMobilePage,

    RobitussinCoughColdMobilePage,                  // 0
    RobitussinCoughChestMobilePage,                   // 1
    RobitussinCoughColdLaMobilePage,                  // 2

    PedialaxChewableMobilePage,                 // 0
    PedialaxLiquidMobilePage,                 // 1
    PedialaxGlycerinMobilePage,               // 2
    PedialaxEnemaMobilePage,                  // 3

    SaveDoseInsertPage,
    SaveDoseLoginPage,
    SaveDoseInsertSuccessPage,
    SaveDoseListPage,
    SaveDoseLogoutConfirmPage,
    SaveDoseLoginDirectPage,
    SaveDoseRegisterPage,

    ChildrenDiphenhydramineMobilePage,
    DiphenLiquidMobilePage,                 // 0
    DiphenChewableMobilePage,             // 1
    DiphenAdultMobilePage,                // 2

    NearestHospitalListPage,
    PlaceDetailsPage,
    PlaceNavigationPage,
    UrgentcareListPage,
    DoctorOfficeListPage,
    ChildrenClinicListPage,
    DentalCareListPage,
    PharmacyCareListPage,

    AdultTakeMobileSymptomsListPage,
    AdultTakeMobileToPharmacistListPage,

    AllergiesMobilePage,
    ColdMobilePage,
    FluMobilePage,
    HeadacheMobilePage,
    SleepMobilePage,
    HairlossMobilePage,
    DandruffMobilePage,
    LiceMobilePage,
    PinkeyeMobilePage,
    RedeyeMobilePage,
    StyeyeMobilePage,
    DryeyeMobilePage,
    EaracheMobilePage,
    SwimearMobilePage,
    EarwaxMobilePage,
    MotionSicknessMobilePage,
    VertigoMobilePage,
    ToothacheMobilePage,
    ColdSoreMobilePage,
    CankerSoreMobilePage,
    DrymouthMobilePage,
    BadBreathMobilePage,
    CongestionMobilePage,
    RunnyNoseMobilePage,
    SinusPressureMobilePage,
    SnoringMobilePage,
    CoughMobilePage,
    SoreThroatMobilePage,
    StiffNeckMobilePage,
    ChestCongestionMobilePage,
    BackPainMobilePage,
    HeartburnMobilePage,
    ChestpainMobilePage,
    ShoulderMobilePage,
    WristPainMobilePage,
    ElbowMobilePage,
    ConstipationMobilePage,
    DiarrheaMobilePage,
    NauseaMobilePage,
    StomachAcheMobilePage,
    StomachFluMobilePage,
    FoodPoisoningMobilePage,
    YeastMobilePage,
    UtiMobilePage,
    JockitchMobilePage,
    HemorrhoidsMobilePage,
    PinwormMobilePage,
    MenstrualMobilePage,
    BitesMobilePage,
    AcneMobilePage,
    RashMobilePage,
    EczemaMobilePage,
    BurnMobilePage,
    SunburnMobilePage,
    PoisonIvyMobilePage,
    HivesMobilePage,
    RingwormMobilePage,
    WartsMobilePage,
    ScabiesMobilePage,
    ShinglesMobilePage,
    AnkleSprainMobilePage,
    AthletesMobilePage,
    FootPainMobilePage,
    ArthritisMobilePage,
    NailFungusMobilePage,
    SwollenFootMobilePage,
    CornMobilePage,
    IngrownNailMobilePage,

    ColdMobileInfographicsPage,
    SinusPressureInfographicsMobilePage,

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
    YeastAdultRecomMobile1Page,

    FluMobileInfographicsPage,
    SleepInfographicsMobilePage,
    HairlossInfographicsMobilePage,
    DandruffInfographicsMobilePage,
    LiceInfographicsMobilePage,
    PinkeyeMobileInfographicsPage,
    RedeyeMobileInfographicsPage,
    StyeyeMobileInfographicsPage,
    DryeyeMobileInfographicsPage,
    EaracheInfographicsMobilePage,
    SwimearInfographicsMobilePage,
    EarwaxInfographicMobilePage,
    MotionSicknessInfographicsMobilePage,
    VertigoInfographicsMobilePage,
    ToothacheInfographicsMobilePage,
    ColdSoreInfographicsMobilePage,
    CankerSoreInfographicsMobilePage,
    DrymouthInfographicsMobilePage,
    BadBreathInfographicsMobilePage,
    CongestionInfographicsMobilePage,
    RunnyNoseInfographicsMobilePage,
    SnoringInfographicsMobilePage,
    CoughInfographicsMobilePage,
    ChestCongestionInfographicsMobilePage,
    ShoulderInfographicsMobilePage,
    ConstipationInfographicsMobilePage,
    YeastInfographicsMobilePage,
    BitesInfographicsMobilePage,
    AnkleSprainInfographicsMobilePage,
    SoreThroatInfographicsMobilePage,
    StiffNeckInfographicsMobilePage,
    BackPainInfographicsMobilePage,
    HeartburnInfographicsMobilePage,
    WristPainInfographicsMobilePage,
    ElbowInfographicsMobilePage,
    DiarrheaInfographicsMobilePage,
    NauseaInfographicsMobilePage,
    StomachAcheInfographicsMobilePage,
    StomachFluInfographicsMobilePage,
    FoodPoisoningInfographicsMobilePage,
    UtiInfographicsMobilePage,
    JockitchInfographicsMobilePage,
    HemorrhoidsInfographicsMobilePage,
    PinwormInfographicsMobilePage,
    MenstrualInfographicsMobilePage,
    RashInfographicsMobilePage,
    EczemaInfographicsMobilePage,
    BurnInfographicsMobilePage,
    SunburnInfographicsMobilePage,
    PoisonIvyInfographicsMobilePage,
    HivesInfographicsMobilePage,
    RingwormInfographicsMobilePage,
    WartsInfographicsMobilePage,
    AthletesInfographicsMobilePage,
    FootPainInfographicsMobilePage,
    ArthritisInfographicsMobilePage,
    NailFungusInfographicsMobilePage,
    SwollenFootInfographicsMobilePage,
    CornInfographicsMobilePage,
    IngrownNailInfographicsMobilePage,

    ContactSocialMobilePage,
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
