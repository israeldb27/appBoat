import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { BarcosPresentFilterPage } from '../barcos-present-filter/barcos-present-filter';
import { BarcosResultadoPesquisaPage } from '../barcos-resultado-pesquisa/barcos-resultado-pesquisa';

import { Barco, BarcoApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";

@IonicPage()
@Component({
  selector: 'page-barcos-pesquisa',
  templateUrl: 'barcos-pesquisa.html',
})
export class BarcosPesquisaPage {

  public dataInicio: AbstractControl;
  public dataFim: AbstractControl;
  public barcoForm: FormGroup;
  public submitted = false;
  excludeTracks: any = [];

  barcos: Barco[];
  barco: Barco;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public formBuilder: FormBuilder,
              public barcoService: BarcoApi,
              private logger: LoggerService) {

        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);          
        this.logger.info('BarcosPesquisaPage :: constructor  ');

        this.barcoForm = formBuilder.group({
           dataInicio: ["", Validators.required],
           dataFim: ["", Validators.required]
        });   

        this.barco = new Barco();
        this.limparForm();     
  }

  public pesquisarBarcos(): void {

    this.logger.info('BarcosPesquisaPage :: pesquisarBarcos  ');
    this.logger.info('BarcosPesquisaPage :: pesquisarBarcos  :: dataInicio', this.dataInicio.value);
    this.logger.info('BarcosPesquisaPage :: pesquisarBarcos  :: dataFim', this.dataFim.value);

    this.submitted = true;

    // Definir melhor como vai ser esta query
    this.barcos = [];
    let dataInicioReserva: Date = this.dataInicio.value;
    let dataFimReserva: Date = this.dataFim.value;

    let filtro: LoopBackFilter = {
      where: {
        and: [
          {
            dataInicio: {
              ge: dataInicioReserva
            }
          },
          {
            dataFim: {
              le: dataFimReserva
            }
          }
        ]      
      }
    };
    this.barcoService.find(filtro).subscribe((barcos: Barco[]) => {
      this.logger.info('BarcosPesquisaPage :: listarBarcos ::barcoService.find :: sucesso :: ', barcos);
      this.barcos = barcos;
      this.navCtrl.push(BarcosResultadoPesquisaPage, { barcos: barcos })
    }, (error: any) => {
      this.logger.error('BarcosPesquisaPage :: listarBarcos ::barcoService :: error :: ', error);
    });
  }

  public listarBarcos(filtro: LoopBackFilter): void {
    
  }

  public presentFilter() {
     this.logger.info('BarcosPesquisaPage :: presentFilter  ');
    let modal = this.modalCtrl.create(BarcosPresentFilterPage, this.excludeTracks);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
       // this.updateSchedule();
      }
    });

  }

  public limparForm():void{
      this.logger.info('BarcosPesquisaPage :: limparForm  ');
      this.dataInicio = new FormControl(null,Validators.required);
      this.dataFim = new FormControl(null,Validators.required);
    
      this.barcoForm = new FormGroup({
        dataInicio: this.dataInicio,
        dataFim: this.dataFim      
      });
      this.barcoForm.reset();
    }


  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosPesquisaPage');
  }

}
