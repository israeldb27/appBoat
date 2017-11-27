import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Ordempagamento, OrdempagamentoApi, FormaPagamentoUsuario, FormaPagamentoUsuarioApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-forma-pagamento-cliente-detail',
  templateUrl: 'forma-pagamento-cliente-detail.html',
})
export class FormaPagamentoClienteDetailPage {

  public podeEditar: boolean;

  formaPagamentoCliente: FormaPagamentoUsuario;
  formaPagamentoClienteTemporario: FormaPagamentoUsuario;
  formaPagamentoUsuarioForm: FormGroup;

  mensagemRetorno: any;

  public id: AbstractControl;
  public banco: AbstractControl;
  public numeroCartao: AbstractControl;
  public agencia: AbstractControl;
  public conta: AbstractControl;

  constructor(public navCtrl: NavController, 
              private formaPagamentoService: FormaPagamentoUsuarioApi,
              private ordemPagamentoService: OrdempagamentoApi,
              private logger: LoggerService,
              public formBuilder: FormBuilder,
              public navParams: NavParams) {

        this.logger.info('FormaPagamentoClienteDetailPage :: constructor');       
        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION); 

        this.formaPagamentoCliente = new FormaPagamentoUsuario();
        this.formaPagamentoClienteTemporario = new FormaPagamentoUsuario();
        this.podeEditar = false;   
        
        this.carregarFormaPagamentoCliente();

        this.formaPagamentoUsuarioForm = formBuilder.group({
          banco: ["", Validators.required],
          numeroCartao: ["", Validators.required],
          agencia: ["", Validators.required],
          conta: ["", Validators.required]
        });
    
        this.limparForm();
  }

  public carregarFormaPagamentoCliente(){
    this.logger.info('FormaPagamentoClienteDetailPage :: carregarFormaPagamentoCliente');
    let idUsuarioSessao = localStorage['usuarioSessao'];
    this.logger.info(' FormaPagamentoClienteDetailPage :: carregarFormaPagamentoCliente :: usuarioSessao :: ', idUsuarioSessao);

    // criar campo idUsuario na tabela FormaPagamentoUsuario

    let filtro: LoopBackFilter = {
      "where": {
        "and": [
          {
            "idUsuario": idUsuarioSessao              
          }
        ]      
      }
    };

    this.formaPagamentoService.find(filtro).subscribe((formasPagamentos: FormaPagamentoUsuario[]) => { 
      this.logger.info('FormaPagamentoClienteDetailPage :: carregarFormaPagamentoCliente ::formaPagamentoService.find :: sucesso :: ', formasPagamentos);
      if ( formasPagamentos.length == 0 ){
          this.mensagemRetorno = 'Você ainda não adicionou nenhuma forma de pagamento';
      } 
      if ( formasPagamentos.length == 1 ){            
        this.formaPagamentoCliente = formasPagamentos[0];
        this.podeEditar = false;
      }         
      
    }, (error: any) => {
      this.logger.error('FormaPagamentoClienteDetailPage :: carregarFormaPagamentoCliente ::formaPagamentoService.find  :: error :: ', error);
    });

  }

  public salvarFormaPagamentoCliente(): void{
    this.logger.info('FormaPagamentoClienteDetailPage :: salvarFormaPagamentoCliente');

    this.logger.info('FormaPagamentoClienteDetailPage :: salvarFormaPagamentoCliente'); 
    
    if ( this.formaPagamentoUsuarioForm.valid ){
      this.logger.info('FormaPagamentoClienteDetailPage :: salvarFormaPagamentoCliente :: form validado OK');
      let where = {
        id: this.formaPagamentoCliente.id
      };      
      
      this.formaPagamentoService.upsertWithWhere(where, this.formaPagamentoCliente).subscribe( sucesso => {
        this.logger.info('FormaPagamentoClienteDetailPage :: salvarFormaPagamentoCliente :: formaPagamentoService.upsertWithWhere() :: sucesso :: ', sucesso);
        //this.navCtrl.push(GruposListPage);        
      }, (error: any) => {
        this.logger.error('FormaPagamentoClienteDetailPage :: salvarFormaPagamentoCliente :: formaPagamentoService.upsertWithWhere() :: error :: ', error);
      });
    }  
    else {
      this.logger.info('FormaPagamentoClienteDetailPage :: salvarFormaPagamentoCliente :: form invalido');
    } 
  }


  public goEditarFormaPagamento(habilitaEditar: boolean){
    this.logger.info('FormaPagamentoClienteDetailPage :: goEditarFormaPagamento');
    this.podeEditar = habilitaEditar; 
  }


  public cancelarEditarFormaPagamento(desabilitaEditar: boolean){
    this.logger.info('FormaPagamentoClienteDetailPage :: cancelarEditarFormaPagamento' );
    this.podeEditar = desabilitaEditar;
    this.formaPagamentoCliente = Object.assign({}, this.formaPagamentoClienteTemporario);
  }

  public limparForm(){
    this.logger.info('FormaPagamentoClienteDetailPage :: limparForm');

    this.id = new FormControl(null, []);
    this.banco = new FormControl('', Validators.required);   
    this.numeroCartao = new FormControl('', Validators.required);
    this.agencia = new FormControl('', Validators.required);
    this.conta = new FormControl('', Validators.required);

    this.formaPagamentoUsuarioForm = new FormGroup({
      id: this.id,
      banco: this.banco,
      numeroCartao: this.numeroCartao, 
      agencia: this.agencia, 
      conta: this.conta
    });
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad FormaPagamentoClienteDetailPage');
    this.formaPagamentoClienteTemporario = Object.assign({}, this.formaPagamentoCliente);
  }

}
