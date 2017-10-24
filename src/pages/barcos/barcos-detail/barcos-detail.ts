import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Barco, BarcoApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";

@IonicPage()
@Component({
  selector: 'page-barcos-detail',
  templateUrl: 'barcos-detail.html',
})
export class BarcosDetailPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public barcoService: BarcoApi,
              private logger: LoggerService) {

        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);
                
        this.logger.info('BarcosDetailPage :: constructor');         

        this.visualizarDetalhesBarco();
  }

  public visualizarDetalhesBarco(){

    this.logger.info('BarcosDetailPage :: visualizarDetalhesBarco');  

  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosDetailPage');
  }

}
