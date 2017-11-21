import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanoReservabarco,  PlanoReservabarcoApi, Barco, HistoricoPlanoReservaBarco, HistoricoPlanoReservaBarcoApi, LoggerService } from "../../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../../app/shared/angular-client"
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
  public barco: Barco;

  private historicoPlanoReservaBarco: HistoricoPlanoReservaBarco;
  historicos: HistoricoPlanoReservaBarco[];


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public planoReservabarcoService: PlanoReservabarcoApi,
              private historicoPlanoReservaBarcoService: HistoricoPlanoReservaBarcoApi,
              private formBuilder: FormBuilder, 
              private logger: LoggerService) {                

        this.logger.info('ReservasPlanejamentoListPage :: constructor'); 
        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);
        this.barco = new Barco();        
        this.planoReservabarco = new PlanoReservabarco();
        this.carregarDetalhesBarco();
        this.historicoPlanoReservaBarco = new HistoricoPlanoReservaBarco();
        this.listarPlanoReservaBarco();
  }

  public carregarDetalhesBarco(){
    this.logger.info('ReservasPlanejamentoListPage :: carregarDetalhesBarco'); 
    this.barco = this.navParams.get('barco');

    let filtro: LoopBackFilter = {
      "where": {
        "and": [
          {
            "barcoId": this.barco.id              
          }
        ]      
      }
    };

   this.historicoPlanoReservaBarcoService.find(filtro).subscribe( (historicos: HistoricoPlanoReservaBarco[]) => {
     this.historicos = historicos;
     this.logger.info(' ReservasPlanejamentoListPage :: carregarDetalhesBarco :: historicos :: ', this.historicos);
   }, (error: any) => {
     this.logger.error('ReservasPlanejamentoListPage :: carregarDetalhesBarco :: historicoPlanoReservaBarcoService.find :: error :: ', error);
   });
  }

  public listarPlanoReservaBarco(){
    
      this.logger.info('ReservasPlanejamentoListPage :: listarPlanoReservaBarco :: inicio'); 
      
      // criar o campo barcoId na tabela PlanoReservabarco e usar o ID  do barco para realizar a pesquisa abaixo

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
