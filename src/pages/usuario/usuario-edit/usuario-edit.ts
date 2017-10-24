import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario, UsuarioApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";

@IonicPage()
@Component({
  selector: 'page-usuario-edit',
  templateUrl: 'usuario-edit.html',
})
export class UsuarioEditPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public usuarioService: UsuarioApi,
              private logger: LoggerService) {

      this.logger.info('UsuarioEditPage :: constructor');            
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);  
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad UsuarioEditPage');
  }

}
