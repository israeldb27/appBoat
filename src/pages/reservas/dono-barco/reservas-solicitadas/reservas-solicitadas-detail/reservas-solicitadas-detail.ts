import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservaBarco, ReservaBarcoApi, LoggerService } from "../../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../../app/shared/constantes";

/**
 * Descricao; Permite ao dono do barco visualizar os detalhes das informações 
 *            de uma solicitacação de reserva de barco feita por algum outro usuario da plataforma
 */

@IonicPage()
@Component({
  selector: 'page-reservas-solicitadas-detail',
  templateUrl: 'reservas-solicitadas-detail.html',
})
export class ReservasSolicitadasDetailPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public reservaBarcoService: ReservaBarcoApi,
              private logger: LoggerService) {

              LoopBackConfig.setBaseURL(BASE_URL);
              LoopBackConfig.setApiVersion(API_VERSION);

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservasSolicitadasDetailPage');
  }

}
