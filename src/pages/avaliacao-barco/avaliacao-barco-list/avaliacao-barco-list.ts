import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Avaliacaobarco, AvaliacaobarcoApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";


@IonicPage()
@Component({
  selector: 'page-avaliacao-barco-list',
  templateUrl: 'avaliacao-barco-list.html',
})
export class AvaliacaoBarcoListPage {

 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public avaliacaobarcoService: AvaliacaobarcoApi,
              private logger: LoggerService) {

        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);
            
        this.logger.info('AvaliacaoBarcoListPage :: constructor'); 

  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad AvaliacaoBarcoListPage');
  }

}
