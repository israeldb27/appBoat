import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PlanoReservabarco, PlanoReservabarcoApi, LoggerService } from "../../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ReservasPlanejamentoListPage } from '../reservas-planejamento-list/reservas-planejamento-list';
/**
 * Descricao:  Permite ao dono do barco visualizar os detalhes as 
 *             informações de uma plano de reserva de barco que ele criou
 * 
 */

@IonicPage()
@Component({
  selector: 'page-reservas-planejamento-detail',
  templateUrl: 'reservas-planejamento-detail.html',
})
export class ReservasPlanejamentoDetailPage {

  
  public planoReservabarco: PlanoReservabarco;
  public planoReservabarcoTemporario: PlanoReservabarco;
  submitted = false;
  planoReservabarcoForm: FormGroup;
  podeEditar: boolean = false;

  public id: AbstractControl;
  public valorAluguel: AbstractControl;
  public diaSemana: AbstractControl;
  public dataEspecifica: AbstractControl;
  public horaInicioDisponivel: AbstractControl;
  public horaFimDisponivel: AbstractControl;
  public quantidadeHorasDisponiveis: AbstractControl;
  public status: AbstractControl;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public planoReservabarcoService: PlanoReservabarcoApi,
              private formBuilder: FormBuilder, 
              private alertCtrl: AlertController,
              private logger: LoggerService) {

          this.logger.info('ReservasPlanejamentoDetailPage :: constructor'); 
          LoopBackConfig.setBaseURL(BASE_URL);
          LoopBackConfig.setApiVersion(API_VERSION);

          this.planoReservabarcoForm = formBuilder.group({
            valorAluguel: ["", Validators.required]          
          });

          this.planoReservabarco = new PlanoReservabarco();
          this.planoReservabarcoTemporario = new PlanoReservabarco();          
          this.limparForm();
          this.carregaDetalhePlanoReservaBarco();
  }

  public goExcluirReserva() {
    this.logger.info('Selecionada opção de Excluir Plano Reserva Barco');
    const confirmacao = this.alertCtrl.create({
      title: 'Confirmar Exclusão',
      message: 'Deseja realmente excluir esse plano reserva barco?',
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
            this.confirmarExclusaoPlanoReservaBarcoHandler();
          }
        }
      ]
    });
    confirmacao.present();
  }

  private confirmarExclusaoPlanoReservaBarcoHandler() {
    this.logger.info('"Confirmar" escolhido');
    
      this.planoReservabarcoService.deleteById(this.planoReservabarco.id).subscribe(sucesso => {
        this.logger.info('ReservasPlanejamentoDetailPage :: confirmarExclusaoPlanoReservaBarcoHandler :: opcionalService.deleteById() :: sucesso :: ', sucesso);
        this.navCtrl.push(ReservasPlanejamentoListPage);
      }, (error: any) => {
        this.logger.error('ReservasPlanejamentoDetailPage :: confirmarExclusaoPlanoReservaBarcoHandler :: opcionalService.deleteById() :: error :: ', error);
      });
    
  }


  public goEditarReserva(habilitaEdicao: boolean): void{
    this.podeEditar = habilitaEdicao;  
  }

  public cancelarEdicaoPlanoReservaBarco(){
    this.goEditarReserva(false);
    this.planoReservabarco = Object.assign({}, this.planoReservabarcoTemporario);
  }

  public carregaDetalhePlanoReservaBarco():void {
    this.logger.info('ReservasPlanejamentoDetailPage :: carregaDetalhePlanoReservaBarco :: inicio');

    this.planoReservabarco = this.navParams.get('planoReservabarco');
    this.submitted = false;
    this.podeEditar = false;
    
    this.planoReservabarcoService.findById(this.planoReservabarco.id).subscribe((planoReservabarco: PlanoReservabarco) => {          
      this.planoReservabarco = planoReservabarco;           
      this.logger.info('ReservasPlanejamentoDetailPage :: carregaDetalhePlanoReservaBarco :: planoReservabarcoService.findById :: ', this.planoReservabarco);             
    }, (erro) => {
      this.logger.error('ReservasPlanejamentoDetailPage :: carregaDetalhePlanoReservaBarco :: planoReservabarcoService.findById :: error :: ', erro);         
    });
  }

  public limparForm() {    
    this.logger.info('ReservasPlanejamentoDetailPage :: limparForm');
    
    this.id = new FormControl(null, []);
    this.valorAluguel = new FormControl('', Validators.required);
    this.diaSemana = new FormControl(null, []);
    this.horaInicioDisponivel = new FormControl(null, []);
    this.horaFimDisponivel = new FormControl(null, []); 
    this.quantidadeHorasDisponiveis = new FormControl(null, []); 
    this.status = new FormControl(null, []); 
    
    this.planoReservabarcoForm = new FormGroup({
     id: this.id,
     valorAluguel: this.valorAluguel,      
     diaSemana: this.diaSemana,
     horaInicioDisponivel: this.horaInicioDisponivel,
     horaFimDisponivel: this.horaFimDisponivel,
     quantidadeHorasDisponiveis:  this.quantidadeHorasDisponiveis,
     status:  this.status     
   });

 }

 

 public salvarPlanoReservaBarco(){
  this.logger.info('ReservasPlanejamentoPage :: salvarPlanoReservaBarco :: inicio');

  this.submitted = true;
  
  if ( this.planoReservabarcoForm.valid ){
    
    let where = {
      id: this.planoReservabarco.id
    }; 

    /*    
    this.planoReservabarcoService.upsertWithWhere(where, this.planoReservabarco).subscribe( sucesso => {    
      this.logger.info('ReservasPlanejamentoPage :: salvarPlanoReservaBarco :: planoReservabarcoService.create() :: sucesso :: ', sucesso);
      //this.navCtrl.push(BarcosMeusPage);         
    }, (error: any) => {
      this.logger.error('ReservasPlanejamentoPage :: salvarPlanoReservaBarco :: planoReservabarcoService.create() :: error :: ', error);        
    });
    */
  }  
  else {
    this.logger.info('ReservasPlanejamentoPage :: salvarPlanoReservaBarco :: form invalido');
  }
}

public cancelarCadastroPlanoReservaBarco(){
  this.logger.info('ReservasPlanejamentoPage :: cancelarEdicaoPlanoReservaBarco');
}

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad ReservasPlanejamentoDetailPage');
    this.planoReservabarcoTemporario = Object.assign({}, this.planoReservabarco);
  }

}
