import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";


@IonicPage()
@Component({
  selector: 'page-pagamentos-detail',
  templateUrl: 'pagamentos-detail.html',
})
export class PagamentosDetailPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private logger: LoggerService) {

      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION); 

      this.visualizaDetalhesPagamento();
  }

  public visualizaDetalhesPagamento() {

    this.logger.info('PagamentosDetailPage ;: visualizaDetalhesPagamento');
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad PagamentosDetailPage');
  }

}
