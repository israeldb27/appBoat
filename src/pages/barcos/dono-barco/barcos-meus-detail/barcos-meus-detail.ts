import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Barco, BarcoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { OpcionaisListPage } from '../opcionais/opcionais-list/opcionais-list';
import { OpcionaisCreatePage } from '../opcionais/opcionais-create/opcionais-create';

import { ReservasPlanejamentoDetailPage } from '../../../reservas/dono-barco/reservas-planejamento/reservas-planejamento-detail/reservas-planejamento-detail';

@IonicPage()
@Component({
  selector: 'page-barcos-meus-detail',
  templateUrl: 'barcos-meus-detail.html',
})
export class BarcosMeusDetailPage {

    public podeEditar: boolean;

    public barco: Barco;
    public barcoTemporario: Barco;

    barcoForm: FormGroup;  
    public id: AbstractControl;
    public nome: AbstractControl;
    public cor: AbstractControl;
    public capacidadePessoas: AbstractControl; 
    public velocidade: AbstractControl; 
    public autonomia: AbstractControl;  
    public comprimento: AbstractControl;  
    public tipoCasco: AbstractControl;  
    public tipoCombustivel: AbstractControl;  
    public capacidadeCombustivel: AbstractControl;    
    public quantidadeCabines: AbstractControl;  
    public motor: AbstractControl;  
    public pes: AbstractControl;      
    public observacoes: AbstractControl;  
    public descricao: AbstractControl;  
    public dataCadastro: AbstractControl;  
    public dataUtilmaAtualizacao: AbstractControl;  
    public idDonoBarco: AbstractControl;  
    public disponivel: AbstractControl;  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public barcoService: BarcoApi,
              private formBuilder: FormBuilder, 
              private alertCtrl: AlertController,
              private logger: LoggerService) {

      this.logger.info('BarcosMeusDetailPage :: constructor');  
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);
      this.barco = new Barco();
      this.podeEditar = false;

      this.barcoForm = formBuilder.group({
        nome: ["", Validators.required]          
      });
      this.barcoTemporario = new Barco();
      this.limpaForm();  
      this.carregaDetalhesBarco();  
  }

  public confirmarExclusaoBarco(){
    this.logger.info('BarcosMeusDetailPage ::  confirmarExclusaoBarco ::  ');

    const confirmacao = this.alertCtrl.create({
      title: 'Confirmar Exclusão',
      message: 'Deseja realmente excluir esse barco?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.logger.info('"Cancelar" escolhido');
          }
        },
        {
          text: 'Confirmar',
          cssClass: 'text-danger',
          handler: () => {
            this.confirmarExclusaoBarcoHandler();
          }
        }
      ]
    });
    confirmacao.present();
}

private confirmarExclusaoBarcoHandler() {
  this.logger.info('"Confirmar" escolhido');
  
  this.barcoService.deleteById(this.barco.id).subscribe(sucesso => {
      this.logger.info('BarcosMeusDetailPage :: excluirBarco :: barcoService.deleteById() :: sucesso :: ', sucesso);
   //   this.navCtrl.push(CategoriaListPage);
    }, (error: any) => {
      this.logger.error('BarcosMeusDetailPage :: excluirBarco :: barcoService.deleteById() :: error :: ', error);
    });
   
}

  public goPlanejarReservaBarco(){
    this.logger.info('BarcosMeusDetailPage ::  goPlanejarReservaBarco ::  ');
    this.navCtrl.push(ReservasPlanejamentoDetailPage, {barco: this.barco});
  }

  public listarOpcionais(){
    this.logger.info('BarcosMeusDetailPage ::  listarOpcionais ::  ');
    this.navCtrl.push( OpcionaisListPage, { barco: this.barco});
  }

  public goAdicionarOpcionais(){
    this.logger.info('BarcosMeusDetailPage ::  goAdicionarOpcionais ::  ');
    this.navCtrl.push( OpcionaisCreatePage, { barco: this.barco});
  }

  public salvarBarco(){
    this.logger.info('BarcosMeusDetailPage :: salvarBarco :: barco selecionado ::  ', this.barco);
    
    if ( this.barcoForm.valid ){
      this.logger.info('BarcosMeusDetailPage :: salvarBarco :: form validado OK');
      let where = {
        id: this.barco.id
      };      
      
      this.barcoService.upsertWithWhere(where, this.barco).subscribe( sucesso => {
        this.logger.info('BarcosMeusDetailPage :: salvarBarco :: barcoService.upsertWithWhere() :: sucesso :: ', sucesso);
        //this.navCtrl.push(GruposListPage);        
      }, (error: any) => {
        this.logger.error('BarcosMeusDetailPage :: salvarBarco :: barcoService.upsertWithWhere() :: error :: ', error);
      });
    }  
    else {
      this.logger.info('BarcosMeusDetailPage :: salvarBarco :: form invalido');
    } 

  }

  public goEditarBarco(habilitaEditar: boolean){
    this.logger.info('BarcosMeusDetailPage :: goEditarBarco :: barco selecionado ::  ', this.barco);
    this.podeEditar = habilitaEditar;
  }
  
  
  public cancelarEditarBarco(desabilitaEditar: boolean){
    this.logger.info('BarcosMeusDetailPage :: cancelarEditarBarco' );
    this.podeEditar = desabilitaEditar;
    this.barco = Object.assign({}, this.barcoTemporario);
  }


  public carregaDetalhesBarco() {
    this.logger.info('BarcosMeusDetailPage :: carregaDetalhesBarco ');
    this.barco = this.navParams.get('barco');
  }

  public limpaForm(): void {
    this.logger.info('BarcosMeusDetailPage :: limpaForm :: inicio');
    
    this.id = new FormControl(null, []);
    this.nome = new FormControl('', Validators.required);
    this.cor = new FormControl(null, []);
    this.capacidadePessoas = new FormControl(null, []); 
    this.velocidade = new FormControl(null, []); 
    this.autonomia = new FormControl(null, []);  
    this.comprimento = new FormControl(null, []);  
    this.tipoCasco = new FormControl(null, []);  
    this.tipoCombustivel = new FormControl(null, []);  
    this.capacidadeCombustivel = new FormControl(null, []);    
    this.quantidadeCabines = new FormControl(null, []);  
    this.motor = new FormControl(null, []);  
    this.pes = new FormControl(null, []);      
    this.observacoes = new FormControl(null, []);  
    this.descricao = new FormControl(null, []);  
    this.dataCadastro = new FormControl(null, []);  
    this.dataUtilmaAtualizacao = new FormControl(null, []);  
    this.disponivel = new FormControl(null, []);  // criar campo 'Disponivel' na tabela Barcos
    
//    this.idDonoBarco = new FormControl(null, []); 

    this.barcoForm = new FormGroup({
      id: this.id,
      nome: this.nome,      
      cor: this.cor,
      capacidadePessoas: this.capacidadePessoas,
      velocidade: this.velocidade,
      autonomia:  this.autonomia,
      comprimento:  this.comprimento,
      tipoCasco:  this.tipoCasco,
      tipoCombustivel:  this.tipoCombustivel,
      capacidadeCombustivel:  this.capacidadeCombustivel,
      quantidadeCabines:  this.quantidadeCabines,
      motor:  this.motor,
      pes:   this.pes,
      observacoes:  this.observacoes,
      descricao:  this.descricao,
      dataCadastro: this.dataCadastro, 
      dataUtilmaAtualizacao: this.dataUtilmaAtualizacao,// criar campo 'Disponivel' na tabela Barcos
      disponivel: this.disponivel // criar campo 'Disponivel' na tabela Barcos      
    });

    this.barcoForm.reset();
  }


  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosMeusDetailPage');
    this.barcoTemporario = Object.assign({}, this.barco);
  }

}
