import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import {  FormaPagamentoUsuario, FormaPagamentoUsuarioApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-forma-pagamento-cliente-create',
  templateUrl: 'forma-pagamento-cliente-create.html',
})
export class FormaPagamentoClienteCreatePage {

  /**
   *  Descricao; Esta classe vai permitir ao cliente cadastrar qual vai ser a forma de pagamento que ele vai usar para realizar o
   *             pagamento das reservas de barco
   * 
   *  Obs.: Na verdade ele adiciona o Numero cartao, banco e conta, entre outros
   * 
   */

  public formaPagamentoUsuario: FormaPagamentoUsuario;
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
              private formaPagamentoUsuarioService: FormaPagamentoUsuarioApi,
              private logger: LoggerService) {

    this.logger.info('FormaPagamentoClienteCreatePage :: constructor');
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);  

    this.submitted = false
    this.formaPagamentoUsuario = new FormaPagamentoUsuario();

    this.formaPagamentoUsuarioForm = formBuilder.group({
      banco: ["", Validators.required],
      numeroCartao: ["", Validators.required],
      agencia: ["", Validators.required],
      conta: ["", Validators.required]
    });

    this.limparForm();

  }

  public cadastrarFormaPagamentoCliente(): void {
    this.logger.info('FormaPagamentoClienteCreatePage :: cadastrarFormaPagamentoCliente');

    // Criar os campos idUsuario e dataUltimaAtualizacao na tabela FormaPagamentoUsuario
    this.submitted = true;
    
    if ( this.formaPagamentoUsuarioForm.valid ){
      this.logger.info('FormaPagamentoClienteCreatePage :: cadastrarFormaPagamentoCliente :: form validado OK');
      this.logger.info('FormaPagamentoClienteCreatePage :: cadastrarFormaPagamentoCliente :: forma pagamento ', this.formaPagamentoUsuario);
      this.formaPagamentoUsuario.status = 'criado';
      this.formaPagamentoUsuario.dataCadastro = new Date();

      this.formaPagamentoUsuarioService.create(this.formaPagamentoUsuario).subscribe( sucesso => {
        this.logger.info('FormaPagamentoClienteCreatePage :: cadastrarFormaPagamentoCliente :: formaPagamentoUsuarioService.create() :: sucesso :: ', sucesso);
        this.mensagemRetorno = 'Forma de pagamento cadastrado com sucesso';
      }, (error: any) => {
        this.logger.error('FormaPagamentoClienteCreatePage :: cadastrarFormaPagamentoCliente :: formaPagamentoUsuarioService.create() :: error :: ', error);        
      }); 
    }  
    else {
      this.logger.info('FormaPagamentoClienteCreatePage :: cadastrarFormaPagamentoCliente :: form invalido');
    }
  }

  public limparForm(){
    this.logger.info('FormaPagamentoClienteCreatePage :: limparForm');

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
    this.logger.info('ionViewDidLoad FormaPagamentoClienteCreatePage');
  }

}
