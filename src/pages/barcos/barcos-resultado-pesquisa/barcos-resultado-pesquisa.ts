import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Barco, BarcoApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";

import { BarcosResultadoPesquisaDetailPage } from '../barcos-resultado-pesquisa-detail/barcos-resultado-pesquisa-detail';


@IonicPage()
@Component({
  selector: 'page-barcos-resultado-pesquisa',
  templateUrl: 'barcos-resultado-pesquisa.html',
})
export class BarcosResultadoPesquisaPage {

  barcos: Barco[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public barcoService: BarcoApi,             
              private logger: LoggerService) {

      this.logger.info('BarcosResultadoPesquisaPage :: constructor');                
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);           
      
      this.carregaListaResultadosPesquisaBarcos();        
  }  

  public carregaListaResultadosPesquisaBarcos() {
    this.logger.info('BarcosResultadoPesquisaPage :: carregaListaResultadosPesquisaBarcos');    
    this.barcos = this.navParams.get('barcos');
    this.logger.info('BarcosResultadoPesquisaPage :: carregaListaResultadosPesquisaBarcos ;; resultado-pesquisa ', this.barcos);
  }
  
  public visualizarDetalhesBarco(barco){
    this.logger.info('BarcosResultadoPesquisaPage :: visualizarDetalhesBarco :: barco selecionado ', barco);    
    this.navCtrl.push(BarcosResultadoPesquisaDetailPage, { barco: barco })

  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosResultadoPesquisaPage');
  }

}
