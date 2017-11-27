import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Avaliacaodonobarco, AvaliacaodonobarcoApi,LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-avaliacao-dono-barco-create',
  templateUrl: 'avaliacao-dono-barco-create.html',
})
export class AvaliacaoDonoBarcoCreatePage {

  public avaliacaodonobarco: Avaliacaodonobarco;
  submitted = false;
  avaliacaodonobarcoForm: FormGroup;

  public id: AbstractControl;
  public pontuacao: AbstractControl;
  public observacao: AbstractControl;

  usuarioSolicitanteId: number;
  donoBarcoId: number;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public avaliacaodonobarcoService: AvaliacaodonobarcoApi,
              private formBuilder: FormBuilder, 
              private logger: LoggerService) {

          this.logger.info('AvaliacaoDonoBarcoCreatePage :: constructor');   
          LoopBackConfig.setBaseURL(BASE_URL);
          LoopBackConfig.setApiVersion(API_VERSION);

          this.avaliacaodonobarcoForm = formBuilder.group({
            pontuacao: ["", Validators.required]          
          });

          this.avaliacaodonobarco = new Avaliacaodonobarco();
          this.limpaForm();
          this.carregarDonoBarco();
          
  }

  public cadastrarAvaliacaoDonoBarco(){
    this.logger.info('AvaliacaoDonoBarcoCreatePage :: cadastrarAvaliacaoDonoBarco ');

    this.submitted = true;
    
    if ( this.avaliacaodonobarcoForm.valid ){        
      this.logger.info('AvaliacaoDonoBarcoCreatePage :: cadastrarAvaliacaoDonoBarco :: form validado OK');
      this.avaliacaodonobarco.dataAvaliacao = new Date();
      this.avaliacaodonobarco.donoBarcoId = this.donoBarcoId;

      this.avaliacaodonobarcoService.create(this.avaliacaodonobarco).subscribe( sucesso => {
        this.logger.info('AvaliacaoDonoBarcoCreatePage :: cadastrarAvaliacaoDonoBarco :: avaliacaodonobarcoService.create() :: sucesso :: ', sucesso);
      //  this.navCtrl.push(BarcosMeusPage);         
      }, (error: any) => {
        this.logger.error('AvaliacaoDonoBarcoCreatePage :: cadastrarAvaliacaoDonoBarco :: avaliacaodonobarcoService.create() :: error :: ', error);        
      });        
    }  
    else {
      this.logger.info('AvaliacaoDonoBarcoCreatePage :: cadastrarAvaliacaoDonoBarco :: form invalido');
    }
  }

  public carregarDonoBarco(){
    this.logger.info('AvaliacaoDonoBarcoCreatePage :: cancelarCadastroAvaliacaoDonoBarco ');
    this.donoBarcoId = this.navParams.get('donoBarcoId');
  }

  public cancelarCadastroAvaliacaoDonoBarco(){
    this.logger.info('AvaliacaoDonoBarcoCreatePage :: cancelarCadastroAvaliacaoDonoBarco ');
    this.navCtrl.pop();

  }

  limpaForm(): void {
    this.logger.info('AvaliacaoDonoBarcoCreatePage :: limpaForm ');
    
    this.id = new FormControl(null, []);
    this.pontuacao = new FormControl('', Validators.required);
    this.observacao = new FormControl(null, []);

    this.avaliacaodonobarcoForm = new FormGroup({
      id: this.id,
      pontuacao: this.pontuacao,      
      observacao: this.observacao,
    });

  }  

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad AvaliacaoDonoBarcoCreatePage');
  }

}
