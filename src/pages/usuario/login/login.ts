import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Usuario, UsuarioApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public usuario: Usuario;
  public submitted: boolean;
  usuarioForm: FormGroup;

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
    
  }

  public realizarLogin(){
    this.logger.info('LoginPage :: realizarLogin');

    if(this.usuarioForm.valid){
      this.logger.info('LoginPage :: onLogin :: usuario ', this.usuario.login);
      this.submitted = true;
    
      /*
      this.usuarioService.login({username: this.usuario.login, password: this.usuario.password}).subscribe((usuario) => {
       // this.navCtrl.setRoot(HomePage);
      }, (error) => {
        this.showAlert();
        this.logger.error('LoginPage :: usuario.login :: erro ao logar o usuario :: ', error);
      });
      */
    } 
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
