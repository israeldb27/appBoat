import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Barco, BarcoApi } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";



@IonicPage()
@Component({
  selector: 'page-barcos-meus',
  templateUrl: 'barcos-meus.html',
})
export class BarcosMeusPage {

   meusBarcos: Barco[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
               public barcoService: BarcoApi) {

                LoopBackConfig.setBaseURL(BASE_URL);
                LoopBackConfig.setApiVersion(API_VERSION);
              
      console.log('BarcosMeusPage :: constructor'); 

      this.listarMeusBarcos();

  }

  public listarMeusBarcos(): void {
     console.log('BarcosMeusPage :: listarMeusBarcos '); 

     this.barcoService.find().subscribe( (barcos: Barco[]) => {
      this.meusBarcos = barcos;
    }, (error: any) => {
      console.log('GruposPage :: listarGrupos ::grupoService.find :: error :: ', error);
    });

  
  }


  public visualizarDetalhes(barco){

    console.log('BarcosMeusPage :: visualizarDetalhes :: ', barco); 

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcosMeusPage');
  }

}
