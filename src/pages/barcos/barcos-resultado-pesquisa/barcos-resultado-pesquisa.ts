import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";

@IonicPage()
@Component({
  selector: 'page-barcos-resultado-pesquisa',
  templateUrl: 'barcos-resultado-pesquisa.html',
})
export class BarcosResultadoPesquisaPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,              
              private logger: LoggerService) {

      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);           

      this.logger.info('BarcosResultadoPesquisaPage :: constructor');        
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosResultadoPesquisaPage');
  }

}
