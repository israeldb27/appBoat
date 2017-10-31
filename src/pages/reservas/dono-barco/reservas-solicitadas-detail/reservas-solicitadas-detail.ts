import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Barco, BarcoApi, ReservaBarco, ReservaBarcoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-reservas-solicitadas-detail',
  templateUrl: 'reservas-solicitadas-detail.html',
})
export class ReservasSolicitadasDetailPage {


  barco: Barco;
  reservaBarco: ReservaBarco;
  public submitted: boolean;
  reservaBarcoForm: FormGroup;

  public id: AbstractControl;
  public statusReserva: AbstractControl;  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private reservaBarcoService: ReservaBarcoApi,              
              private formBuilder: FormBuilder, 
              private logger: LoggerService) {
      
        this.logger.info('ReservasSolicitadasDetailPage :: constructor');   
        this.submitted = false;
        this.barco = new Barco();
        this.reservaBarco = new ReservaBarco();
        this.reservaBarcoForm = formBuilder.group({
          statusReserva: ["", Validators.required]          
        });
        this.limparForm();  
        this.carregaDetalhesReservaBarco();     
  }

  public carregaDetalhesReservaBarco() {
    this.logger.info('ReservasSolicitadasDetailPage :: carregaDetalhesReservaBarco');
    this.reservaBarco = this.navParams.get('reservaBarco');
    this.logger.info('ReservasSolicitadasDetailPage :: carregaDetalhesReservaBarco :: Reserva Barco', this.reservaBarco );
  }

  public alterarStatusReservaBarco(): void {
    this.logger.info('ReservasSolicitadasDetailPage :: alterarStatusReservaBarco');     
    
    this.submitted = true;
    
    if ( this.reservaBarcoForm.valid ){
      this.logger.info('ReservasSolicitadasDetailPage :: alterarStatusReservaBarco :: form valido Ok');
      let where = {
        id: this.reservaBarco.id
      }; 
         
      this.reservaBarcoService.upsertWithWhere(where, this.reservaBarco).subscribe( sucesso => {    
        this.logger.info('ReservasSolicitadasDetailPage :: alterarStatusReservaBarco :: reservaBarcoService.upsertWithWhere() :: sucesso :: ', sucesso);
        //this.navCtrl.push(BarcosMeusPage);         
      }, (error: any) => {
        this.logger.error('ReservasSolicitadasDetailPage :: alterarStatusReservaBarco :: reservaBarcoService.upsertWithWhere() :: error :: ', error);        
      });      
    }  
    else {
      this.logger.info('ReservasSolicitadasDetailPage :: alterarStatusReservaBarco :: form invalido');
    }

  }

  public limparForm() {
    this.logger.info('BarcosSolicitarReservaPage :: limparForm');  
    this.id = new FormControl(null, []); 
    this.statusReserva = new FormControl('', Validators.required);

    this.reservaBarcoForm = new FormGroup({
      id: this.id,
      statusReserva: this.statusReserva
    });
    
    this.reservaBarcoForm.reset();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservasSolicitadasDetailPage');
  }

}
