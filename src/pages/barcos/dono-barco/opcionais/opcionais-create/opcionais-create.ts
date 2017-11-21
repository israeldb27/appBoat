import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Opcional, OpcionalApi, Barco, LoggerService } from "../../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { OpcionaisListPage } from '../opcionais-list/opcionais-list';

/**
 *  Descricao; Permite ao dono do barco adicionar uma informação de 
 *             um determinado Opcional ao barco
 * 
 */

@IonicPage()
@Component({
  selector: 'page-opcionais-create',
  templateUrl: 'opcionais-create.html',
})
export class OpcionaisCreatePage {

  public opcional: Opcional;
  submitted = false;
  opcionalForm: FormGroup;

  public barco: Barco;

  public id: AbstractControl;
  public nome: AbstractControl;
  public descricao: AbstractControl;
  public observacao: AbstractControl;
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public opcionalService: OpcionalApi,
              private formBuilder: FormBuilder, 
              private logger: LoggerService) {

        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);
            
        this.logger.info('OpcionaisCreatePage :: constructor'); 

        this.opcionalForm = formBuilder.group({
          nome: ["", Validators.required]          
        });

        this.opcional = new Opcional();
        this.limparForm();
        this.carregaDetalhesBarco();

  }

  public carregaDetalhesBarco() {
    this.logger.info('OpcionaisCreatePage :: carregaDetalhesBarco'); 
    this.barco = this.navParams.get('barco');
  }

  public cadastrarOpcional(): void {
    
      this.logger.info('OpcionaisCreatePage :: cadastrarOpcional');       
      this.submitted = true;      
      if ( this.opcionalForm.valid ){
        this.opcional.barcoId = this.barco.id;
        this.opcional.dataCadastro = new Date();
        this.opcional.dataUltimaAtualizacao = new Date();
        this.logger.info('OpcionaisCreatePage :: cadastrarOpcional :: form validado OK');
        this.opcionalService.create(this.opcional).subscribe( sucesso => {
          this.logger.info('OpcionaisCreatePage :: cadastrarOpcional :: opcionalService.create() :: sucesso :: ', sucesso);
          this.navCtrl.push(OpcionaisListPage, {barco: this.barco});         
        }, (error: any) => {
          this.logger.error('OpcionaisCreatePage :: cadastrarOpcional :: opcionalService.create() :: error :: ', error);        
        });        
      }  
      else {
        this.logger.info('OpcionaisCreatePage :: cadastrarOpcional :: form invalido');
      }
  }
    
  public cancelarCadastroOpcional() {
    this.logger.info('OpcionaisCreatePage :: cancelarCadastroOpcional ::  ');
    this.navCtrl.pop();
  }

  public limparForm(){
    this.logger.info('OpcionaisCreatePage :: limparForm'); 
    this.id = new FormControl(null, []);
    this.nome = new FormControl('', Validators.required);    
    this.descricao = new FormControl(null, []);
    this.observacao = new FormControl(null, []);

    this.opcionalForm = new FormGroup({
      id: this.id,
      nome: this.nome,
      descricao: this.nome,
      observacao: this.nome    
    });
    
    this.opcionalForm.reset(); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcionaisCreatePage');
  }

}
