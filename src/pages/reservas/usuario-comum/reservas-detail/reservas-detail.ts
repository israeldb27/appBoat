import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservaBarco, ReservaBarcoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";

@IonicPage()
@Component({
  selector: 'page-reservas-detail',
  templateUrl: 'reservas-detail.html',
})
export class ReservasDetailPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public reservaBarcoService: ReservaBarcoApi,
              private logger: LoggerService) {

      this.logger.info('ReservasDetailPage :: constructor');          
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);


     this.visualizarDetalhesReserva();           
  }


  public visualizarDetalhesReserva(){

    this.logger.info('ReservasDetailPage :: visualizarDetalhesReserva');
    
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad ReservasDetailPage');
  }

}
