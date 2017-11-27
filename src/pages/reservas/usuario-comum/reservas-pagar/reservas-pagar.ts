import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Ordempagamento, OrdempagamentoApi, FormaPagamentoUsuario, FormaPagamentoUsuarioApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";

@IonicPage()
@Component({
  selector: 'page-reservas-pagar',
  templateUrl: 'reservas-pagar.html',
})
export class ReservasPagarPage {

  /**
   *  Descrição: Esta classe permite ao Cliente realizar propriamente o Pagamento da reserva 
   * 
   */

  ordem: Ordempagamento; 
  formaPagamentoCliente: FormaPagamentoUsuario;
  mensagemRetorno: any;
  
  constructor(public navCtrl: NavController, 
              private formaPagamentoService: FormaPagamentoUsuarioApi,
              private ordemPagamentoService: OrdempagamentoApi,
              private logger: LoggerService,
              public navParams: NavParams) {

        this.logger.info('ReservasPagarPage :: constructor');       
        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);   
        this.ordem = new Ordempagamento();
        this.formaPagamentoCliente = new FormaPagamentoUsuario();
        this.carregarOrdemSelecionada();        
        this.carregarFormaPagamentoCliente();
  }

  public carregarFormaPagamentoCliente(){
    this.logger.info('ReservasPagarPage :: carregarFormaPagamentoCliente');
    let idUsuarioSessao: any;
    idUsuarioSessao = localStorage['usuarioSessao'];
    
    // criar o cmapo idUsuario na tabela FormaPagamentoUsuario
    let filtro: LoopBackFilter = {
      "where": {
        "and": [
          {
            "idUsuario": idUsuarioSessao              
          }
        ]      
      }
    };

    this.logger.info('ReservasPagarPage :: carregarFormaPagamentoCliente :: filtros ', filtro);
    this.formaPagamentoService.findOne(filtro).subscribe((formaPagamento: FormaPagamentoUsuario) => { 
      this.logger.info('ReservasPagarPage :: carregarFormaPagamentoCliente ::formaPagamentoService.findOne :: sucesso :: ', formaPagamento);
      this.formaPagamentoCliente = formaPagamento;
    }, (error: any) => {
      this.logger.error('ReservasPagarPage :: carregarFormaPagamentoCliente ::formaPagamentoService.findOne :: error :: ', error);
    });

  }

  public confirmarPagamento(){
    this.logger.info('ReservasPagarPage :: confirmarPagamento');
    this.ordem.status = 'pago';
    this.ordem.dataPagamento = new Date();
    let where = {
      id: this.ordem.id
    }; 

    this.ordemPagamentoService.upsertWithWhere(where, this.ordem).subscribe( sucesso => {
      this.logger.info('ReservasPagarPage :: confirmarPagamento :: ordemPagamentoService.upsertWithWhere() :: sucesso :: ', sucesso);
      this.mensagemRetorno = 'Pagamento realizado com sucesso';
    }, (error: any) => {
      this.logger.error('ReservasPagarPage :: confirmarPagamento :: ordemPagamentoService.upsertWithWhere() :: error :: ', error);        
    });

  }

  public carregarOrdemSelecionada(){
    this.logger.info('ReservasPagarPage :: carregarOrdemSelecionada');
    this.ordem = this.navParams.get('ordemPagamento');
  }

  public cancelarPagamento(){
    this.logger.info('ReservasPagarPage :: cancelarPagamento');
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad ReservasPagarPage');
  }

}
