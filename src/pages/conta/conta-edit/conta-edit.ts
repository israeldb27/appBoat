import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario, UsuarioApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-conta-edit',
  templateUrl: 'conta-edit.html',
})
export class ContaEditPage {

  usuario: Usuario;
  usuarioForm: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public usuarioService: UsuarioApi,
              private formBuilder: FormBuilder, 
              private logger: LoggerService) {

        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);
                
        this.logger.info('BarcosDetailPage :: constructor');
        this.carregaDetalhesConta();          
  }

  public carregaDetalhesConta(){
    this.logger.info('ContaEditPage ;: carregaDetalhesConta');

  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad ContaEditPage');
  }

  public salvarConta(): void {
    
        this.logger.info('ContaDetailPage :: salvarConta'); 
    
        if ( this.usuarioForm.valid ){
          this.logger.info('BarcosDetailPage :: salvarConta :: form validado OK');
          let where = {
            id: this.usuario.id
          };      
          
          this.usuarioService.upsertWithWhere(where, this.usuario).subscribe( sucesso => {
            this.logger.info('ContaDetailPage :: salvarConta :: usuarioService.upsertWithWhere() :: sucesso :: ', sucesso);
            //this.navCtrl.push(GruposListPage);        
          }, (error: any) => {
            this.logger.error('ContaDetailPage :: salvarConta :: usuarioService.upsertWithWhere() :: error :: ', error);
          });
        }  
        else {
          this.logger.info('ContaDetailPage :: salvarConta :: form invalido');
        } 

  }

  public cancelarEditarConta(){
    this.logger.info('ContaEditPage ;: cancelarEditarConta');
  }

}
