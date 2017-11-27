import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Avaliacaobarco, AvaliacaobarcoApi, Barco, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-avaliacao-barco-create',
  templateUrl: 'avaliacao-barco-create.html',
})
export class AvaliacaoBarcoCreatePage {

  public avaliacaobarco: Avaliacaobarco;
  public submitted: boolean;
  avaliacaobarcoForm: FormGroup;

  public id: AbstractControl;
  public pontuacao: AbstractControl;
  public observacao: AbstractControl;

  idUsuarioSolicitante: any;
  barcoId: any;

  barco: Barco;
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public avaliacaobarcoService: AvaliacaobarcoApi,
              public formBuilder: FormBuilder,
              private logger: LoggerService) {

      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);
    
      this.logger.info('AvaliacaoBarcoCreatePage :: constructor'); 

      this.submitted = false;
      this.avaliacaobarco = new Avaliacaobarco();
      
      this.avaliacaobarcoForm = formBuilder.group({
        pontuacao: ["", Validators.required]                          
      });

      this.limpaForm();
      this.carregarBarcoSelecionado();

  }

  public carregarBarcoSelecionado(): void{
    this.logger.info('AvaliacaoBarcoCreatePage :: carregarBarcoSelecionado'); 
    this.barco = this.navParams.get('barco');
    this.logger.info('AvaliacaoBarcoCreatePage :: carregarBarcoSelecionado :: barco selecionado '); 

  }

  public cadastrarAvaliacaoBarco(): void {

        this.logger.info('AvaliacaoBarcoCreatePage :: cadastrarAvaliacaoBarco');         
        this.submitted = true;
        
        if ( this.avaliacaobarcoForm.valid ){        
          this.logger.info('AvaliacaoBarcoCreatePage :: cadastrarAvaliacaoBarco :: form validado OK');
          this.avaliacaobarco.barcoId = this.barco.id;
          this.avaliacaobarco.dataAvaliacao = new Date();

          this.avaliacaobarcoService.create(this.avaliacaobarco).subscribe( sucesso => {
            this.logger.info('AvaliacaoBarcoCreatePage :: cadastrarAvaliacaoBarco :: avaliacaobarcoService.create() :: sucesso :: ', sucesso);
            //this.navCtrl.push(BarcosMeusPage);         
          }, (error: any) => {
            this.logger.error('AvaliacaoBarcoCreatePage :: cadastrarAvaliacaoBarco :: avaliacaobarcoService.create() :: error :: ', error);        
          });            
        }  
        else {
          this.logger.info('AvaliacaoBarcoCreatePage :: cadastrarAvaliacaoBarco :: form invalido');
        }
  }

  public cancelarAvaliacaoBarco(){
    this.logger.info('AvaliacaoBarcoCreatePage :: cancelarAvaliacaoBarco'); 
    this.navCtrl.pop();
  }

  public limpaForm(){
    this.logger.info('AvaliacaoBarcoCreatePage :: limpaForm');

    this.id = new FormControl(null, []);
    this.pontuacao = new FormControl('', Validators.required);
    this.observacao = new FormControl(null, []);

    this.avaliacaobarcoForm = new FormGroup({
      id: this.id,
      pontuacao: this.pontuacao
    });
    
    this.avaliacaobarcoForm.reset();   

  }

  ionViewDidLoad() {
      this.logger.info('ionViewDidLoad AvaliacaoBarcoCreatePage');
  }

}
