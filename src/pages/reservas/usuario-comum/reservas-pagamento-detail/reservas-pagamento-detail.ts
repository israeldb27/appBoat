import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Ordempagamento, OrdempagamentoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";

import { ReservasPagarPage } from '../reservas-pagar/reservas-pagar';


@IonicPage()
@Component({
  selector: 'page-reservas-pagamento-detail',
  templateUrl: 'reservas-pagamento-detail.html',
})
export class ReservasPagamentoDetailPage {

  /**
   *    Descrição: Esta classe permite visualizar os detalhes de uma Ordem de Pagamento com status 'solicitada'
   */

  ordem: Ordempagamento; 

  constructor(public navCtrl: NavController, 
              private logger: LoggerService,
              public navParams: NavParams) {

      this.logger.info('ReservasPagamentoDetailPage :: constructor');       
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);
      this.carregarOrdemSelecionada();
      this.ordem = new Ordempagamento();
  }

  public carregarOrdemSelecionada(){
    this.logger.info('ReservasPagamentoDetailPage :: carregarOrdemSelecionada');       
    this.ordem = this.navParams.get('ordemPagamento');
  }

  public cancelarPagamento(){
    this.logger.info('ReservasPagamentoDetailPage :: cancelarPagamento');       
    this.navCtrl.pop();
  }

  public realizarPagamento(){
    this.logger.info('ReservasPagamentoDetailPage :: realizarPagamento :: ordem pagto selecionado ', this.ordem );
    this.navCtrl.push(ReservasPagarPage, {ordem: this.ordem} );
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad ReservasPagamentoDetailPage');
  }

}
