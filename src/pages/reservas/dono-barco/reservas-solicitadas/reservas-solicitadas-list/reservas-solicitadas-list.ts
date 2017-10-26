import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservaBarco, ReservaBarcoApi, LoggerService } from "../../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../../app/shared/constantes";

import { ReservasSolicitadasDetailPage } from "../reservas-solicitadas-detail/reservas-solicitadas-detail";

/**
 * Descricao:  Tem como objetivo permitir o dono do barco listar as solicitacoes de 
 *             reservas para alguns de seus barcos 
 * 
 */


@IonicPage()
@Component({
  selector: 'page-reservas-solicitadas-list',
  templateUrl: 'reservas-solicitadas-list.html',
})
export class ReservasSolicitadasListPage {

  reservaBarcos: ReservaBarco[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public reservaBarcoService: ReservaBarcoApi,
              private logger: LoggerService) {
              
        this.logger.info('ReservasSolicitadasListPage :: constructor');  
        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);

        this.listarReservasSolicitadas();

    }

    public listarReservasSolicitadas() {

      this.logger.info('ReservasSolicitadasListPage :: listarReservasSolicitadas');

      this.reservaBarcoService.find().subscribe( (reservaBarcos: ReservaBarco[]) => {
        this.reservaBarcos = reservaBarcos;
      }, (error: any) => {
        this.logger.error('ReservasSolicitadasListPage :: listarReservasSolicitadas :: reservaBarcoService.find :: error :: ', error);
      });
    }

    public visualizarDetalhesReservaSolicitada(reservaBarco){
      this.logger.info('ReservasSolicitadasListPage :: visualizarDetalhesReservaSolicitada', reservaBarco); 
      this.navCtrl.push(ReservasSolicitadasDetailPage, { reservaBarco: reservaBarco });
  
    }



    ionViewDidLoad() {
      this.logger.info('ionViewDidLoad ReservasSolicitadasListPage');
    }


}
