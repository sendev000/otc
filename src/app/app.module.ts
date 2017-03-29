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
import { CommentLoginPage } from '../pages/comment-login/comment-login';

import { DecongestantsPage } from '../pages/decongestants/decongestants';
import { MultisymptomsPage } from '../pages/multisymptoms/multisymptoms';
import { ImmuneboostersPage } from '../pages/immuneboosters/immuneboosters';

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
    CommentLoginPage,

    DecongestantsPage,
    MultisymptomsPage,
    ImmuneboostersPage
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
    CommentLoginPage,

    DecongestantsPage,
    MultisymptomsPage,
    ImmuneboostersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
