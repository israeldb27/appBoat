import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Barco, BarcoApi, ReservaBarco, ReservaBarcoApi, LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-barcos-solicitar-reserva',
  templateUrl: 'barcos-solicitar-reserva.html',
})
export class BarcosSolicitarReservaPage {

  barco: Barco;
  reservaBarco: ReservaBarco;
  public submitted: boolean;
  reservaBarcoForm: FormGroup;

  public id: AbstractControl;
  public dataReservaBarco: AbstractControl;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private reservaBarcoService: ReservaBarcoApi,              
              private formBuilder: FormBuilder, 
              private logger: LoggerService) {

        this.logger.info('BarcosSolicitarReservaPage :: constructor');   
        this.submitted = false;
        this.barco = new Barco();
        this.reservaBarco = new ReservaBarco();
        this.reservaBarcoForm = formBuilder.group({
          dataReservaBarco: ["", Validators.required]          
        });
        this.limparForm();            

  }

  public limparForm(){
    this.logger.info('BarcosSolicitarReservaPage :: limparForm');  
    this.id = new FormControl(null, []); 
    this.dataReservaBarco = new FormControl('', Validators.required);

    this.reservaBarcoForm = new FormGroup({
      id: this.id,
      dataReservaBarco: this.dataReservaBarco
    });
    
    this.reservaBarcoForm.reset();
  }

  public cadastrarReservaBarco(): void{
    this.logger.info('BarcosSolicitarReservaPage :: cadastrarReservaBarco'); 
    this.logger.info('BarcosSolicitarReservaPage :: cadastrarReservaBarco :: Data reserva :: ', this.dataReservaBarco); 

    this.submitted = true;

    if ( this.reservaBarcoForm.valid ){            
        this.logger.info('BarcosSolicitarReservaPage :: cadastrarReservaBarco :: form validado OK');
        this.reservaBarcoService.create(this.barco).subscribe( sucesso => {
          this.logger.info('BarcosSolicitarReservaPage :: cadastrarReservaBarco :: reservaBarcoService.create() :: sucesso :: ', sucesso);
        // this.navCtrl.push(BarcosMeusPage);         
        }, (error: any) => {
          this.logger.error('BarcosSolicitarReservaPage :: cadastrarReservaBarco :: reservaBarcoService.create() :: error :: ', error);        
        });      
    }  
    else {
      this.logger.info('BarcosSolicitarReservaPage :: cadastrarReservaBarco :: form invalido');
    }
  }

  public cancelarCadastroReservaBarco() {
    this.logger.info('BarcosSolicitarReservaPage :: cancelarCadastroReservaBarco'); 
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosSolicitarReservaPage');
  }

}
