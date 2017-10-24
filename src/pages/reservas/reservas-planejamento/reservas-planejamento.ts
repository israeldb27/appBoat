import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservaBarco, ReservaBarcoApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";

@IonicPage()
@Component({
  selector: 'page-reservas-planejamento',
  templateUrl: 'reservas-planejamento.html',
})
export class ReservasPlanejamentoPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public reservaBarcoService: ReservaBarcoApi,
              private logger: LoggerService) {

      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);
      
      this.listarReservasPlanejamento();
  }


  public listarReservasPlanejamento() {
    
     this.logger.info('ReservasListPage :: listarReservasPlanejamento');
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad ReservasPlanejamentoPage');
  }

}
