import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Barco, BarcoApi, PlanoReservabarco, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter  } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";

import { BarcosResultadoPesquisaDetailPage } from '../barcos-resultado-pesquisa-detail/barcos-resultado-pesquisa-detail';


@IonicPage()
@Component({
  selector: 'page-barcos-resultado-pesquisa',
  templateUrl: 'barcos-resultado-pesquisa.html',
})
export class BarcosResultadoPesquisaPage {

  barcos: Barco[] = [];
  planos: PlanoReservabarco[];
  barcoRecuperado: Barco;
  quant: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public barcoService: BarcoApi,             
              private logger: LoggerService) {

      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);           
      this.logger.info('BarcosResultadoPesquisaPage :: constructor');                
                
      this.quant = 0;          
      this.barcoRecuperado = new Barco();    
      this.carregarPlanosReservaBarcos();
      this.carregaListaResultadosPesquisaBarcos();         
  }    

  public carregarPlanosReservaBarcos(){
    this.logger.info('BarcosResultadoPesquisaPage :: carregarPlanosReservaBarcos'); 
    this.planos = this.navParams.get('planosRecuperados');
    this.logger.info('BarcosResultadoPesquisaPage :: carregarPlanosReservaBarcos :: planos recuperados ', this.planos); 

  }

  public carregaListaResultadosPesquisaBarcos() {
    this.logger.info('BarcosResultadoPesquisaPage :: carregaListaResultadosPesquisaBarcos');    
    this.planos.forEach((plano) => {
        this.barcoRecuperado = this.recuperarBarcoPorPlano(plano);
        this.barcos.push(this.barcoRecuperado); 
        this.quant++;
    });
  }

  public recuperarBarcoPorPlano(p: PlanoReservabarco): Barco {
    let barcoId = p.barcoId;
    let filtro: LoopBackFilter = {
      "where": {
        "and": [
          {
            "id": barcoId       
          }
        ]      
      }
    };

    this.barcoService.findOne(filtro).subscribe((barco: Barco) => {
      this.logger.error('BarcosResultadoPesquisaPage :: recuperarBarcoPorPlano :: barcoService.findOne()  :: ', barco);
      return barco;
    }, (error: any) => {
      this.logger.error('BarcosResultadoPesquisaPage :: recuperarBarcoPorPlano :: barcoService.findOne() :: error :: ', error);
    });

    return null;
  }
  
  public visualizarDetalhesBarco(barco){
    this.logger.info('BarcosResultadoPesquisaPage :: visualizarDetalhesBarco :: barco selecionado ', barco);    
    this.navCtrl.push(BarcosResultadoPesquisaDetailPage, { barco: barco })

  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosResultadoPesquisaPage');
  }

}
