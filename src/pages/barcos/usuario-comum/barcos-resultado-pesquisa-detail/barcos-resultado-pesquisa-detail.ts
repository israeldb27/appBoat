import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Barco, BarcoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";

import { BarcosSolicitarReservaPage } from '../barcos-solicitar-reserva/barcos-solicitar-reserva';


@IonicPage()
@Component({
  selector: 'page-barcos-resultado-pesquisa-detail',
  templateUrl: 'barcos-resultado-pesquisa-detail.html',
})
export class BarcosResultadoPesquisaDetailPage {

  barco: Barco;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public barcoService: BarcoApi,             
              private logger: LoggerService) {

        this.logger.info('BarcosResultadoPesquisaDetailPage :: constructor');                
        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);           
        this.barco = new Barco();        
        this.carregaDetalhesBarco();        
  } 

  public carregaDetalhesBarco(){
    this.logger.info('BarcosResultadoPesquisaDetailPage :: carregaDetalhesBarco ');
    this.barco = this.navParams.get('barco');
    this.logger.info('BarcosResultadoPesquisaDetailPage :: carregaDetalhesBarco :: barco selecionado' , this.barco);
  }

  public voltarPesquisa(){
    this.logger.info('BarcosResultadoPesquisaDetailPage :: voltarPesquisa ');
    this.navCtrl.pop();
  }

  public  solicitarReserva(){
    this.logger.info('BarcosResultadoPesquisaDetailPage :: solicitarReserva :: barco selecionado-reserva' , this.barco);
    this.navCtrl.push( BarcosSolicitarReservaPage, { barco: this.barco} );
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosResultadoPesquisaDetailPage');
  }

}
