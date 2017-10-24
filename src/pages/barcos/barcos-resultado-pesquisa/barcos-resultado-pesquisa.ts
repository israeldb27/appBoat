import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConferenceData } from '../../../providers/conference-data';

@IonicPage()
@Component({
  selector: 'page-barcos-resultado-pesquisa',
  templateUrl: 'barcos-resultado-pesquisa.html',
})
export class BarcosResultadoPesquisaPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public confData: ConferenceData) {

      console.log('BarcosResultadoPesquisaPage :: constructor');        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcosResultadoPesquisaPage');
  }

}
