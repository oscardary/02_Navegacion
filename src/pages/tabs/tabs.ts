import { Component } from '@angular/core';

import { PrincipalPage, AjustesPage } from "../index.pages";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;

  constructor() {
    this.tab1 = PrincipalPage;
    this.tab2 = AjustesPage;
  }

}
