import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Opcional, OpcionalApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public opcionalervice: OpcionalApi,
              private logger: LoggerService) {

          LoopBackConfig.setBaseURL(BASE_URL);
          LoopBackConfig.setApiVersion(API_VERSION);
              
          this.logger.info('OpcionaisListPage :: constructor'); 

          this.listarOpcionais();
  }

  public listarOpcionais(){
    this.logger.info('OpcionaisListPage :: listarOpcionais '); 

    this.opcionalervice.find().subscribe( (opcionais: Opcional[]) => {
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
