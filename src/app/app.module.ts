import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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
    ChildTakeMobileListPage,
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
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
    ChildTakeMobileListPage,
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
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
