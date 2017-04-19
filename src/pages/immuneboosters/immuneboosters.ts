import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Decongestants page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { CommentCompareBluePage } from '../comment-compare-blue/comment-compare-blue';

@Component({
  selector: 'page-immuneboosters',
  templateUrl: 'immuneboosters.html'
})
export class ImmuneboostersPage {

  @ViewChild('mainBody') elementView: ElementRef;
  @ViewChild(Content) content: Content;
  ShowTabs = [
    {
      title: "Ingredients",
      "ui-checkbox-on": true,
      "ui-checkbox-off": false
    },
    {
      title: "Description",
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
    }
  ];
  MyContent = {
    width: 0,
    height: 0,
    screenWidth: 0,
    screenHeight: 0,
    scrollPos: 0,
    isArrowShow: false
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
  TableTempData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, 
    public http: Http, private sanitizer: DomSanitizer, public platform: Platform) {
    this.menu = menu;
    this.initData();
  }
  showCommentCompare () {
    this.navCtrl.push(CommentCompareBluePage);
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
        this.SearchDlg.width = this.MyContent.width * 0.8;
      this.SearchDlg.maxWidth = this.MyContent.width * 0.8;
      this.SearchDlg.left = (this.MyContent.screenWidth - this.SearchDlg.width) / 2;
      this.SearchDlg.top = (this.MyContent.screenHeight - this.SearchDlg.height) / 2 + scrollPos;
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
      this.SortDlg.maxWidth = this.MyContent.width * 0.8;
      this.SortDlg.left = this.MyContent.screenWidth - this.SortDlg.width - 20;
      this.SortDlg.top = (this.MyContent.screenHeight - this.SortDlg.height) / 2 + scrollPos;
    }
    this.SortDlg.show = b;
  }
  toggleSort(tabs) {
    tabs["ui-checkbox-on"] = tabs["ui-checkbox-off"];
    tabs["ui-checkbox-off"] = !tabs["ui-checkbox-off"];
  }
  clearSearch() {
    this.searchText = "";
    this.TableTempData = this.TableData;
  }
  filterItems(searchbar) {
    var q = this.searchText;
    this.TableTempData = this.TableData;
    if (q.length == 0) {
      return;
    }
    this.TableTempData = this.TableTempData.filter((v) => {
      var found = false;
      Object.keys(v).forEach(function(key) {
        if (v[key].toLowerCase().indexOf(q.toLowerCase()) > -1)
        {
          found = true; return false;
        }
      });
      return found;
    })
  }er
  initData() {
    this.AbsoluteURL = GlobalVars.getAbsoluteURL();
    this.RestApiURL = GlobalVars.getApiURL() + "page=immuneboosters";
    this.searchText = "";
    this.TableData = [];
    this.TableTempData = [];
    this.MyContent.screenWidth = this.platform.width();
    this.MyContent.screenHeight = this.platform.height();
    this.MyContent.scrollPos = 0;
    this.MyContent.isArrowShow = false;
  }
  loadData() {
    //this.RestApiURL
    this.http.get(this.RestApiURL).map(res => res.json())
      .subscribe(data => {
        this.TableTempData = this.TableData = data;
      }),
      err => {
        console.log("Oops!");
      }
  }
  gotoTop(scrollDuration) {
    this.content.scrollToTop(scrollDuration);
  }
  getScrollPosition(event) {
    var arrow = document.getElementById('arrow_upward');
    this.MyContent.scrollPos = event.scrollTop;
    if (this.MyContent.scrollPos >= this.MyContent.screenHeight){
      this.MyContent.isArrowShow = true;
      arrow.style.display = 'block';
    }
    else{
      this.MyContent.isArrowShow = false;
      arrow.style.display = 'none';
    }
  }
  ngAfterViewInit() {
    this.content.enableScrollListener();
    this.content.ionScroll.subscribe((event) => {
      this.getScrollPosition(event);
    });
  }
  ionViewDidLoad() {
    this.loadData();
  }

}