import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PlanoReservabarco, PlanoReservabarcoApi, Barco, HistoricoPlanoReservaBarco, HistoricoPlanoReservaBarcoApi, LoggerService } from "../../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ReservasPlanejamentoListPage } from '../reservas-planejamento-list/reservas-planejamento-list';
import { ReservasPlanejamentoCreatePage } from '../reservas-planejamento-create/reservas-planejamento-create';
/**
 * Descricao:  Permite ao dono do barco visualizar os detalhes as 
 *             informações de uma plano de reserva de barco que ele criou
 * 
 *  Obs.: Cada barco vai ter no maximo um único plano reserva ativo
 *  Obs.: O "reservas-planejamento-list" vai armazenar o historico de planos de reservas anteriores
 *        criados para barcos, isto é, planos de reserva não ativos.
 * 
 */

@IonicPage()
@Component({
  selector: 'page-reservas-planejamento-detail',
  templateUrl: 'reservas-planejamento-detail.html',
})
export class ReservasPlanejamentoDetailPage {

  
  public planoReservabarco: PlanoReservabarco;
  public planoReservabarcoTemporario: PlanoReservabarco;
  public planoReservabarcoOld: PlanoReservabarco;
  submitted = false;
  planoReservabarcoForm: FormGroup;
  podeEditar: boolean = false;
  public mensagemRetorno: any;
  public existePlano: boolean;
  public barco: Barco;
  public historico: HistoricoPlanoReservaBarco;
  public id: AbstractControl;
  public status: AbstractControl;
  public dataInicio: AbstractControl;
  public dataFim: AbstractControl;
  public valorAluguelKm: AbstractControl;
  public quantMaxPessoas: AbstractControl;
  public distanciaMax: AbstractControl;
  public quantHorasDisponivel: AbstractControl;
  public opcaoPlano: AbstractControl;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public planoReservabarcoService: PlanoReservabarcoApi,
              private historicoPlanoReservaBarcoService: HistoricoPlanoReservaBarcoApi,
              private formBuilder: FormBuilder, 
              private alertCtrl: AlertController,
              private logger: LoggerService) {

          this.logger.info('ReservasPlanejamentoDetailPage :: constructor'); 
          LoopBackConfig.setBaseURL(BASE_URL);
          LoopBackConfig.setApiVersion(API_VERSION);

          this.planoReservabarcoForm = formBuilder.group({
            valorAluguelKm: ["", Validators.required],
            opcaoPlano: ["", Validators.required]            
          });

          this.existePlano = false;
          this.podeEditar = false;
          this.planoReservabarco = new PlanoReservabarco();
          this.planoReservabarcoTemporario = new PlanoReservabarco();   
          this.barco = new Barco();       
          this.historico = new HistoricoPlanoReservaBarco();
          this.limparForm();
          this.carregarDetalhesBarco();
          this.carregaDetalhePlanoReservaBarco();
  }

  public goListarPlano(){
    this.logger.info('ReservasPlanejamentoDetailPage :: goListarPlano '); 
    this.navCtrl.push(ReservasPlanejamentoListPage,{ barco: this.barco});
  }

  public goCriarNovoPlano(){
    this.logger.info('ReservasPlanejamentoDetailPage :: goCriarNovoPlano :: barco selecionado :: ', this.barco); 
    this.navCtrl.push(ReservasPlanejamentoCreatePage, {barco: this.barco})
  }

  public carregarDetalhesBarco(){
    this.logger.info('ReservasPlanejamentoDetailPage :: carregarDetalhesBarco'); 
    this.barco = this.navParams.get('barco');
    this.logger.info('ReservasPlanejamentoDetailPage :: carregarDetalhesBarco :: barco selecionado :: ', this.barco); 
  }

  public goExcluirReserva() {
    this.logger.info('Selecionada opção de Excluir Plano Reserva Barco');
    const confirmacao = this.alertCtrl.create({
      title: 'Confirmar Exclusão',
      message: 'Deseja realmente excluir esse plano reserva barco?',
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
            this.confirmarExclusaoPlanoReservaBarcoHandler();
          }
        }
      ]
    });
    confirmacao.present();
  }

  private confirmarExclusaoPlanoReservaBarcoHandler() {
    this.logger.info('"Confirmar" escolhido');
    
      this.planoReservabarcoService.deleteById(this.planoReservabarco.id).subscribe(sucesso => {
        this.logger.info('ReservasPlanejamentoDetailPage :: confirmarExclusaoPlanoReservaBarcoHandler :: opcionalService.deleteById() :: sucesso :: ', sucesso);
        this.navCtrl.push(ReservasPlanejamentoListPage);
      }, (error: any) => {
        this.logger.error('ReservasPlanejamentoDetailPage :: confirmarExclusaoPlanoReservaBarcoHandler :: opcionalService.deleteById() :: error :: ', error);
      });
    
  }


  public goEditarReserva(habilitaEdicao: boolean): void{
    this.podeEditar = habilitaEdicao;  
  }

  public cancelarEdicaoPlanoReservaBarco(){
    this.goEditarReserva(false);
    this.planoReservabarco = Object.assign({}, this.planoReservabarcoTemporario);
  }

  public carregaDetalhePlanoReservaBarco():void {
    this.logger.info('ReservasPlanejamentoDetailPage :: carregaDetalhePlanoReservaBarco :: inicio');
    this.submitted = false;
    this.podeEditar = false;

    let filtro: LoopBackFilter = {
      "where": {
        "and": [
          {
            "barcoId": this.barco.id              
          },          
          {
            "status": "criado"             
          }
        ]      
      }
    };

    this.planoReservabarcoService.find(filtro).subscribe((planoReservabarcos: PlanoReservabarco[]) => { 
      this.logger.info('ReservasPlanejamentoDetailPage :: carregaDetalhePlanoReservaBarco ::planoReservabarcoService.find :: sucesso :: ', planoReservabarcos);
      if ( planoReservabarcos.length == 0 ){
          this.mensagemRetorno = 'Barco não possui nenhum associado';
          this.existePlano = false;
      } 
      if ( planoReservabarcos.length == 1 ){    
        let plano = planoReservabarcos[0];
        this.planoReservabarco = plano;
        this.planoReservabarcoOld = plano;
        this.podeEditar = false;
        this.existePlano = true;
        this.logger.info('ReservasPlanejamentoDetailPage :: carregaDetalhePlanoReservaBarco :: ', this.planoReservabarco);
      } 
    }, (error: any) => {
      this.logger.error('ReservasPlanejamentoDetailPage :: carregaDetalhePlanoReservaBarco ::planoReservabarcoService.find :: error :: ', error);
    });
  }

  public limparForm() {    
    this.logger.info('ReservasPlanejamentoDetailPage :: limparForm');
    
    this.id = new FormControl(null, []);
    this.valorAluguelKm = new FormControl('', Validators.required);
    this.quantMaxPessoas = new FormControl(null, []);
    this.distanciaMax = new FormControl(null, []);
    this.quantHorasDisponivel = new FormControl(null, []); 
    this.opcaoPlano = new FormControl('', Validators.required);
    this.status = new FormControl(null, []); 
    this.dataInicio = new FormControl(null, []); 
    this.dataFim = new FormControl(null, []); 
    
    this.planoReservabarcoForm = new FormGroup({
     id: this.id,
     valorAluguelKm: this.valorAluguelKm,      
     quantMaxPessoas: this.quantMaxPessoas,
     distanciaMax: this.distanciaMax,
     quantHorasDisponivel: this.quantHorasDisponivel,
     opcaoPlano:  this.opcaoPlano,
     dataInicio:  this.dataInicio,
     dataFim:  this.dataFim,
     status:  this.status     
   });

 }

 

 public salvarPlanoReservaBarco(){
  this.logger.info('ReservasPlanejamentoPage :: salvarPlanoReservaBarco :: inicio');

  this.submitted = true;
  
  if ( this.planoReservabarcoForm.valid ){
    
    let where = {
      id: this.planoReservabarco.id
    }; 
      
    this.planoReservabarcoService.upsertWithWhere(where, this.planoReservabarco).subscribe( sucesso => {    
      this.logger.info('ReservasPlanejamentoPage :: salvarPlanoReservaBarco :: planoReservabarcoService.create() :: sucesso :: ', sucesso);
      //this.navCtrl.push(BarcosMeusPage); 
      this.cadastrarHistoricoPlanoReserva(this.barco, this.planoReservabarcoOld);  
      this.podeEditar = false;      
    }, (error: any) => {
      this.logger.error('ReservasPlanejamentoPage :: salvarPlanoReservaBarco :: planoReservabarcoService.create() :: error :: ', error);        
    });
    
  }  
  else {
    this.logger.info('ReservasPlanejamentoPage :: salvarPlanoReservaBarco :: form invalido');
  }
}

public cadastrarHistoricoPlanoReserva(barco: Barco, planoReserva: PlanoReservabarco) {
  this.logger.info('ReservasPlanejamentoCreatePage :: cadastrarHistoricoPlanoReserva :: barco selecionado :: ', barco);
  
  this.historico.dataCadastro = new Date();
  this.historico.dataFim = planoReserva.dataFim;
  this.historico.dataInicio = planoReserva.dataInicio;
  this.historico.opcaoPlano = planoReserva.opcaoPlano;
  this.historico.distanciaMax = planoReserva.distanciaMax;
  this.historico.quantHorasDisponivel= planoReserva.quantHorasDisponivel;
  this.historico.quantMaxPessoas = planoReserva.quantMaxPessoas;
  this.historico.valorAluguelKm = planoReserva.valorAluguelKm;
  this.historico.barcoId = barco.id;

  this.historicoPlanoReservaBarcoService.create(this.historico).subscribe( sucesso => {
    this.logger.info('ReservasPlanejamentoCreatePage :: cadastrarHistoricoPlanoReserva :: historicoPlanoReservaBarcoService.create() :: sucesso :: ', sucesso);        
  }, (error: any) => {
    this.logger.error('ReservasPlanejamentoCreatePage :: cadastrarHistoricoPlanoReserva :: historicoPlanoReservaBarcoService.create() :: error :: ', error);        
  });
}

public cancelarCadastroPlanoReservaBarco(){
  this.logger.info('ReservasPlanejamentoPage :: cancelarEdicaoPlanoReservaBarco');
}

public cancelarSalvarPlano(){
  this.logger.info('ReservasPlanejamentoPage :: cancelarEdicaoPlanoReservaBarco');
  this.carregaDetalhePlanoReservaBarco();
}

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad ReservasPlanejamentoDetailPage');
    this.planoReservabarcoTemporario = Object.assign({}, this.planoReservabarco);
  }

}
