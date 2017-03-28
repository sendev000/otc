import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Children page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-children',
  templateUrl: 'children.html'
})
export class ChildrenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
  }
  showMenu() {
  	this.menu.open();
  }
  ionViewDidLoad() {
    
  }

}
