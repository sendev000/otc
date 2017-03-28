import { Component } from '@angular/core';

import { PopoverController, MenuController } from 'ionic-angular';


import { GlobalVars } from '../providers/globalvars';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  AbsoluteURL: string;
  constructor(public popoverCtrl: PopoverController, public menu: MenuController) {
  	this.menu = menu;
  	this.AbsoluteURL = GlobalVars.getAbsoluteURL();
  }
  showMenu() {
  	this.menu.open();
  }
  showPage(page: string) {
  	if (page.length > 0)
    {
      console.log(page);
    }
  }
  presentPopover(event: Event) {
  }
}
