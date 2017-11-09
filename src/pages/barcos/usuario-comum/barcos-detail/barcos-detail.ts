import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Barco, BarcoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";
import {  NgForm,  FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-barcos-detail',
  templateUrl: 'barcos-detail.html',
})
export class BarcosDetailPage {

  public podeEditar: boolean;
  public submitted: boolean;

  barcoForm: FormGroup;
  barco: Barco;
  public barcoTemporario: Barco;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public barcoService: BarcoApi,
              private formBuilder: FormBuilder, 
              private alertCtrl: AlertController,
              private logger: LoggerService) {

        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);
                
        this.logger.info('BarcosDetailPage :: constructor');         
        this.barcoTemporario = new Barco();
        this.barco = new Barco();        
        this.podeEditar = false;        
        this.submitted = false;
        this.visualizarDetalhesBarco();
  }

  public visualizarDetalhesBarco(){

    this.logger.info('BarcosDetailPage :: visualizarDetalhesBarco');  

  }

  public salvarBarco(): void {

    this.logger.info('BarcosDetailPage :: salvarBarco'); 

    if ( this.barcoForm.valid ){
      this.logger.info('BarcosDetailPage :: salvarBarco :: form validado OK');
      let where = {
        id: this.barco.id
      };      
      
      this.barcoService.upsertWithWhere(where, this.barco).subscribe( sucesso => {
        this.logger.info('BarcosDetailPage :: salvarBarco :: barcoService.upsertWithWhere() :: sucesso :: ', sucesso);
        //this.navCtrl.push(GruposListPage);        
      }, (error: any) => {
        this.logger.error('BarcosDetailPage :: salvarBarco :: barcoService.upsertWithWhere() :: error :: ', error);
      });
    }  
    else {
      this.logger.info('BarcosDetailPage :: salvarBarco :: form invalido');
    } 
    this.submitted = true;
  }

  public cancelarBarco(){
    this.goEditarBarco(false);
    this.barco = Object.assign({}, this.barcoTemporario);
  }



  public goEditarBarco(habilitarEdicao: boolean): void{
    this.logger.info('BarcosDetailPage :: goEditarBarco');  
    this.podeEditar = habilitarEdicao; 
  }


  public goEexcluirBarco() {
    this.logger.info('BarcosDetailPage :: goEexcluirBarco ::');
    const confirmacao = this.alertCtrl.create({
      title: 'Confirmar Exclusão',
      message: 'Deseja realmente excluir esse barco?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.logger.info('"BarcosDetailPage :: goEexcluirBarco :: Cancelar" escolhido');
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
    this.logger.info('"BarcosDetailPage :: Confirmar" escolhido');
    
      this.barcoService.deleteById(this.barco.id).subscribe(sucesso => {
        this.logger.info('BarcosDetailPage :: excluirBarco :: barcoService.deleteById() :: sucesso :: ', sucesso);
       // this.navCtrl.push(CategoriaListPage);
      }, (error: any) => {
        this.logger.error('BarcosDetailPage :: excluirBarco :: barcoService.deleteById() :: error :: ', error);
      });
   
  }


  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosDetailPage');
    this.barcoTemporario = Object.assign({}, this.barco);
  }

}
