import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Barco, BarcoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { BarcosMeusPage } from '../barcos-meus/barcos-meus';


@IonicPage()
@Component({
  selector: 'page-barcos-create',
  templateUrl: 'barcos-create.html',
})
export class BarcosCreatePage {

  public barco: Barco;
  submitted = false;
  barcoForm: FormGroup;

  public id: AbstractControl;
  public nome: AbstractControl;
  public cor: AbstractControl;
  public capacidadePessoas: AbstractControl; 
  public velocidade: AbstractControl; 
  public autonomia: AbstractControl;  
  public comprimento: AbstractControl;  
  public tipoCasco: AbstractControl;  
  public tipoCombustivel: AbstractControl;  
  public capacidadeCombustivel: AbstractControl;    
  public quantidadeCabines: AbstractControl;  
  public motor: AbstractControl;  
  public pes: AbstractControl;      
  public observacoes: AbstractControl;  
  public descricao: AbstractControl;  
  public dataCadastro: AbstractControl;  
  public dataUtilmaAtualizacao: AbstractControl;  
  public idDonoBarco: AbstractControl;  
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public barcoService: BarcoApi,
              private formBuilder: FormBuilder, 
              private logger: LoggerService) {

        this.logger.info('BarcosCreatePage :: constructor');   
        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);

        this.barcoForm = formBuilder.group({
          nome: ["", Validators.required]          
        });
        
        this.barco = new Barco();
        this.limpaForm();
  }

  limpaForm(): void {
    this.logger.info('BarcosCreatePage :: limpaForm :: inicio');
    
    this.id = new FormControl(null, []);
    this.nome = new FormControl('', Validators.required);
    this.cor = new FormControl(null, []);
    this.capacidadePessoas = new FormControl(null, []); 
    this.velocidade = new FormControl(null, []); 
    this.autonomia = new FormControl(null, []);  
    this.comprimento = new FormControl(null, []);  
    this.tipoCasco = new FormControl(null, []);  
    this.tipoCombustivel = new FormControl(null, []);  
    this.capacidadeCombustivel = new FormControl(null, []);    
    this.quantidadeCabines = new FormControl(null, []);  
    this.motor = new FormControl(null, []);  
    this.pes = new FormControl(null, []);      
    this.observacoes = new FormControl(null, []);  
    this.descricao = new FormControl(null, []);  
    this.dataCadastro = new FormControl(null, []);  
    this.dataUtilmaAtualizacao = new FormControl(null, []);  
//    this.idDonoBarco = new FormControl(null, []); 

    this.barcoForm = new FormGroup({
      id: this.id,
      nome: this.nome,      
      cor: this.cor,
      capacidadePessoas: this.capacidadePessoas,
      velocidade: this.velocidade,
      autonomia:  this.autonomia,
      comprimento:  this.comprimento,
      tipoCasco:  this.tipoCasco,
      tipoCombustivel:  this.tipoCombustivel,
      capacidadeCombustivel:  this.capacidadeCombustivel,
      quantidadeCabines:  this.quantidadeCabines,
      motor:  this.motor,
      pes:   this.pes,
      observacoes:  this.observacoes,
      descricao:  this.descricao,
      dataCadastro: this.dataCadastro, 
      dataUtilmaAtualizacao: this.dataUtilmaAtualizacao      
    });

    this.barcoForm.reset();
  }


  public cadastrarBarco(): void {

      this.logger.info('BarcosCreatePage :: cadastrarBarco'); 
      
      this.submitted = true;
      
      if ( this.barcoForm.valid ){        
        this.logger.info('BarcosCreatePage :: cadastrarBarco :: form validado OK');
        this.barcoService.create(this.barco).subscribe( sucesso => {
          this.logger.info('BarcosCreatePage :: cadastrarBarco :: barcoService.create() :: sucesso :: ', sucesso);
          this.navCtrl.push(BarcosMeusPage);         
        }, (error: any) => {
          this.logger.error('BarcosCreatePage :: cadastrarBarco :: barcoService.create() :: error :: ', error);        
        });        
      }  
      else {
        this.logger.info('BarcosCreatePage :: cadastrarBarco :: form invalido');
      }
  }

  public cancelarCadastroBarco() {
    this.logger.info('BarcosCreatePage :: cancelarCadastroBarco ::  ');
    this.navCtrl.push(BarcosMeusPage);
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosCreatePage');
  }

}
