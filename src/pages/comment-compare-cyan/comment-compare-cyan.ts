import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the CommentCompare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { CommentLoginPage } from '../comment-login/comment-login';

@Component({
  selector: 'page-comment-compare-cyan',
  templateUrl: 'comment-compare-cyan.html'
})
export class CommentCompareCyanPage {
  reasonShown: boolean;
  AbsoluteURL: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
    this.reasonShown = false;
  }
  showMenu() {
  	this.menu.open();
  }
  showComment() {
  	this.navCtrl.push(CommentLoginPage);
  }
  toggleReason() {
      this.reasonShown = !this.reasonShown;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentComparePage');
  }

}
