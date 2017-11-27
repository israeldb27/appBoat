import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Ordempagamento, OrdempagamentoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";

import { ReservasPagamentoDetailPage } from '../reservas-pagamento-detail/reservas-pagamento-detail';

@IonicPage()
@Component({
  selector: 'page-reservas-pagamento-list',
  templateUrl: 'reservas-pagamento-list.html',
})
export class ReservasPagamentoListPage {

  /**
 * Descrição: Esta classe irá listar as Ordens de Pagamento recentes de um cliente, referentes a a solicitações de reservas.
 *            Somente lista de ordens de pagamento com status "solicitado"
 */


ordens: Ordempagamento[];

  constructor(public navCtrl: NavController, 
              private logger: LoggerService,
              private ordempagamentoService: OrdempagamentoApi,
              public navParams: NavParams) {
        
      this.logger.info('ReservasPagamentoListPage :: constructor');
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);
      this.carregarListaOrdensPagamento();
  }

  public visualizarDetalhesOrdem(ordemSelecionada: Ordempagamento){
    this.logger.info('ReservasPagamentoListPage :: visualizarDetalhesOrdem :: ', ordemSelecionada );
    this.navCtrl.push(ReservasPagamentoDetailPage, {ordemPagamento: ordemSelecionada});
  }

  public carregarListaOrdensPagamento(){
    this.logger.info('ReservasPagamentoListPage :: carregarListaOrdensPagamento');
    let idCliente: any;
    idCliente = localStorage['usuarioSessao'];

    this.logger.info('ReservasPagamentoListPage :: carregarListaOrdensPagamento :: id cliente ', idCliente);
    
    // Mudar o campo idUsuarioSolicitante para idCliente e tentar incluir ainda o idDonobarco ou de repente usar o objeto barco para recuperar o ID do dono
    let filtro: LoopBackFilter = {
      "where": {
        "and": [
          {
            "idUsuarioSolicitante": idCliente              
          },
          {
            "status": "solicitado"
          }
        ]      
      }
    };

    this.ordempagamentoService.find(filtro).subscribe( (ordensPagto: Ordempagamento[]) => {
      this.ordens = ordensPagto;
      this.logger.info(' ReservasPagamentoListPage :: carregarListaOrdensPagamento :: ordens :: ', this.ordens);
    }, (error: any) => {
      this.logger.error('ReservasPagamentoListPage :: carregarListaOrdensPagamento :: ordempagamentoService.find :: error :: ', error);
    });

  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad ReservasPagamentoListPage');
  }

}
