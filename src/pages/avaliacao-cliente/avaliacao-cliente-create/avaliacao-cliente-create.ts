import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvaliacaoUsuariosolicitante, AvaliacaoUsuariosolicitanteApi,LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-avaliacao-cliente-create',
  templateUrl: 'avaliacao-cliente-create.html',
})
export class AvaliacaoClienteCreatePage {

  public avaliacaoCliente: AvaliacaoUsuariosolicitante;
  submitted = false;
  avaliacaoClienteForm: FormGroup;

  public id: AbstractControl;
  public pontuacao: AbstractControl;
  public observacao: AbstractControl;

  usuarioSolicitanteId: number;
  donoBarcoId: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public avaliacaoClienteService: AvaliacaoUsuariosolicitanteApi,
              private formBuilder: FormBuilder, 
              private logger: LoggerService) {

          this.logger.info('AvaliacaoClienteCreatePage :: constructor');   
          LoopBackConfig.setBaseURL(BASE_URL);
          LoopBackConfig.setApiVersion(API_VERSION);

          this.avaliacaoClienteForm = formBuilder.group({
            pontuacao: ["", Validators.required]          
          });

          this.avaliacaoCliente = new AvaliacaoUsuariosolicitante();
          this.limpaForm();
          this.carregarCliente();

  }

  public cadastrarAvaliacaoCliente(){
      this.logger.info('AvaliacaoClienteCreatePage :: cadastrarAvaliacaoCliente ');

      this.submitted = true;

      if ( this.avaliacaoClienteForm.valid ){        
          this.logger.info('AvaliacaoClienteCreatePage :: cadastrarAvaliacaoCliente :: form validado OK');
          this.avaliacaoCliente.dataAvaliacao = new Date();
          this.avaliacaoCliente.donoBarcoId = this.donoBarcoId;

          this.avaliacaoClienteService.create(this.avaliacaoCliente).subscribe( sucesso => {
          this.logger.info('AvaliacaoClienteCreatePage :: cadastrarAvaliacaoCliente :: avaliacaoClienteService.create() :: sucesso :: ', sucesso);
      //  this.navCtrl.push(BarcosMeusPage);         
      }, (error: any) => {
          this.logger.error('AvaliacaoClienteCreatePage :: cadastrarAvaliacaoCliente :: avaliacaoClienteService.create() :: error :: ', error);        
      });        
      }  
      else {
        this.logger.info('AvaliacaoClienteCreatePage :: cadastrarAvaliacaoCliente :: form invalido');
      }
  }

  public carregarCliente(){
      this.logger.info('AvaliacaoClienteCreatePage :: cancelarCadastroavaliacaoCliente ');
      this.donoBarcoId = this.navParams.get('usuarioSolicitanteId');
  }

  public cancelarCadastroAvaliacaoCliente(){
      this.logger.info('AvaliacaoClienteCreatePage :: cancelarCadastroavaliacaoCliente ');
      this.navCtrl.pop();
  }

  limpaForm(): void {
      this.logger.info('AvaliacaoClienteCreatePage :: limpaForm ');

      this.id = new FormControl(null, []);
      this.pontuacao = new FormControl('', Validators.required);
      this.observacao = new FormControl(null, []);

      this.avaliacaoClienteForm = new FormGroup({
          id: this.id,
          pontuacao: this.pontuacao,      
          observacao: this.observacao,
      });
  }  

  ionViewDidLoad() {
        this.logger.info('ionViewDidLoad AvaliacaoClienteCreatePage');
  }

}
