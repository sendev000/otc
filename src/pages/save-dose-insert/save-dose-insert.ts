import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Loading } from 'ionic-angular';

/*
  Generated class for the Dosing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';

import { SaveDoseInsertSuccessPage } from '../save-dose-insert-success/save-dose-insert-success';


@Component({
  selector: 'page-save-dose-insert',
  templateUrl: 'save-dose-insert.html'
})
export class SaveDoseInsertPage {
	loading: Loading;
	AbsoluteURL: string;
  dose = {'child': '', 'comment': '', 'dose_direction': '', 'dose_medication': '', 'saved_on': ''};
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private authService: AuthService,
  	public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  	this.loading = null;
  	this.dose['dose_direction'] = "<p>&amp;nbsp;</p><p><span style=&quot;font-size: 13px; line-height: 20.7999992370605px;&quot;>Give&amp;nbsp;</span><span style=&quot;line-height: 20.7999992370605px; font-size: 22px;&quot;><span style=&quot;color: rgb(255, 0, 0);&quot;>&amp;nbsp;3.75 ml (¾ teaspoonful)</span></span><span style=&quot;font-size: 13px; line-height: 20.7999992370605px;&quot;>&amp;nbsp;using the medicine syringe or a store brand dosing syringe usually every</span><span style=&quot;line-height: 20.7999992370605px; font-size: 18px;&quot;><span style=&quot;color: rgb(255, 0, 0);&quot;>&amp;nbsp;4 to 6 hours</span></span><span style=&quot;font-size: 13px; line-height: 20.7999992370605px;&quot;>&amp;nbsp;as needed.</span></p><p><img alt=&quot;3.75 ml syringe&quot; src=&quot;http://www.selfcarepharmacist.com/admin/images/articles/html_editor_uploads/3-75ml-cherry-syringe.png&quot; style=&quot;width: 180px; height: 340px;&quot;>&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;</p><p><span style=&quot;color: rgb(255, 0, 0); font-size: 18px; line-height: 20.7999992370605px; text-align: center;&quot;>Not more than 5 times a day.</span></p>";
	this.dose['dose_medication']  = "Acetaminophen Infant Suspension<br> <span class=&quot;redfontSmall centerText&quot;> 160 mg / 5 ml</span>"
	this.dose['saved_on'] = "";
  }
  showMenu() {
  	this.menu.open();
  }
  removeSpecialChars(data){
    let obj = {};
    for (var prop in data) {
        if(!data.hasOwnProperty(prop)) continue;
        obj[prop] = encodeURIComponent(data[prop]);
    }
    return obj;
  }
  saveDosingPage(){
  	let user = this.authService.getUserInfo();
  	let ddose = this.removeSpecialChars(this.dose);
  	let url = GlobalVars.getApiURL() + "email=" + user.email + "&child=" + ddose['child'] + 
  		"&comment=" + ddose['comment'] + "&saved_on=" + ddose['saved_on'] + 
  		"&dose_direction=" + ddose['dose_direction'] + 
  		"&dose_medication=" + ddose['dose_medication'] + "&ppp=save_dosing";
	this.showLoading();
	this.http.get(url).map(response => response.json()).subscribe(data => {
	  setTimeout(() => {
	    this.loading.dismiss().catch(() => {});
	    if (data.res == 'success')
	    {
	      this.navCtrl.push(SaveDoseInsertSuccessPage);
	    }
	    else
	    {
	      this.showToast(data.msg);
	    }
	  });
	}),
	err => {
	  setTimeout(() => {
	      this.loading.dismiss().catch(() => {});
	      this.showToast("Access denied");
	  });
	}
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
  showToast(message: string) {
    if (this.loading != null) {
      this.loading.dismiss().catch(() => {});
    }
    
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DosingPage');
  }

}
