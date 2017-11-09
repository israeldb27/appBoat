import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Opcional, OpcionalApi, Barco, LoggerService } from "../../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../../app/shared/constantes";

import { OpcionaisCreatePage } from '../opcionais-create/opcionais-create';
import { OpcionaisDetailPage } from '../opcionais-detail/opcionais-detail';

/**
 * Descricao: Permite ao dono do barco listar os opcionais que existem 
 *            em um determinado barco selecionado
 * 
 */

@IonicPage()
@Component({
  selector: 'page-opcionais-list',
  templateUrl: 'opcionais-list.html',
})
export class OpcionaisListPage {

  opcionais: Opcional[];
  public barco: Barco;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public opcionalervice: OpcionalApi,
              private logger: LoggerService) {

          LoopBackConfig.setBaseURL(BASE_URL);
          LoopBackConfig.setApiVersion(API_VERSION);
              
          this.logger.info('OpcionaisListPage :: constructor'); 
          this.carregaDetalhesBarco();      
          this.listarOpcionais();
          
  }

  public carregaDetalhesBarco() {
    this.logger.info('OpcionaisListPage :: carregaDetalhesBarco'); 
    this.barco = this.navParams.get('barco');
  }

  public listarOpcionais(){
    this.logger.info('OpcionaisListPage :: listarOpcionais '); 

    let barcoId: any;
    barcoId = localStorage['usuarioSessao'];
    this.logger.info(' OpcionaisListPage :: listarOpcionais :: barco selecionado ', this.barco );
  
    let filtro: LoopBackFilter = {
      "where": {
        "and": [
          {
            "barcoId": barcoId              
          }
        ]      
      }
    };

    this.opcionalervice.find(filtro).subscribe( (opcionais: Opcional[]) => {
      this.opcionais = opcionais;
      this.logger.info('OpcionaisListPage :: listarOpcionais :: opcionalervice.find :: sucesso :: ', opcionais);
    }, (error: any) => {
      this.logger.error('OpcionaisListPage :: listarOpcionais :: opcionalervice.find :: error :: ', error);
    });
  }

  public visualizarDetalhesOpcional(opcional){
    this.logger.info('OpcionaisListPage :: visualizarDetalhesOpcional :: selecionado ', opcional); 
    this.navCtrl.push(OpcionaisDetailPage, { opcional: opcional });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcionaisListPage');
  }

}
