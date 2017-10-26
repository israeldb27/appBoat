import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanoReservabarco, PlanoReservabarcoApi, LoggerService } from "../../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

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
  submitted = false;
  planoReservabarcoForm: FormGroup;

  public id: AbstractControl;
  public valorAluguel: AbstractControl;
  public diaSemana: AbstractControl;
  public dataEspecifica: AbstractControl;
  public horaInicioDisponivel: AbstractControl;
  public horaFimDisponivel: AbstractControl;
  public quantidadeHorasDisponiveis: AbstractControl;
  public status: AbstractControl;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public planoReservabarcoService: PlanoReservabarcoApi,
              private formBuilder: FormBuilder, 
              private logger: LoggerService) {

      this.logger.info('ReservasListPage :: constructor'); 
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);

      this.planoReservabarcoForm = formBuilder.group({
        valorAluguel: ["", Validators.required]          
      });

      this.planoReservabarco = new PlanoReservabarco();
      this.limparForm();
  }

  public limparForm() {    
    this.logger.info('ReservasListPage :: limparForm');
    
    this.id = new FormControl(null, []);
    this.valorAluguel = new FormControl('', Validators.required);
    this.diaSemana = new FormControl(null, []);
    this.horaInicioDisponivel = new FormControl(null, []);
    this.horaFimDisponivel = new FormControl(null, []); 
    this.quantidadeHorasDisponiveis = new FormControl(null, []); 
    this.status = new FormControl(null, []); 
    
    this.planoReservabarcoForm = new FormGroup({
     id: this.id,
     valorAluguel: this.valorAluguel,      
     diaSemana: this.diaSemana,
     horaInicioDisponivel: this.horaInicioDisponivel,
     horaFimDisponivel: this.horaFimDisponivel,
     quantidadeHorasDisponiveis:  this.quantidadeHorasDisponiveis,
     status:  this.status     
   });

 }


 public cadastrarPlanoReservaBarco(){
   this.logger.info('ReservasPlanejamentoPage :: cadastrarPlanoReservaBarco :: inicio');

   this.submitted = true;
   
   if ( this.planoReservabarcoForm.valid ){

     /*
     this.logger.info('ReservasPlanejamentoPage :: cadastrarPlanoReservaBarco :: form validado OK');
     this.planoReservabarcoService.create(this.planoReservabarco).subscribe( sucesso => {
       this.logger.info('ReservasPlanejamentoPage :: cadastrarPlanoReservaBarco :: planoReservabarcoService.create() :: sucesso :: ', sucesso);
       this.navCtrl.push(BarcosMeusPage);         
     }, (error: any) => {
       this.logger.error('ReservasPlanejamentoPage :: cadastrarPlanoReservaBarco :: planoReservabarcoService.create() :: error :: ', error);        
     });
     */
   }  
   else {
     this.logger.info('ReservasPlanejamentoPage :: cadastrarPlanoReservaBarco :: form invalido');
   }
 }

 public cancelarCadastroPlanoReservaBarco(){
   this.logger.info('ReservasPlanejamentoPage :: cancelarCadastroPlanoReservaBarco');
 }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservasPlanejamentoCreatePage');
  }

}
