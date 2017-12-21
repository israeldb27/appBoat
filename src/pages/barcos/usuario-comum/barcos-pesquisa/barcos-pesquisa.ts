import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { BarcosPresentFilterPage } from '../barcos-present-filter/barcos-present-filter';
import { BarcosResultadoPesquisaPage } from '../barcos-resultado-pesquisa/barcos-resultado-pesquisa';

import { Barco, BarcoApi, TipoBarco, TipoBarcoApi,PlanoReservabarco, PlanoReservabarcoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";

@IonicPage()
@Component({
  selector: 'page-barcos-pesquisa',
  templateUrl: 'barcos-pesquisa.html',
})
export class BarcosPesquisaPage {

  public tipoBarco: AbstractControl; 
  public opcaoPlano: AbstractControl; // campo que vai ser usado no combo que vai definir o tipo de busca: "Hoje" ou "Por Data". Se opcaoPlano = 'Hoje' entao campo 'dataDesejadaCliente' será desabilitada
  public dataDesejadaCliente: AbstractControl;  
  public quantMaxPessoas: AbstractControl;
  public distanciaMax: AbstractControl;
  public quantHorasDisponivel: AbstractControl;
  
  public planoReservabarcoForm: FormGroup;  
  public planoReservabarco: PlanoReservabarco;  
  public submitted = false;
  excludeTracks: any = [];

  barcos: Barco[];
  barco: Barco;
  planos: PlanoReservabarco[];
  tiposBarcos: TipoBarco[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public formBuilder: FormBuilder,
              private barcoService: BarcoApi,
              public tipoBarcoService: TipoBarcoApi,
              private planoReservabarcoService :PlanoReservabarcoApi,
              private logger: LoggerService) {

        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);          
        this.logger.info('BarcosPesquisaPage :: constructor  ');

        this.planoReservabarcoForm = formBuilder.group({
          tipoBarco: ["", Validators.required],
          opcaoPlano: ["", Validators.required], 
          quantMaxPessoas: ["", Validators.required],
          distanciaMax: ["", Validators.required],
          quantHorasDisponivel: ["", Validators.required]
        });   

        this.barco = new Barco();
        this.planoReservabarco = new PlanoReservabarco();
        this.limparForm();   
        this.carregarTiposBarcos();  
  }

  public carregarTiposBarcos(){
    this.tipoBarcoService.find().subscribe( (tiposBarcos: TipoBarco[]) => {
      this.logger.info('BarcosPesquisaPage :: tipoBarcoService.find :: sucesso :: ');
      this.tiposBarcos = tiposBarcos;
    }, (error: any) => {
      this.logger.error('BarcosPesquisaPage :: tipoBarcoService.find :: error :: ', error);
    });
  }

  public pesquisarBarcos(): void {

    this.logger.info('BarcosPesquisaPage :: pesquisarBarcos  ');
    this.logger.info('BarcosPesquisaPage :: pesquisarBarcos  :: dataInicio', this.dataInicio.value);
    this.logger.info('BarcosPesquisaPage :: pesquisarBarcos  :: dataFim', this.dataFim.value);

    this.submitted = true;
    let filtro: LoopBackFilter;


    if ( this.planoReservabarcoForm.valid ){

      if ( this.planoReservabarco.opcaoPlano == 'D'){
        filtro = {
          "where": {
            "and": [
              {
                "opcaoPlano": this.planoReservabarco.opcaoPlano      // este campo indica se o usuário quer um barco diariamente disponível ou escolher por uma data especifica        
              },
              {
                "status": "criado"
              },
              {
                "tipoBarco": this.planoReservabarco.tipoBarco  // criar campo tipoBarco na tabela Barco e tambem na PlanoReservaBarco
              },
              {
                "quantMaxPessoas": this.planoReservabarco.quantMaxPessoas                
              },   
              {
                "distanciaMax": this.planoReservabarco.distanciaMax                
              },  
              {
                "quantHorasDisponivel": this.planoReservabarco.quantHorasDisponivel                
              } 
            ]      
          }
        };
      }
      else {
         filtro = {
          "where": {
            "and": [
              {
                "opcaoPlano": this.planoReservabarco.opcaoPlano  // este campo indica se o usuário quer um barco diariamente disponível ou escolher por uma data especifica             
              },
              {
                "status": "criado"
              },
              {
                "tipoBarco": this.planoReservabarco.tipoBarco  // criar campo tipoBarco na tabela Barco e tambem na PlanoReservaBarco
              },
              {
                "quantMaxPessoas": this.planoReservabarco.quantMaxPessoas                
              },   
              {
                "distanciaMax": this.planoReservabarco.distanciaMax                
              },  
              {
                "quantHorasDisponivel": this.planoReservabarco.quantHorasDisponivel                
              }, 
              {
                "dataInicio": 
                {
                  ge: this.dataDesejadaCliente.value                
                }
              },
              {
                "dataFim": 
                {
                  le: this.dataDesejadaCliente.value                
                }
              },  
            ]      
          }
        };
      }

      this.logger.error('BarcosPesquisaPage :: pesquisarBarcos :: filtro populado', filtro);      
      this.planoReservabarcoService.find(filtro).subscribe((planoReservaBarco: PlanoReservabarco[]) => {
        this.logger.info('BarcosPesquisaPage :: lista planos ::planoReservabarcoService.find :: sucesso :: ', planoReservaBarco);
        this.planos = planoReservaBarco;
        // listando os planos recuperados e a partir de cada plano recuperar o respectivo Barco
        // Criar um relacionamento 1 para Muitos entre Barco e PlanoReservaBarco dentro da Api utilizando o Loopback, 
        // de modo que o objeto Barco apareça dentro do Objecto PlanoReservaBarco ====>  this.planoReservaBarco.barco.id
        this.planos.forEach(element => {
          
        });
       
      }, (error: any) => {
        this.logger.error('BarcosPesquisaPage :: listarBarcos ::barcoService :: error :: ', error);
      });

    }
    else{
      this.logger.error('BarcosPesquisaPage :: pesquisarBarcos :: form invalido');
    }
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
      this.opcaoPlano = new FormControl('', Validators.required);    
      this.dataDesejadaCliente = new FormControl(null, []);      
      this.quantMaxPessoas = new FormControl('', Validators.required);    
      this.distanciaMax = new FormControl('', Validators.required);    
      this.quantHorasDisponivel = new FormControl('', Validators.required);    
      this.tipoBarco = new FormControl('', Validators.required);    
  
      this.planoReservabarcoForm = new FormGroup({               
       opcaoPlano: this.opcaoPlano,
       tipoBarco: this.tipoBarco,
       dataDesejadaCliente: this.dataDesejadaCliente,       
       quantMaxPessoas: this.quantMaxPessoas,
       distanciaMax:  this.distanciaMax,
       quantHorasDisponivel:  this.quantHorasDisponivel,       
     });

     this.planoReservabarcoForm.reset();
     this.logger.info('BarcosPesquisaPage :: limparForm :: terminou ');  
    }


  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosPesquisaPage');
  }

}
