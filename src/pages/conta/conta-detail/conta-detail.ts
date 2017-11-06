import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario, UsuarioApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ContaEditPage } from '../conta-edit/conta-edit';

@IonicPage()
@Component({
  selector: 'page-conta-detail',
  templateUrl: 'conta-detail.html',
})
export class ContaDetailPage {

  usuario: Usuario;
  usuarioForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public usuarioService: UsuarioApi,
              private formBuilder: FormBuilder, 
              private logger: LoggerService) {

      this.logger.info('ContaDetailPage :: constructor');
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);      
      

      this.usuario = new Usuario();   
      this.visualizarDetalhesConta();
  }

  public visualizarDetalhesConta(){
    this.logger.info('ContaDetailPage :: visualizarDetalhesConta');
  }
  

  public goEditarConta(): void{
    this.logger.info('ContaDetailPage :: goEditarConta');  
    this.navCtrl.push(ContaEditPage);   
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad ContaDetailPage');

  }

}
