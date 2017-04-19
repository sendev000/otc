import { Component } from '@angular/core';
import { PopoverController, MenuController, NavController, NavParams } from 'ionic-angular';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Loading } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVars } from '../providers/globalvars';
import { AuthService} from '../providers/auth-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  state: any;
  feedback: any;
  answers: any;
  page: string;
  AbsoluteURL: string;
  sections: any;
  items: any;
  feedback_confirm: boolean;
  feedback_contents: any;
  RestApiURL: string;
  loading: Loading;
  constructor(public popoverCtrl: PopoverController, public menu: MenuController, 
              public navCtrl: NavController, public navParams: NavParams,
              public http: Http, private sanitizer: DomSanitizer,
              public alertCtrl: AlertController, public loadingCtrl: LoadingController, 
              public toastCtrl: ToastController, private authService: AuthService) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
    this.RestApiURL = GlobalVars.getApiURL() + "page=about";
    this.init();
    this.feedback_contents = {
      "rsUXSurveyQuestions": [],
      "rsUISurveyQuestions": [],
      "rsAVSurveyQuestions": [],
      "rsCQSurveyQuestions": [],
    };
  }
  init(){
    this.loading = null;
    this.page = 'tab-aaaa';
    this.feedback_confirm = false;
    this.state = {
      'tab-aaaa': [true, true, true, true, true],
      'tab-kkkk': [true, true, true, true, true, true, true, true, true, true, true, true, 
                    true, true, true, true, true, true, true, true, true, true, true],
      'tab-llll': [true, true, true, true, true, true, true, true, true, true, true],
      'tab-mmmm': [true, true, true, true],
      'tab-nnnn': [true, true, true, true],
    };
    this.feedback = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
    };
    this.answers = {
      0: {0: "", 1: "", 2: "", 3: "", 4: ""},
      1: {0: "", 1: "", 2: "", 3: "", 4: ""},
      2: {0: "", 1: "", 2: "", 3: "", 4: ""},
      3: {0: "", 1: "", 2: "", 3: "", 4: ""},
    };
  }
  showMenu() {
  	this.menu.open();
  }
  transitFeedback(page: number, pos: number){
    this.feedback[page] = pos;
    if (pos ==6)
    {
      let saveFeedbackApiUrl = GlobalVars.getApiURL() + "&ppp=savefeedback";
      let userid, user, obj;
      user = this.authService.getUserInfo();
      if (user != null)
        userid = user.id;
      else
        userid = Math.floor(Math.random()*10001);

      saveFeedbackApiUrl += "&userid="        + userid;
      saveFeedbackApiUrl += "&survey_type="   + "Feedbacks";
      if (page == 0)
        obj = this.feedback_contents["rsUXSurveyQuestions"];
      else if (page == 1)
        obj = this.feedback_contents["rsUISurveyQuestions"];
      else if (page == 2)
        obj = this.feedback_contents["rsAVSurveyQuestions"];
      else if (page == 3)
        obj = this.feedback_contents["rsCQSurveyQuestions"];
      else
        obj = null;
      if (obj != null)
      {
        saveFeedbackApiUrl += "&survey_name=" + obj["survey_name"];
        saveFeedbackApiUrl += "&surveyQ1="    + obj["surveyQ1"];
        saveFeedbackApiUrl += "&surveyQ2="    + obj["surveyQ2"];
        saveFeedbackApiUrl += "&surveyQ3="    + obj["surveyQ3"];
        saveFeedbackApiUrl += "&surveyQ4="    + obj["surveyQ4"];
        saveFeedbackApiUrl += "&surveyQ5="    + obj["surveyQ5"];
      }
      else
        saveFeedbackApiUrl += "&survey_name=" + "&surveyQ1="  + "&surveyQ2="+ "&surveyQ3="+ "&surveyQ4="+ "&surveyQ5=";

      saveFeedbackApiUrl += "&surveyA1="    + this.answers[page][0];
      saveFeedbackApiUrl += "&surveyA2="    + this.answers[page][1];
      saveFeedbackApiUrl += "&surveyA3="    + this.answers[page][2];
      saveFeedbackApiUrl += "&surveyA4="    + this.answers[page][3];
      saveFeedbackApiUrl += "&surveyA5="    + this.answers[page][4];

      this.showLoading();
      this.http.get(saveFeedbackApiUrl).map(response => response.json()).subscribe(data => {
          setTimeout(() => {
            this.loading.dismiss().catch(() => {});
            this.showToast(data.msg);
            this.feedback_confirm = true; 
            // if (data.res == 'success')
            // {
            //   // this.currentUser = data.user;
            // }
            // else
            // {
            //   this.showToast(data.msg);
            //   this.feedback_confirm = true; 
            // }
          });
        }),
        err => {
          setTimeout(() => {
              this.loading.dismiss().catch(() => {});
              this.showToast("Access denied");
          });
        }
    }
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
  private showToast(message: string) {
    if (this.loading != null) {
      this.loading.dismiss().catch(() => {});
    }
    
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  toggleState(page: string, ind: number){
    this.state[page][ind] = !this.state[page][ind];
  }
  goBack() {
    this.init();
  }
  showPage(p: string) {
  	if (p.length > 0)
    {
      this.page = p;
    }
  }
  presentPopover(event: Event) {
  }
  loadData() {
    this.http.get(this.RestApiURL).map(res => res.json())
      .subscribe(data => {
        this.feedback_contents = data;
      }),
      err => {
        console.log("Oops!");
      }
  }
  ionViewDidLoad() {
    this.loadData();
    console.log('ionViewDidLoad DosingPage');
  }
}
