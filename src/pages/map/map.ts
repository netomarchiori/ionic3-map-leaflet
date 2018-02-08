import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import L from "leaflet";

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    var map = L.map('map',{
      center: [-23.5874113,-46.6598223],
      zoom: 13
    });

    L.tileLayer('assets/maps/{z}/{x}/{y}.png', {
      minZoom: 13,
      maxZoom: 20
    }).addTo(map);

  }

}
