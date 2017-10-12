import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = HomePage;

  constructor() {

  }
}
