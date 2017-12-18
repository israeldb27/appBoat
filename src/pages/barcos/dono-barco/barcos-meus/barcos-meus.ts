import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Barco, BarcoApi, Usuario, UsuarioApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";

import { BarcosCreatePage } from '../barcos-create/barcos-create';
import { BarcosMeusDetailPage } from '../barcos-meus-detail/barcos-meus-detail';


@IonicPage()
@Component({
  selector: 'page-barcos-meus',
  templateUrl: 'barcos-meus.html',
})
export class BarcosMeusPage {

   meusBarcos: Barco[];
   usuarioSessao: Usuario;
   idUsuarioSessao: any;
   public mensagemRetorno: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public barcoService: BarcoApi,
              public usuarioService: UsuarioApi,
              private logger: LoggerService) {

      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);
              
      this.logger.info('BarcosMeusPage :: constructor'); 
      this. usuarioSessao = new Usuario();
      
      this.carregarUsuarioSessao();
      this.listarMeusBarcos();
  }

  public carregarUsuarioSessao(){
    this.logger.info('BarcosMeusPage :: carregarUsuarioSessao ');     
    this.idUsuarioSessao = localStorage['usuarioSessao'];
    this.logger.info('BarcosMeusPage :: carregarUsuarioSessao :: idUsuarioSessao :: ', this.idUsuarioSessao); 
  }

  public listarMeusBarcos(): void {
     this.logger.info('BarcosMeusPage :: listarMeusBarcos ');      

     let idDonoBarco: any;
     idDonoBarco = this.idUsuarioSessao;
     this.logger.info(' BarcosMeusPage :: listarMeusBarcos :: usuarioSessao :: ', idDonoBarco);
   
     let filtro: LoopBackFilter = {
       "where": {
         "and": [
           {
             "idDonoBarco": idDonoBarco              
           }
         ]      
       }
     };

    this.barcoService.find(filtro).subscribe( (barcos: Barco[]) => {
      if ( barcos.length > 0 ){
        this.meusBarcos = barcos;
      }
      else {
        this.mensagemRetorno = 'Você não possui ainda nenhum barco cadastrado';
      }      

      this.logger.info(' BarcosMeusPage :: listarMeusBarcos :: meusbarcos :: ', this.meusBarcos);
    }, (error: any) => {
      this.logger.error('BarcosMeusPage :: listarMeusBarcos :: barcoService.find :: error :: ', error);
    });
  
  }


  public visualizarDetalhes(barco){
    this.logger.info('BarcosMeusPage :: visualizarDetalhes :: ', barco); 
    this.navCtrl.push(BarcosMeusDetailPage, {barco: barco});
    
  }

  public goCriarBarco(){
    this.logger.info('BarcosMeusPage :: goCriarBarco ');
    this.navCtrl.push(BarcosCreatePage);  
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosMeusPage');
  }

}
