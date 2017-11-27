import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario, UsuarioApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-conta-detail',
  templateUrl: 'conta-detail.html',
})
export class ContaDetailPage {

  usuario: Usuario;
  usuarioForm: FormGroup;
  public submitted: boolean;
  public podeEditar: boolean;

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
            private formBuilder: FormBuilder, 
            private logger: LoggerService) {

      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);

      this.submitted = false;
      this.usuario = new Usuario();
      this.podeEditar = false;
      
      this.usuarioForm = formBuilder.group({
        nome: ["", Validators.required],
        login: ["", Validators.required],
        password: ["", Validators.required],
        confirmaPassword: ["", Validators.required],
        email: ["", Validators.required],
        perfil: ["", Validators.required],
        dataNascimento: ["", Validators.required],          
        cpf: ["", Validators.required]
      });
              
      this.logger.info('BarcosDetailPage :: constructor');
      this.carregaDetalhesConta();  
      this.limpaForm();        
}

public carregaDetalhesConta(){
  this.logger.info('ContaEditPage ;: carregaDetalhesConta');
  
  let id: any;
  id = localStorage['usuarioSessao'];
  this.logger.info(' ContaEditPage :: usuarioSessao :: ', id);

  let filtro: LoopBackFilter = {
    "where": {
      "and": [
        {
          "id": id              
        }
      ]      
    }
  };

  this.usuarioService.find(filtro).subscribe((usuarios: Usuario[]) => { 
    this.logger.info('LoginPage :: realizarLogin ::usuarioService.find :: sucesso :: ', usuarios);
    if ( usuarios.length == 0 ){
       // this.mensagemRetorno = 'Usuario não encontrado';
    } 
    if ( usuarios.length == 1 ){    
      let user = usuarios[0];
      this.usuario = user;
      this.podeEditar = false;
    }         
    
  }, (error: any) => {
    this.logger.error('LoginPage :: realizarLogin ::usuarioService :: error :: ', error);
  });

}

public limpaForm(): void {
  this.logger.info('UsuarioCreatePage :: limpaForm :: inicio');

  this.id = new FormControl(null, []);
  this.nome = new FormControl('', Validators.required);   
  this.login = new FormControl('', Validators.required);
  this.password = new FormControl('', Validators.required);
  this.confirmaPassword = new FormControl('', Validators.required);
  this.email = new FormControl('', Validators.required);
  this.perfil = new FormControl('', Validators.required);
  this.cpf = new FormControl('', Validators.required);
  this.dataNascimento = new FormControl('', Validators.required);    

  this.usuarioForm = new FormGroup({
    id: this.id,
    nome: this.nome,
    login: this.login, 
    password: this.password, 
    confirmaPassword: this.confirmaPassword, 
    email: this.email, 
    perfil: this.perfil,
    dataNascimento: this.dataNascimento,
    cpf: this.cpf
  });
  
  this.usuarioForm.reset(); 
}

public goEditarConta(habilitaEditar: boolean){
  this.logger.info('ContaDetailPage :: goEditarConta'); 
  this.podeEditar = habilitaEditar;
}

logado(): Usuario {
  return localStorage['usuarioSessao'];
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
