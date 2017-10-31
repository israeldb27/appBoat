import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservaBarco, ReservaBarcoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";

import { ReservasDetailPage } from "../reservas-detail/reservas-detail";

@IonicPage()
@Component({
  selector: 'page-reservas-list',
  templateUrl: 'reservas-list.html',
})
export class ReservasListPage {

  reservaBarcos: ReservaBarco[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public reservaBarcoService: ReservaBarcoApi,
              private logger: LoggerService) {
      
      this.logger.info('ReservasListPage :: constructor');
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);

      this.listarReservas();

  }

  public listarReservas() {

    this.logger.info('ReservasListPage :: listarReservas');
    this.reservaBarcoService.find().subscribe( (reservaBarcos: ReservaBarco[]) => {
      this.reservaBarcos = reservaBarcos;
    }, (error: any) => {
      this.logger.error('ReservasListPage :: listarReservas :: reservaBarcoService.find :: error :: ', error);
    });
  }

  public visualizarDetalhesReservaBarco(reservaBarco){
    this.logger.info('ReservasListPage :: visualizarDetalhesReservaBarco', reservaBarco); 
    this.navCtrl.push(ReservasDetailPage, { reservaBarco: reservaBarco });
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad ReservasListPage');
  }

}
