import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

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
  AbsoluteURL: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.menu = menu;
    this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  showCommentCompare () {
    this.navCtrl.push(CommentComparePage);
  }
  showMenu() {
    this.menu.open();
  }
  ionViewDidLoad() {
    
  }

}

