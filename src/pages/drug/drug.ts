import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Drug page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';

@Component({
  selector: 'page-drug',
  templateUrl: 'drug.html'
})
export class DrugPage {
  @ViewChild(Content) content: Content;
  dsearch: string;
  page: number;
  topPx: number;
  noscroll: boolean;
  CouponData: any;
  noFound: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
              public http: Http, private sanitizer: DomSanitizer) {
  	this.menu = menu;
    this.dsearch = "";
    this.page = 0;
    this.topPx = 0;
    this.noscroll = false;
    this.CouponData = [];
    this.noFound = true;
  }
  showMenu() {
  	this.menu.open();
  }
  clearSearch() {
    this.dsearch = "";
    this.CouponData = [];
    this.noFound = true;
  }
  transitPage(p: number){
    this.page = p;
    if (p > 0){
      this.noscroll = true;
      this.topPx = this.content.getContentDimensions().scrollTop;
    }
    else
      this.noscroll = false;
  }
  hideNoFound() {
    this.noFound = true;
  }
  onInputSearch(val: string){
    if (val != "")
      this.loadData(val);
    else{
      this.CouponData = [];
      this.noFound = true;
    }
  }
  loadData(val) {
    //this.RestApiURL
    let RestApiURL = GlobalVars.getApiURL() + "page=coupon&filter="+val;
    this.http.get(RestApiURL).map(res => res.json())
      .subscribe(data => {
        this.CouponData = data;
        if (this.CouponData.length == 0)
        {
          this.noFound = false;
        }
      }),
      err => {
        this.noFound = false;
        console.log("Oops!");
      }
  }
  ionViewDidLoad() {
    // this.loadData();
    console.log('ionViewDidLoad DrugPage');
  }

}
