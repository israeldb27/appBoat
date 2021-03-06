import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Ordempagamento, OrdempagamentoApi, FormaPagamentoDonoBarco, FormaPagamentoDonoBarcoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-forma-pagamento-dono-barco-detail',
  templateUrl: 'forma-pagamento-dono-barco-detail.html',
})
export class FormaPagamentoDonoBarcoDetailPage {

     public podeEditar: boolean;
     public submitted: boolean;
  
    formaPagamentoDonoBarco: FormaPagamentoDonoBarco;
    formaPagamentoDonoBarcoTemporario: FormaPagamentoDonoBarco;
    formaPagamentoDonoBarcoForm: FormGroup;
  
    msgErro: any;
    msgSucesso: any;
  
    public id: AbstractControl;
    public banco: AbstractControl;
    public numeroCartao: AbstractControl;
    public agencia: AbstractControl;
    public conta: AbstractControl;
  
    constructor(public navCtrl: NavController, 
                private formaPagamentoService: FormaPagamentoDonoBarcoApi,
                private ordemPagamentoService: OrdempagamentoApi,
                private logger: LoggerService,
                public formBuilder: FormBuilder,
                public navParams: NavParams) {
  
          this.logger.info('FormaPagamentoDonoBarcoDetailPage :: constructor');       
          LoopBackConfig.setBaseURL(BASE_URL);
          LoopBackConfig.setApiVersion(API_VERSION); 
  
          this.formaPagamentoDonoBarco = new FormaPagamentoDonoBarco();
          this.formaPagamentoDonoBarcoTemporario = new FormaPagamentoDonoBarco();
          this.podeEditar = false;  
          this.submitted = false; 
          
          this.carregarFormaPagamentoDonoBarco();
  
          this.formaPagamentoDonoBarcoForm = formBuilder.group({
            banco: ["", Validators.required],
            numeroCartao: ["", Validators.required],
            agencia: ["", Validators.required],
            conta: ["", Validators.required]
          });
      
          this.limparForm();
    }
  
    public carregarFormaPagamentoDonoBarco(){
      let idUsuarioSessao = localStorage['usuarioSessao'];
      this.logger.info(' FormaPagamentoDonoBarcoDetailPage :: carregarFormaPagamentoDonoBarco :: usuarioSessao :: ', idUsuarioSessao);
  
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
  
      this.formaPagamentoService.find(filtro).subscribe((formasPagamentos: FormaPagamentoDonoBarco[]) => { 
        this.logger.info('FormaPagamentoDonoBarcoDetailPage :: carregarFormaPagamentoDonoBarco ::formaPagamentoService.find :: sucesso :: ', formasPagamentos);
        if ( formasPagamentos.length == 0 ){
            this.logger.info('FormaPagamentoDonoBarcoDetailPage :: carregarFormaPagamentoDonoBarco :: nenhuma forma pagamento cadastrado ');
            this.msgErro = 'Você ainda não adicionou nenhuma forma de pagamento';
            this.msgSucesso = '';
        } 
        if ( formasPagamentos.length == 1 ){            
          this.formaPagamentoDonoBarco = formasPagamentos[0];
          this.podeEditar = false;
          this.msgSucesso = '';
          this.msgErro = '';
        }     
      }, (error: any) => {
        this.logger.error('FormaPagamentoDonoBarcoDetailPage :: carregarFormaPagamentoDonoBarco ::formaPagamentoService.find  :: error :: ', error);
      });
  
    }
  
    public salvarFormaPagamentoDonoBarco(): void{
      this.logger.info('FormaPagamentoDonoBarcoDetailPage :: salvarFormaPagamentoDonoBarco');
      this.submitted = true;
      if ( this.formaPagamentoDonoBarcoForm.valid ){
        this.logger.info('FormaPagamentoDonoBarcoDetailPage :: salvarFormaPagamentoDonoBarco :: form validado OK');
        
        let where = {
          id: this.formaPagamentoDonoBarco.id
        };  
        let idUsuarioSessao = localStorage['usuarioSessao'];
        this.formaPagamentoDonoBarco.dataCadastro = new Date();
        this.formaPagamentoDonoBarco.idDonoBarco = idUsuarioSessao;
        this.formaPagamentoDonoBarco.status = 'criado';
        this.formaPagamentoService.upsertWithWhere(where, this.formaPagamentoDonoBarco).subscribe( sucesso => {
          this.logger.info('FormaPagamentoDonoBarcoDetailPage :: salvarFormaPagamentoDonoBarco :: formaPagamentoService.upsertWithWhere() :: sucesso :: ', sucesso);
          this.podeEditar = false;  
          this.msgErro = '';     
          this.msgSucesso = 'Informações salvas com sucesso';
        }, (error: any) => {
          this.logger.error('FormaPagamentoDonoBarcoDetailPage :: salvarFormaPagamentoDonoBarco :: formaPagamentoService.upsertWithWhere() :: error :: ', error);
        });
      }  
      else {
        this.logger.info('FormaPagamentoDonoBarcoDetailPage :: salvarFormaPagamentoDonoBarco :: form invalido');
      } 
    }
  
  
    public goEditarFormaPagamento(habilitaEditar: boolean){
      this.logger.info('FormaPagamentoDonoBarcoDetailPage :: goEditarFormaPagamento');
      this.podeEditar = habilitaEditar; 
    }
  
  
    public cancelarEditarFormaPagamento(desabilitaEditar: boolean){
      this.logger.info('FormaPagamentoDonoBarcoDetailPage :: cancelarEditarFormaPagamento' );
      this.podeEditar = desabilitaEditar;
      this.formaPagamentoDonoBarco = Object.assign({}, this.formaPagamentoDonoBarcoTemporario);
    }
  
    public limparForm(){
      this.logger.info('FormaPagamentoDonoBarcoDetailPage :: limparForm');
  
      this.id = new FormControl(null, []);
      this.banco = new FormControl('', Validators.required);   
      this.numeroCartao = new FormControl('', Validators.required);
      this.agencia = new FormControl('', Validators.required);
      this.conta = new FormControl('', Validators.required);
  
      this.formaPagamentoDonoBarcoForm = new FormGroup({
        id: this.id,
        banco: this.banco,
        numeroCartao: this.numeroCartao, 
        agencia: this.agencia, 
        conta: this.conta
      });
    }
  
    ionViewDidLoad() {
      this.logger.info('ionViewDidLoad FormaPagamentoDonoBarcoDetailPage');
      this.formaPagamentoDonoBarcoTemporario = Object.assign({}, this.formaPagamentoDonoBarco);
    }
}
