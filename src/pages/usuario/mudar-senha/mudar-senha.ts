import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { Usuario, UsuarioApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-mudar-senha',
  templateUrl: 'mudar-senha.html',
})
export class MudarSenhaPage {

  public usuario: Usuario;  
  public submitted: boolean;
  public podeEditar: boolean;  
  usuarioForm: FormGroup;
  
  msgErro: string;
  msgSucesso: string;

  public password: AbstractControl;
  public confirmaPassword: AbstractControl;

  constructor(public navCtrl: NavController,
              public usuarioService: UsuarioApi,
              public formBuilder: FormBuilder,
              private logger: LoggerService,
              public navParams: NavParams) {

        this.logger.info('MudarSenhaPage :: constructor');            
        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);  
  
        this.submitted = false;      
        
        this.usuarioForm = formBuilder.group({        
          password: ["", Validators.required],
          confirmaPassword: ["", Validators.required]        
        });
        
        this.usuario = new Usuario();        
        this.msgErro = '';
        this.msgSucesso = '';
        this.limpaForm();
        this.carregarUsuario();
  }

  public carregarUsuario(){
    this.logger.info('MudarSenhaPage :: carregarUsuario');

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

    this.usuarioService.findOne(filtro).subscribe((usuario: Usuario) => { 
      this.logger.info('MudarSenhaPage :: carregarUsuario ::usuarioService.find :: sucesso :: ', usuario);
      this.usuario = usuario;      
    }, (error: any) => {
      this.logger.error('MudarSenhaPage :: carregarUsuario ::usuarioService :: error :: ', error);
    });

  }

  public mudarSenha(){
    this.logger.info('MudarSenhaPage :: mudarSenha');

    if(this.usuarioForm.valid){
      let where = {
        id: this.usuario.id
      };       

      this.usuarioService.upsertWithWhere(where, this.usuario).subscribe( sucesso => {
        this.logger.info('MudarSenhaPage :: mudarSenha :: usuarioService.upsertWithWhere() :: sucesso :: ', sucesso);
        //this.navCtrl.push(GruposListPage);   
        this.msgSucesso = 'Senha alterada com sucesso';
      }, (error: any) => {
        this.logger.error('MudarSenhaPage :: mudarSenha :: usuarioService.upsertWithWhere() :: error :: ', error);
        this.msgErro = 'Não foi possível alterar a senha';
      });
    }
  }  

  public limpaForm(){
    this.logger.info('MudarSenhaPage :: limpaForm');
        
    this.password = new FormControl('', Validators.required);
    this.confirmaPassword = new FormControl('', Validators.required);

    this.usuarioForm = new FormGroup({            
      password: this.password,
      confirmaPassword: this.confirmaPassword
    });

    this.usuarioForm.reset();  
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad MudarSenhaPage');
  }

}
