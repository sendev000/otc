import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

import { AdultTakeMobileListPage } from '../pages/adult-take-mobile-list/adult-take-mobile-list';
import { ChildTakeMobileListPage } from '../pages/child-take-mobile-list/child-take-mobile-list';
import { DosingPage } from '../pages/dosing/dosing';
import { ComparePage } from '../pages/compare/compare';
import { NearestPage } from '../pages/nearest/nearest';
import { DrugPage } from '../pages/drug/drug';

export interface PageInterface {
  title: string;
  description: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;
  appPages: PageInterface[] = [
    { title: 'Home', description: 'Main app menu.', component: HomePage,icon: 'home' },
    { title: 'Adult Symptoms', description: 'Pharmacist over the counter (OTC) recommendation.', component: AdultTakeMobileListPage, index: 1, icon: 'man' },
    { title: 'Child Symptoms', description: 'Pharmacist recommendation for common child symptoms.', component: ChildTakeMobileListPage, index: 2, icon: 'female' },
    { title: 'Product Comparison', description: 'Compare over-the-counter products.', component: ComparePage, index: 3, icon: 'git-compare' },
    { title: 'Medication Dosing', description: 'Kids over-the-counter medication dosing.', component: DosingPage, index: 4, icon: 'eye-off' },
    { title: 'Drug Savings', description: 'Drug manufactures Rx savings program', component: DrugPage, index: 5, icon: 'attach' },
    { title: 'Nearest Health Care', description: 'Hospital, Urgentcare, Dentists, Pharmacy Doctors Office', component: NearestPage, index: 6, icon: 'pin' },
    { title: 'About This App', description: 'What, where, when and how to use this.', component: AboutPage, index: 7, icon: 'information-circle' }
  ];
  constructor(
      public platform: Platform, 
      public statusBar: StatusBar, 
      public splashScreen: SplashScreen,
      public menu: MenuController,
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page: PageInterface) {
    if (page.index) {
      this.nav.push(page.component);
    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }
  }
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
    if (childNav) {
      if (childNav.getSelected()) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().component === page.component) {
      return 'primary';
    }
    return;
  }
}
