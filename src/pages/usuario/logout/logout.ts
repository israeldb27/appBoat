import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Usuario, UsuarioApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";

import { LoginPage } from '../login/login';

import { PerfilUsuarioSessaoProvider } from '../../../providers/perfil-usuario-sessao/perfil-usuario-sessao';

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public usuarioService: UsuarioApi,
              public perfilUsuario: PerfilUsuarioSessaoProvider,
              private logger: LoggerService) {

      this.logger.info('LogoutPage :: constructor');            
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);  
      
      this.realizarLogout();
  }

  public realizarLogout(){
    this.logger.info('LogoutPage :: realizarLogout');
    this.perfilUsuario.logout();
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad LogoutPage');
  }

}
