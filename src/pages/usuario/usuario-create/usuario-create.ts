import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario, UsuarioApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { EmailValidator } from '../../../services/EmailValidador';


@IonicPage()
@Component({
  selector: 'page-usuario-create',
  templateUrl: 'usuario-create.html',
})
export class UsuarioCreatePage {

  public usuario: Usuario;
  public submitted: boolean;
  usuarioForm: FormGroup;

  public id: AbstractControl;
  public nome: AbstractControl;
  public login: AbstractControl;
  public password: AbstractControl;
  public confirmaPassword: AbstractControl; 
  public dataNascimento: AbstractControl;  
  public email: AbstractControl;
  public status: AbstractControl;
  public perfil: AbstractControl;
  public cpf: AbstractControl;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public usuarioService: UsuarioApi,
              public formBuilder: FormBuilder,
              private logger: LoggerService) {

      this.logger.info('UsuarioCreatePage :: constructor');            
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);  

      this.submitted = false;

      this.usuarioForm = formBuilder.group({
        nome: ["", Validators.required],
        login: ["", Validators.required],
        password: ["", Validators.required],
        confirmaPassword: ["", Validators.required],
        dataNascimento: ["", Validators.required],        
   //     email: ["", Validators.required],
        email: ["", Validators.compose([  
                        Validators.required,
                        EmailValidator.validate])],
        perfil: ["", Validators.required],
        cpf: ["", Validators.required]
      });

      this.usuario = new Usuario();
      this.limpaForm();
  }

  public cadastrarUsuario(): void {
    this.logger.info('UsuarioCreatePage :: cadastrarUsuario'); 

    this.submitted = true;
    
    if ( this.usuarioForm.valid ){
      this.logger.info('UsuarioCreatePage :: cadastrarUsuario :: form validado OK');
      this.logger.info('UsuarioCreatePage :: cadastrarUsuario :: usuario ', this.usuario);
      this.usuario.status = 'criado';
      this.usuario.dataCadastro = new Date();
      this.usuario.dataUltimaAtualizacao = new Date();
      this.usuarioService.create(this.usuario).subscribe( sucesso => {
        this.logger.info('UsuarioCreatePage :: cadastrarUsuario :: usuarioService.create() :: sucesso :: ', sucesso);
        this.navCtrl.pop();       
      }, (error: any) => {
        this.logger.error('UsuarioCreatePage :: cadastrarUsuario :: usuarioService.create() :: error :: ', error);        
      });      
    }  
    else {
      this.logger.info('UsuarioCreatePage :: cadastrarUsuario:: form invalido');
    }

  }


  public limpaForm(): void {
    this.logger.info('UsuarioCreatePage :: limpaForm :: inicio');

    this.id = new FormControl(null, []);
    this.nome = new FormControl('', Validators.required);   
    this.login = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.confirmaPassword = new FormControl('', Validators.required);
    this.dataNascimento = new FormControl('', Validators.required);    
    this.email = new FormControl('', Validators.required);
    this.perfil = new FormControl('', Validators.required);
    this.cpf = new FormControl('', Validators.required);

    this.usuarioForm = new FormGroup({
      id: this.id,
      nome: this.nome,
      login: this.login, 
      password: this.password, 
      confirmaPassword: this.confirmaPassword, 
      dataNascimento: this.dataNascimento,
      email: this.email, 
      perfil: this.perfil,
      cpf: this.cpf
    });
    
    this.usuarioForm.reset(); 
  }


  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad UsuarioCreatePage');
  }




}
