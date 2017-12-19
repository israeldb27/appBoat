import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import {  FormaPagamentoDonoBarco, FormaPagamentoDonoBarcoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

/*
* Descrição: Esta classe irá realizar o cadastro da Forma de Pagamento que o dono do barco deverá receber seus pagamentos
*/

@IonicPage()
@Component({
  selector: 'page-forma-pagamento-dono-barco-create',
  templateUrl: 'forma-pagamento-dono-barco-create.html',
})
export class FormaPagamentoDonoBarcoCreatePage {

  public formaPagamentoUsuario: FormaPagamentoDonoBarco;
  public submitted: boolean;
  formaPagamentoUsuarioForm: FormGroup;

  public id: AbstractControl;
  public banco: AbstractControl;
  public numeroCartao: AbstractControl;
  public agencia: AbstractControl;
  public conta: AbstractControl;

  mensagemRetorno: any; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              private formaPagamentoUsuarioService: FormaPagamentoDonoBarcoApi,
              private logger: LoggerService) {
      
        this.logger.info('FormaPagamentoDonoBarcoCreatePage :: constructor');
        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);  
    
        this.submitted = false
        this.formaPagamentoUsuario = new FormaPagamentoDonoBarco();
        
        this.formaPagamentoUsuarioForm = formBuilder.group({
          banco: ["", Validators.required],
          numeroCartao: ["", Validators.required],
          agencia: ["", Validators.required],
          conta: ["", Validators.required]
        });

        this.limparForm();
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad FormaPagamentoDonoBarcoCreatePage');
  }

  public limparForm(){

    this.logger.info('FormaPagamentoDonoBarcoCreatePage :: limparForm');

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

  public cadastrarFormaPagamentoDonoBarco(): void {
    this.logger.info('FormaPagamentoDonoBarcoCreatePage :: cadastrarFormaPagamentoDonoBarco');

    // Criar os campos idUsuario e dataUltimaAtualizacao na tabela FormaPagamentoUsuario
    this.submitted = true;
    let idUsuarioSessao = localStorage['usuarioSessao'];
    
    if ( this.formaPagamentoUsuarioForm.valid ){
      this.logger.info('FormaPagamentoDonoBarcoCreatePage :: cadastrarFormaPagamentoDonoBarco :: form validado OK');
      this.logger.info('FormaPagamentoDonoBarcoCreatePage :: cadastrarFormaPagamentoDonoBarco :: forma pagamento ', this.formaPagamentoUsuario);
      this.formaPagamentoUsuario.status = 'criado';
      this.formaPagamentoUsuario.dataCadastro = new Date();
      this.formaPagamentoUsuario.idDonoBarco = idUsuarioSessao;

      this.formaPagamentoUsuarioService.create(this.formaPagamentoUsuario).subscribe( sucesso => {
        this.logger.info('FormaPagamentoDonoBarcoCreatePage :: cadastrarFormaPagamentoDonoBarco :: formaPagamentoUsuarioService.create() :: sucesso :: ', sucesso);
        this.mensagemRetorno = 'Forma de pagamento cadastrado com sucesso';
      }, (error: any) => {
        this.logger.error('FormaPagamentoDonoBarcoCreatePage :: cadastrarFormaPagamentoDonoBarco :: formaPagamentoUsuarioService.create() :: error :: ', error);        
      }); 
    }  
    else {
      this.logger.info('FormaPagamentoDonoBarcoCreatePage :: cadastrarFormaPagamentoDonoBarco :: form invalido');
    }
  }


}
