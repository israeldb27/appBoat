import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Barco, BarcoApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";

import { BarcosCreatePage } from '../barcos-create/barcos-create';


@IonicPage()
@Component({
  selector: 'page-barcos-meus',
  templateUrl: 'barcos-meus.html',
})
export class BarcosMeusPage {

   meusBarcos: Barco[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public barcoService: BarcoApi,
              private logger: LoggerService) {

      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);
              
      this.logger.info('BarcosMeusPage :: constructor'); 

      this.listarMeusBarcos();

  }

  public listarMeusBarcos(): void {
     this.logger.info('BarcosMeusPage :: listarMeusBarcos '); 

     this.barcoService.find().subscribe( (barcos: Barco[]) => {
      this.meusBarcos = barcos;
    }, (error: any) => {
      this.logger.error('GruposPage :: listarMeusBarcos :: barcoService.find :: error :: ', error);
    });
  
  }


  public visualizarDetalhes(barco){
    this.logger.info('BarcosMeusPage :: visualizarDetalhes :: ', barco); 
    
  }

  public goCriarBarco(){
    this.logger.info('BarcosMeusPage :: goCriarBarco ');
    this.navCtrl.push(BarcosCreatePage);  
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosMeusPage');
  }

}
