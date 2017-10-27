import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Opcional, OpcionalApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { OpcionaisListPage } from '../opcionais-list/opcionais-list';

/**
 * Descricao: Permite ao dono do barco editar os detalhes das informações de um determinado Opcional
 *            de um de seus barcos selecionados
 */

@IonicPage()
@Component({
  selector: 'page-opcionais-detail',
  templateUrl: 'opcionais-detail.html',
})
export class OpcionaisDetailPage {

  public opcional: Opcional;
  public opcionalTemporario: Opcional;

  submitted = false;  
  podeEditar: boolean = false;
  opcionalForm: FormGroup;
  
  public id: AbstractControl;
  public nome: AbstractControl;
  public descricao: AbstractControl;
  public observacao: AbstractControl;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public opcionalService: OpcionalApi,
              private formBuilder: FormBuilder, 
              private alertCtrl: AlertController,
              private logger: LoggerService) {

        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);
            
        this.logger.info('OpcionaisDetailPage :: constructor'); 
        
        this.opcionalForm = formBuilder.group({
          nome: ["", Validators.required]          
        });

        this.opcional = new Opcional();        
        this.opcionalTemporario = new Opcional();
        this.limparForm();

        this.carregaDetalhesOpcional();

  }

  public limparForm(){
    this.logger.info('OpcionaisDetailPage :: limparForm'); 
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

  public goExcluirOpcional() {
    this.logger.info('Selecionada opção de Excluir Opcional');
    const confirmacao = this.alertCtrl.create({
      title: 'Confirmar Exclusão',
      message: 'Deseja realmente excluir esse opcional?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.logger.info('"Cancelar" escolhido');
          }
        },
        {
          text: 'Confirmar',
          cssClass: 'text-danger',
          handler: () => {
            this.confirmarExclusaoOpcionalHandler();
          }
        }
      ]
    });
    confirmacao.present();
  }

  private confirmarExclusaoOpcionalHandler() {
    this.logger.info('"Confirmar" escolhido');
    
      this.opcionalService.deleteById(this.opcional.id).subscribe(sucesso => {
        this.logger.info('OpcionaisDetailPage :: confirmarExclusaoOpcionalHandler :: opcionalService.deleteById() :: sucesso :: ', sucesso);
        this.navCtrl.push(OpcionaisListPage);
      }, (error: any) => {
        this.logger.error('OpcionaisDetailPage :: confirmarExclusaoOpcionalHandler :: opcionalService.deleteById() :: error :: ', error);
      });
    
  }

  public salvarOpcional(){
    this.logger.info('OpcionaisDetailPage :: salvarOpcional'); 

    this.submitted = true;
    if ( this.opcionalForm.valid ){
      this.logger.info('OpcionaisDetailPage :: salvarOpcional :: form validado OK');
      let where = {
        id: this.opcional.id
      };      
      
      this.opcionalService.upsertWithWhere(where, this.opcional).subscribe( sucesso => {
        this.logger.info('OpcionaisDetailPage :: salvarOpcional :: opcionalService.upsertWithWhere() :: sucesso :: ', sucesso);
        this.navCtrl.push(OpcionaisListPage);        
      }, (error: any) => {
        this.logger.error('OpcionaisDetailPage :: salvarOpcional :: opcionalService.upsertWithWhere() :: error :: ', error);
      });
    }  
    else {
      this.logger.info('OpcionaisDetailPage :: salvarOpcional :: form invalido');
    } 
  }

  public carregaDetalhesOpcional(){
    this.logger.info('OpcionaisDetailPage :: carregaDetalhesOpcional :: inicio');
    
    this.opcional = this.navParams.get('opcional');
    this.submitted = false;
    this.podeEditar = false;
    
    this.opcionalService.findById(this.opcional.id).subscribe((opcional: Opcional) => {          
      this.opcional = opcional;           
      this.logger.info('OpcionaisDetailPage :: carregaDetalhesOpcional :: opcionalService.findById :: ', this.opcional);             
    }, (erro) => {
      this.logger.error('OpcionaisDetailPage :: carregaDetalhesOpcional :: opcionalService.findById :: error :: ', erro);         
    });

  }

  public goEditarOpcional(habilitaEdicao: boolean): void{
    this.podeEditar = habilitaEdicao;  
  }

  public cancelarEdicaoOpcional(){
    this.goEditarOpcional(false);
    this.opcional = Object.assign({}, this.opcionalTemporario);
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad OpcionaisDetailPage');
    this.opcionalTemporario = Object.assign({}, this.opcional);
  }

}
