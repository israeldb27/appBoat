import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ReservaBarco, ReservaBarcoApi, LoggerService } from "../../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ReservasSolicitadasListPage } from '../reservas-solicitadas-list/reservas-solicitadas-list';

/**
 * Descricao; Permite ao dono do barco visualizar os detalhes das informações 
 *            de uma solicitacação de reserva de barco feita por algum outro usuario da plataforma
 * 
 *            E também alterar o Status da Reserva para que o usuario solicitante da reserva
 *            possa enxergar se o dono do barco aceitou ou não sua solicitacao
 */

@IonicPage()
@Component({
  selector: 'page-reservas-solicitadas-detail',
  templateUrl: 'reservas-solicitadas-detail.html',
})
export class ReservasSolicitadasDetailPage {


  public reservaBarco: ReservaBarco;
  public reservaBarcoTemporario: ReservaBarco;

  submitted = false;  
  podeEditar: boolean = false;
  reservaBarcoForm: FormGroup;

  /**
   * 
   * Obs.: Dentro do Reserva-solicitada-detail o Dono do Barco poderá apenas 'Rejeitar' ou 'Aceitar' a reserva
   * 
   * Obs.: E para cada uma destas ações 'Alert' que solicitará a confirmação da ação para o Dono do barco
   * 
   * Obs: Nao haverão mais as ações para Alterar Status, Editar Reserva, Excluir reserva, entre outros
   */

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public reservaBarcoService: ReservaBarcoApi,
              private alertCtrl: AlertController,
              private logger: LoggerService) {

          this.logger.info('ReservasSolicitadasDetailPage :: constructor');       
          LoopBackConfig.setBaseURL(BASE_URL);
          LoopBackConfig.setApiVersion(API_VERSION);

          this.reservaBarco = new ReservaBarco();
          this.reservaBarcoTemporario = new ReservaBarco();
  }

  public carregaDetalhesReservaBarco() {
    this.logger.info('ReservasSolicitadasDetailPage :: carregaDetalhesReservaBarco');
    this.reservaBarco = this.navParams.get('reservaBarco');
    this.logger.info('ReservasSolicitadasDetailPage :: carregaDetalhesReservaBarco :: Reserva Barco', this.reservaBarco );
  }

  public alterarStatusReservaBarco(): void {
    this.logger.info('ReservasSolicitadasDetailPage :: alterarStatusReservaBarco');     
    
    this.submitted = true;
    
    if ( this.reservaBarcoForm.valid ){
      this.logger.info('ReservasSolicitadasDetailPage :: alterarStatusReservaBarco :: form valido Ok');
      let where = {
        id: this.reservaBarco.id
      }; 
         
      this.reservaBarcoService.upsertWithWhere(where, this.reservaBarco).subscribe( sucesso => {    
        this.logger.info('ReservasSolicitadasDetailPage :: alterarStatusReservaBarco :: reservaBarcoService.upsertWithWhere() :: sucesso :: ', sucesso);
        //this.navCtrl.push(BarcosMeusPage);         
      }, (error: any) => {
        this.logger.error('ReservasSolicitadasDetailPage :: alterarStatusReservaBarco :: reservaBarcoService.upsertWithWhere() :: error :: ', error);        
      });      
    }  
    else {
      this.logger.info('ReservasSolicitadasDetailPage :: alterarStatusReservaBarco :: form invalido');
    }

  }


  public goExcluirReserva() {
    this.logger.info('Selecionada opção de Excluir Reserva Solicitada');
    const confirmacao = this.alertCtrl.create({
      title: 'Confirmar Exclusão',
      message: 'Deseja realmente excluir essa reserva solicitada?',
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
            this.confirmarExclusaoReservaSolicitadaHandler();
          }
        }
      ]
    });
    confirmacao.present();
  }

  private confirmarExclusaoReservaSolicitadaHandler() {
    this.logger.info('"Confirmar" escolhido');
    
      this.reservaBarcoService.deleteById(this.reservaBarco.id).subscribe(sucesso => {
        this.logger.info('ReservasSolicitadasDetailPage :: confirmarExclusaoReservaSolicitadaHandler :: reservaBarcoService.deleteById() :: sucesso :: ', sucesso);
        this.navCtrl.push(ReservasSolicitadasListPage);
      }, (error: any) => {
        this.logger.error('ReservasSolicitadasDetailPage :: confirmarExclusaoReservaSolicitadaHandler :: reservaBarcoService.deleteById() :: error :: ', error);
      });
    
  }



  public salvarReservaSolicitada(){
    this.logger.info('ReservasSolicitadasDetailPage :: salvarReservaSolicitada'); 

    this.submitted = true;
    if ( this.reservaBarcoForm.valid ){
      this.logger.info('ReservasSolicitadasDetailPage :: salvarReservaSolicitada :: form validado OK');
      let where = {
        id: this.reservaBarco.id
      };      
      
      this.reservaBarcoService.upsertWithWhere(where, this.reservaBarco).subscribe( sucesso => {
        this.logger.info('ReservasSolicitadasDetailPage :: salvarReservaSolicitada :: opcionalService.upsertWithWhere() :: sucesso :: ', sucesso);
        this.navCtrl.push(ReservasSolicitadasListPage);        
      }, (error: any) => {
        this.logger.error('ReservasSolicitadasDetailPage :: salvarReservaSolicitada :: opcionalService.upsertWithWhere() :: error :: ', error);
      });
    }  
    else {
      this.logger.info('ReservasSolicitadasDetailPage :: salvarReservaSolicitada :: form invalido');
    } 
  }


  public goEditarReserva(habilitaEdicao: boolean): void{
    this.podeEditar = habilitaEdicao;  
  }

  public cancelarEdicaoReservaSolicitada(){
    this.goEditarReserva(false);
    this.reservaBarco = Object.assign({}, this.reservaBarcoTemporario);
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad ReservasSolicitadasDetailPage');
    this.reservaBarcoTemporario = Object.assign({}, this.reservaBarco);
  }

}
