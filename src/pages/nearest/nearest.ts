import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Nearest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';

import { NearestHospitalPage } from '../nearest-hospital/nearest-hospital';
import { UrgentCarePage } from '../urgent-care/urgent-care';
import { DoctorOfficePage } from '../doctor-office/doctor-office';
import { ChildrenClinicPage } from '../children-clinic/children-clinic';
import { DentalCarePage } from '../dental-care/dental-care';
import { PharmacyCarePage } from '../pharmacy-care/pharmacy-care';

@Component({
  selector: 'page-nearest',
  templateUrl: 'nearest.html'
})

export class NearestPage {
	AbsoluteURL: string;
	slides = [
    {
    	original_url: "nearest/hospital/nearest_hospital.php",
      page: NearestHospitalPage,
    	alt: "Nearest hospital",
      gray_title: "Find Nearest ",
      other_title: "Hospital",
      other_title_class: "bluefontSmall",
      image: "assets/img/interface/icons/hospital-icon.svg",
    },
    {
      original_url: "nearest/urgentcare/nearest_urgentcare.php",
      page: UrgentCarePage,
    	alt: "Nearest urgent care",
      gray_title: "Find Nearest ",
      other_title: "Urgent Care",
      other_title_class: "redfontSmall",
      image: "assets/img/interface/icons/urgentcare-icon.svg",
    },
    {
      original_url: "nearest/doctor/nearest_doctor.php",
      page: DoctorOfficePage,
    	alt: "Find a doctor",
      gray_title: "Find Nearest ",
      other_title: "Doctor",
      other_title_class: "orangefontSmall",
      image: "assets/img/interface/icons/doctor-icon.svg",
    },
    {
      original_url: "nearest/pediatrician/nearest_pediatric_doctor.php",
      page: ChildrenClinicPage,
    	alt: "Find a pediatrician",
      gray_title: "Find ",
      other_title: "Children's Clinic",
      other_title_class: "purplefontSmall",
      image: "assets/img/interface/icons/pediatric-icon.svg",
    },
    {
      original_url: "nearest/dentist/nearest_dentist.php",
      page: DentalCarePage,
    	alt: "Find a dentist",
      gray_title: "Find Nearest ",
      other_title: "Dentist",
      other_title_class: "bluefontSmall",
      image: "assets/img/interface/icons/dentist-icon.svg",
    },
    {
      original_url: "nearest/pharmacy/nearest_pharmacy.php",
      page: PharmacyCarePage,
    	alt: "Nearest pharmacy",
      gray_title: "Find Nearest ",
      other_title: "Pharmacy",
      other_title_class: "greenfontSmall",
      image: "assets/img/interface/icons/pharmacy-icon.svg",
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  showMenu() {
  	this.menu.open();
  }
  transit(slide: any){
  	this.navCtrl.push(slide.page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NearestPage');
  }

}
