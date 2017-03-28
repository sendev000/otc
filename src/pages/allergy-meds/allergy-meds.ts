import { Component, ElementRef, ViewChild} from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AllergyMeds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { CommentComparePage } from '../comment-compare/comment-compare';

@Component({
  selector: 'page-allergy-meds',
  templateUrl: 'allergy-meds.html'
})
export class AllergyMedsPage {
  @ViewChild('mainBody') elementView: ElementRef;
  @ViewChild(Content) content: Content;
  ShowTabs = [
    {
      title: "Description",
      "ui-checkbox-on": true,
      "ui-checkbox-off": false
    },
    {
      title: "How supplied",
      "ui-checkbox-on": true,
      "ui-checkbox-off": false
    },
    {
      title: "Onset",
      "ui-checkbox-on": false,
      "ui-checkbox-off": true
    },
    {
      title: "Duration",
      "ui-checkbox-on": false,
      "ui-checkbox-off": true
    },
    {
      title: "Pros",
      "ui-checkbox-on": false,
      "ui-checkbox-off": true
    },
    {
      title: "Cons",
      "ui-checkbox-on": false,
      "ui-checkbox-off": true
    },
    {
      title: "FYI",
      "ui-checkbox-on": false,
      "ui-checkbox-off": true
    },
    {
      title: "User Votes",
      "ui-checkbox-on": false,
      "ui-checkbox-off": true
    },
    {
      title: "Avg. Cost",
      "ui-checkbox-on": false,
      "ui-checkbox-off": true
    },
    {
      title: "Brand Names",
      "ui-checkbox-on": false,
      "ui-checkbox-off": true
    }
  ];
  MyContent = {
    width: 0,
    height: 0
  }
  SearchDlg = {
    show: false,
    height: 100,
    width: 0,
    maxWidth: 0,
    left: 0,
    top: 0
  }
  SortDlg = {
    show: false,
    height: 437,
    width: 157,
    maxWidth: 0,
    left: 0,
    top: 0
  }
  searchText: string;
  AbsoluteURL: string;
  RestApiURL: string;
  TableData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public http: Http, private sanitizer: DomSanitizer, public platform: Platform) {
    this.menu = menu;
    this.AbsoluteURL = GlobalVars.getAbsoluteURL();
    this.RestApiURL = GlobalVars.getApiURL() + "page=allergy_meds";
    this.searchText = "";
    this.TableData = [];
  }
  showCommentCompare () {
    this.navCtrl.push(CommentComparePage);
  }
  showMenu() {
    this.menu.open();
  }
  toggleSearchDlg(b: boolean) {
    if (b)
    {
      var scrollPos = this.content.getContentDimensions().scrollTop;
      if (this.MyContent.height == 0)
      {
        this.MyContent.height = this.elementView.nativeElement.offsetHeight + 56;
        this.MyContent.width = this.elementView.nativeElement.offsetWidth;
      }
      if (this.elementView.nativeElement.offsetWidth > 500)
        this.SearchDlg.width = 400;
      else
        this.SearchDlg.width = this.elementView.nativeElement.offsetWidth * 0.8;
      this.SearchDlg.maxWidth = this.elementView.nativeElement.offsetWidth * 0.8;
      this.SearchDlg.left = (this.platform.width() - this.SearchDlg.width) / 2;
      this.SearchDlg.top = (this.platform.height() - this.SearchDlg.height) / 2 + scrollPos;
    }
    this.SearchDlg.show = b;
  }
  toggleSortDlg(b: boolean) {
    if (b)
    {
      var scrollPos = this.content.getContentDimensions().scrollTop;
      if (this.MyContent.height == 0)
      {
        this.MyContent.height = this.elementView.nativeElement.offsetHeight + 56;
        this.MyContent.width = this.elementView.nativeElement.offsetWidth;
      }
      this.SortDlg.maxWidth = this.elementView.nativeElement.offsetWidth * 0.8;
      this.SortDlg.left = this.platform.width() - this.SortDlg.width - 20;
      this.SortDlg.top = (this.platform.height()- this.SortDlg.height) / 2 + scrollPos;
    }
    this.SortDlg.show = b;
  }
  toggleSort(tabs) {
    tabs["ui-checkbox-on"] = tabs["ui-checkbox-off"];
    tabs["ui-checkbox-off"] = !tabs["ui-checkbox-off"];
  }
  clearSearch() {
    this.searchText = "";
  }
  loadData() {
    //this.RestApiURL
    this.http.get(this.RestApiURL).map(res => res.json())
      .subscribe(data => {
        this.TableData = data;
      }),
      err => {
        console.log("Oops!");
      }
  }
  ionViewDidLoad() {
    this.loadData();
  }

}

