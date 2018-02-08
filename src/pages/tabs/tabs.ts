import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

//import { MapPage } from '../map/map';
//import { HomePage } from '../home/home';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'MapPage';
  tab2Root = 'HomePage';

  constructor() {

  }
}
