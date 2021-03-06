import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";

@IonicPage()
@Component({
  selector: 'page-pagamentos-list',
  templateUrl: 'pagamentos-list.html',
})
export class PagamentosListPage {

  pagamentos: any[] = [];

  @ViewChild('pagamentoList', { read: List }) pagamentoList: List;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private logger: LoggerService) {

      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);          

      this.listarPagamentos();          
  }

  public listarPagamentos(){

     this.logger.info('PagamentosListPage :: listarPagamentos '); 
   
  }


  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad PagamentosListPage');
  }

}
