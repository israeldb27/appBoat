import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservaBarco, ReservaBarcoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ReservasPagamentoPage } from '../reservas-pagamento/reservas-pagamento';

@IonicPage()
@Component({
  selector: 'page-reservas-detail',
  templateUrl: 'reservas-detail.html',
})
export class ReservasDetailPage {

  reservaBarco: ReservaBarco;
  public submitted: boolean;
  reservaBarcoForm: FormGroup;

  public id: AbstractControl;
  public statusReserva: AbstractControl;  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public reservaBarcoService: ReservaBarcoApi,
              private logger: LoggerService) {

      this.logger.info('ReservasDetailPage :: constructor');          
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);
      this.reservaBarco = new ReservaBarco();
      this.visualizarDetalhesReserva();           
  }

  public preparaOrdemPagamentoReservaBarco(){
    this.logger.info('ReservasDetailPage :: preparaOrdemPagamentoReservaBarco :: Reserva Barco - selecionado ', this.reservaBarco);
    this.navCtrl.push(ReservasPagamentoPage, {reservaBarco: this.reservaBarco});
  }


  public visualizarDetalhesReserva(){
    this.logger.info('ReservasDetailPage :: visualizarDetalhesReserva');
    this.reservaBarco = this.navParams.get('reserVaBarco');
    this.logger.info('ReservasDetailPage :: visualizarDetalhesReserva :: Reserva Barco Selecionad ');    
  }

  public cancelarReservaBarco() {
    this.logger.info('ReservasDetailPage :: cancelarReservaBarco :: Reservar Barco', this.reservaBarco);
    this.reservaBarco.statusReserva = 'C'; // cancelado
    this.reservaBarco.dataUltimaAtualizacao = new Date();
    this.reservaBarco.dataCancelamento = new Date();

    this.submitted = true;
    
    if ( this.reservaBarcoForm.valid ){
      this.logger.info('ReservasDetailPage :: cancelarReservaBarco :: form valido Ok');
      let where = {
        id: this.reservaBarco.id
      }; 
         
      this.reservaBarcoService.upsertWithWhere(where, this.reservaBarco).subscribe( sucesso => {    
        this.logger.info('ReservasDetailPage :: cancelarReservaBarco :: reservaBarcoService.upsertWithWhere() :: sucesso :: ', sucesso);
        //this.navCtrl.push(BarcosMeusPage);         
      }, (error: any) => {
        this.logger.error('ReservasDetailPage :: cancelarReservaBarco :: reservaBarcoService.upsertWithWhere() :: error :: ', error);        
      });      
    }  
    else {
      this.logger.info('ReservasDetailPage :: cancelarReservaBarco :: form invalido');
    }

  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad ReservasDetailPage');
  }

}
