import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Usuario, UsuarioApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { BarcosPesquisaPage } from '../../barcos/usuario-comum/barcos-pesquisa/barcos-pesquisa';

import { UsuarioCreatePage } from '../usuario-create/usuario-create';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public usuario: Usuario;
  public usuarioSessao: Usuario;
  public submitted: boolean;
  usuarioForm: FormGroup;

  usuarios: Usuario[];
  mensagemRetorno: string;

  public login: AbstractControl;
  public password: AbstractControl;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public usuarioService: UsuarioApi,
              public formBuilder: FormBuilder,
              public alertCtrl:AlertController,
              private logger: LoggerService) {

      this.logger.info('LoginPage :: constructor');            
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);  

      this.submitted = false;
      
      this.usuarioForm = formBuilder.group({        
        login: ["", Validators.required],
        password: ["", Validators.required]        
      });
      
      this.usuario = new Usuario();
      this.usuarioSessao = new Usuario();
      this.mensagemRetorno = '';
      this.limpaForm();
  }

  
  public limpaForm(){    
     this.logger.info('LoginPage :: limpaForm');

     this.login = new FormControl('', Validators.required);
     this.password = new FormControl('', Validators.required);


    this.usuarioForm = new FormGroup({      
      login: this.login, 
      password: this.password      
    });

    this.usuarioForm.reset();
    
  }

  public realizarLogin(){
    this.logger.info('LoginPage :: realizarLogin');

    if(this.usuarioForm.valid){
      this.logger.info('LoginPage :: realizarLogin :: form valido OK ');
      this.logger.info('LoginPage :: realizarLogin :: usuario ', this.usuario.login);
      this.submitted = true;   
      let login = this.usuario.login;
      let pwd = this.usuario.password;
 
      this.logger.info('LoginPage :: realizarLogin :: login ', login);
      this.logger.info('LoginPage :: realizarLogin :: pwd ', pwd);
      let filtro: LoopBackFilter = {
        "where": {
          "and": [
            {
              "login": login              
            },
            {
              "password": pwd             
            }
          ]      
        }
      };

      this.logger.info('LoginPage :: realizarLogin :: filtros ', filtro);
      this.usuarioService.find(filtro).subscribe((usuarios: Usuario[]) => { 
        this.logger.info('LoginPage :: realizarLogin ::usuarioService.find :: sucesso :: ', usuarios);
        if ( usuarios.length == 0 ){
            this.mensagemRetorno = 'Usuario não encontrado';
        } 
        if ( usuarios.length == 1 ){
          this.navCtrl.setRoot(BarcosPesquisaPage);
          let user = usuarios[0];
          localStorage['usuarioSessao'] = user.id;
          localStorage['perfilUsuarioSessao'] = user.perfil;
        }       
        
      }, (error: any) => {
        this.logger.error('LoginPage :: realizarLogin ::usuarioService :: error :: ', error);
      });
    } 
    else {
      this.logger.error('LoginPage :: realizarLogin :: form invalido'); 
    }
  }

  public goCriarConta(){
    this.logger.info('LoginPage :: goCriarConta ::');
    this.navCtrl.push(UsuarioCreatePage);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login invalido',
      subTitle: 'Verifique seu usuario ou senha',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad LoginPage');
  }

}
