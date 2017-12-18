import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { Usuario, UsuarioApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { BarcosPesquisaPage } from '../../barcos/usuario-comum/barcos-pesquisa/barcos-pesquisa';

import { UsuarioCreatePage } from '../usuario-create/usuario-create';

import { PerfilUsuarioSessaoProvider } from '../../../providers/perfil-usuario-sessao/perfil-usuario-sessao';

import { ReservasSolicitadasServiceProvider } from '../../../providers/reservas-solicitadas-service/reservas-solicitadas-service

import { ReservasSolicitadasListPage } from '../../reservas/dono-barco/reservas-solicitadas/reservas-solicitadas-list/reservas-solicitadas-list';

import { BarcosMeusPage } from '../../barcos/dono-barco/barcos-meus/barcos-meus';

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
              public menu: MenuController,
              public reservaSolService: ReservasSolicitadasServiceProvider,
              public perfilUsuario: PerfilUsuarioSessaoProvider,
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
          let user = usuarios[0];
          localStorage['usuarioSessao'] = user.id;
          this.logger.info('LoginPage :: realizarLogin :: perfilUsuario :: ', user.perfil);
          if ( user.perfil == 'cliente'){
             this.perfilUsuario.carregaMenuCliente();      
             this.navCtrl.setRoot(BarcosPesquisaPage);   
          }
          else if ( user.perfil == 'donoBarco'){
            this.perfilUsuario.carregaMenuDonoBarco(); 
            let quantReservasSolicitadas = this.reservaSolService.checarQuantidadeReservasSolicitadasDonoBarco(user.id);
            if ( quantReservasSolicitadas > 0 ){
                this.navCtrl.push(ReservasSolicitadasListPage);
            }
            else {
              this.navCtrl.push(BarcosMeusPage);              
            }
          }
        }       
        
      }, (error: any) => {
        this.logger.error('LoginPage :: realizarLogin ::usuarioService :: error :: ', error);
      });
    } 
    else {
      this.logger.error('LoginPage :: realizarLogin :: form invalido'); 
    }
  }

  public habilitaMenuDono(){
    this.logger.info('MyApp :: habilitaMenuDono'); 
    this.menu.enable(true,  'menuDonoBarco');
    this.menu.enable(false, 'menuCliente');
  }

  public habilitaMenuCliente(){
    this.logger.info('MyApp :: habilitaMenuCliente'); 
    this.menu.enable(false,  'menuDonoBarco');
    this.menu.enable(true, 'menuCliente');
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
