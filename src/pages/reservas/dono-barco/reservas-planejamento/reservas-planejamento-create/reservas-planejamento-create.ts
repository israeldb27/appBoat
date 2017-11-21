import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanoReservabarco, PlanoReservabarcoApi, Barco,  HistoricoPlanoReservaBarco, HistoricoPlanoReservaBarcoApi, LoggerService } from "../../../../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReservasPlanejamentoListPage } from '../reservas-planejamento-list/reservas-planejamento-list';
import { ReservasPlanejamentoDetailPage } from '../reservas-planejamento-detail/reservas-planejamento-detail';
/**
 *  Descricao: usado para que o Dono do barco possa cadastrar um plano 
 *             de quando o seu barco estará disponível para que outras 
 *             pessoas possam solicitar reserva de alugue do barco
 * 
 */

@IonicPage()
@Component({
  selector: 'page-reservas-planejamento-create',
  templateUrl: 'reservas-planejamento-create.html',
})
export class ReservasPlanejamentoCreatePage {

  public planoReservabarco: PlanoReservabarco;
  public planoReservabarcoOld: PlanoReservabarco;
  submitted = false;
  planoReservabarcoForm: FormGroup;

  public barco: Barco;
  public historico: HistoricoPlanoReservaBarco;

  public id: AbstractControl;
  public valorAluguelKm: AbstractControl;
  public dataInicio: AbstractControl;
  public dataFim: AbstractControl;
  public quantMaxPessoas: AbstractControl;
  public distanciaMax: AbstractControl;
  public quantHorasDisponivel: AbstractControl;
  public opcaoPlano: AbstractControl;
  public status: AbstractControl;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private planoReservabarcoService: PlanoReservabarcoApi,
              private historicoPlanoReservaBarcoService: HistoricoPlanoReservaBarcoApi,
              private formBuilder: FormBuilder, 
              private logger: LoggerService) {

      this.logger.info('ReservasPlanejamentoCreatePage :: constructor'); 
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);

      this.planoReservabarcoForm = formBuilder.group({
        valorAluguelKm: ["", Validators.required],
        opcaoPlano: ["", Validators.required]          
      });

      this.barco = new Barco();
      this.historico = new HistoricoPlanoReservaBarco();
      this.planoReservabarco = new PlanoReservabarco();
      this.planoReservabarcoOld = new PlanoReservabarco();
      this.limparForm();
      this.carregarDetalhesBarco();
  }

  public carregarDetalhesBarco(){
    this.logger.info('ReservasPlanejamentoCreatePage :: carregarDetalhesBarco');
    this.barco = this.navParams.get('barco');
  }

  public limparForm() {    
    this.logger.info('ReservasPlanejamentoCreatePage :: limparForm');
    
    this.id = new FormControl(null, []);
    this.valorAluguelKm = new FormControl('', Validators.required);
    this.dataInicio = new FormControl(null, []);
    this.dataFim = new FormControl(null, []);
    this.quantMaxPessoas = new FormControl(null, []); 
    this.distanciaMax = new FormControl(null, []); 
    this.quantHorasDisponivel = new FormControl(null, []); 
    this.opcaoPlano = new FormControl('', Validators.required); 
    this.status = new FormControl(null, []); 

    this.planoReservabarcoForm = new FormGroup({
     id: this.id,
     valorAluguelKm: this.valorAluguelKm,      
     dataInicio: this.dataInicio,
     dataFim: this.dataFim,
     quantMaxPessoas: this.quantMaxPessoas,
     distanciaMax:  this.distanciaMax,
     quantHorasDisponivel:  this.quantHorasDisponivel,
     opcaoPlano:  this.opcaoPlano,
     status:  this.status     
   });

   this.planoReservabarcoForm.reset();

 }


 public cadastrarPlanoReservaBarco(){
   this.logger.info('ReservasPlanejamentoCreatePage :: cadastrarPlanoReservaBarco :: inicio');

   this.submitted = true;   
   if ( this.planoReservabarcoForm.valid ){  

     this.planoReservabarco.status = "criado";
     this.planoReservabarco.barcoId = this.barco.id;
     this.logger.info('ReservasPlanejamentoCreatePage :: cadastrarPlanoReservaBarco :: plano', this.planoReservabarco);    
     this.logger.info('ReservasPlanejamentoCreatePage :: cadastrarPlanoReservaBarco :: form validado OK');
    
     this.planoReservabarcoService.create(this.planoReservabarco).subscribe( sucesso => {
       this.logger.info('ReservasPlanejamentoCreatePage :: cadastrarPlanoReservaBarco :: planoReservabarcoService.create() :: sucesso :: ', sucesso);
       this.cadastrarHistoricoPlanoReserva(this.barco, this.planoReservabarco); 
       this.navCtrl.push(ReservasPlanejamentoDetailPage, {barco: this.barco});         
     }, (error: any) => {
       this.logger.error('ReservasPlanejamentoCreatePage :: cadastrarPlanoReservaBarco :: planoReservabarcoService.create() :: error :: ', error);        
     });     
   }  
   else {
     this.logger.error('ReservasPlanejamentoCreatePage :: cadastrarPlanoReservaBarco :: form invalido');
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
   this.logger.info('ReservasPlanejamentoCreatePage :: cancelarCadastroPlanoReservaBarco');
   this.navCtrl.pop();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservasPlanejamentoCreatePage');
  }

}
