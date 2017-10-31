import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanoReservabarco,  PlanoReservabarcoApi, LoggerService } from "../../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ReservasPlanejamentoCreatePage } from "../reservas-planejamento-create/reservas-planejamento-create";
import { ReservasPlanejamentoDetailPage } from "../reservas-planejamento-detail/reservas-planejamento-detail";

/**
 * Descricao:  Permite ao dono do barco listar os  plano de reserva de barco que ele criou
 * 
 */

@IonicPage()
@Component({
  selector: 'page-reservas-planejamento-list',
  templateUrl: 'reservas-planejamento-list.html',
})
export class ReservasPlanejamentoListPage {
  
  public planoReservabarco: PlanoReservabarco;
  planoReservabarcos: PlanoReservabarco[];


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public planoReservabarcoService: PlanoReservabarcoApi,
              private formBuilder: FormBuilder, 
              private logger: LoggerService) {                

        this.logger.info('ReservasPlanejamentoListPage :: constructor'); 
        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);

        this.planoReservabarco = new PlanoReservabarco();
        this.listarPlanoReservaBarco();
  }

  public listarPlanoReservaBarco(){
    
      this.logger.info('ReservasPlanejamentoListPage :: listarPlanoReservaBarco :: inicio'); 
      this.planoReservabarcoService.find().subscribe( (planoReservabarcos: PlanoReservabarco[]) => {
        this.planoReservabarcos = planoReservabarcos;
      }, (error: any) => {
        this.logger.error('ReservasPlanejamentoListPage :: listarPlanoReservaBarco :: planoReservabarcoService.find :: error :: ', error);
      });
  }

  public goCriarPlanoReservaBarco(){
    this.logger.info('ReservasPlanejamentoListPage :: goCriarPlanoReservaBarco'); 
    this.navCtrl.push(ReservasPlanejamentoCreatePage);
  }

  public visualizarDetalhesPlanoReservaBarco(planoReservabarco){
    this.logger.info('ReservasPlanejamentoListPage :: visualizarDetalhesPlanoReservaBarco', planoReservabarco); 
    this.navCtrl.push(ReservasPlanejamentoDetailPage, { planoReservabarco: planoReservabarco });

  }

  ionViewDidLoad() {
    this.logger.error('ionViewDidLoad ReservasPlanejamentoListPage');
  }

}