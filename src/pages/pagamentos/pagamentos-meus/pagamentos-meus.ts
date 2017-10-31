import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import {   LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";

@IonicPage()
@Component({
  selector: 'page-pagamentos-meus',
  templateUrl: 'pagamentos-meus.html',
})
export class PagamentosMeusPage {

  pagamentos: any[] = [];

  @ViewChild('pagamentoList', { read: List }) pagamentoList: List;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private logger: LoggerService) {
                
      this.logger.info('PagamentosMeusPage :: constructor');
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);       

      this.listarMeusPagamentos();          

  }

  public listarMeusPagamentos(){
       this.logger.info('PagamentosMeusPage :: listarMeusPagamentos');

  }


  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad PagamentosMeusPage');
  }

}
