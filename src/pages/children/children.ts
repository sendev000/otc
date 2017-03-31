import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Children page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { CommentLoginPage } from '../comment-login/comment-login';

@Component({
  selector: 'page-children',
  templateUrl: 'children.html'
})
export class ChildrenPage {
  currentPage: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.currentPage = 0;
  }
  showMenu() {
  	this.menu.open();
  }
  transitPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  gotoLogin() {
    this.navCtrl.push(CommentLoginPage);
  }
  ionViewDidLoad() {
    
  }

}
