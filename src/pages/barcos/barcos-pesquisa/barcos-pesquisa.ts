import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';

import { BarcosPresentFilterPage } from '../barcos-present-filter/barcos-present-filter';
import { BarcosResultadoPesquisaPage } from '../barcos-resultado-pesquisa/barcos-resultado-pesquisa';

@IonicPage()
@Component({
  selector: 'page-barcos-pesquisa',
  templateUrl: 'barcos-pesquisa.html',
})
export class BarcosPesquisaPage {

  public dataInicio: AbstractControl;
  public dataFim: AbstractControl;
  public barcoForm: FormGroup;
  public submitted = false;
  excludeTracks: any = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public formBuilder: FormBuilder) {

        console.log('BarcosPesquisaPage :: constructor  ');

        this.barcoForm = formBuilder.group({
           dataInicio: ["", Validators.required],
           dataFim: ["", Validators.required]
        });   

        this.limparForm();     
  }

  public pesquisarBarcos(): void {

    console.log('BarcosPesquisaPage :: pesquisarBarcos  ');
    console.log('BarcosPesquisaPage :: pesquisarBarcos  :: dataInicio', this.dataInicio.value);
    console.log('BarcosPesquisaPage :: pesquisarBarcos  :: dataFim', this.dataFim.value);

    this.submitted = true;

    this.navCtrl.push(BarcosResultadoPesquisaPage);

  }

  public presentFilter() {
     console.log('BarcosPesquisaPage :: presentFilter  ');
    let modal = this.modalCtrl.create(BarcosPresentFilterPage, this.excludeTracks);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
       // this.updateSchedule();
      }
    });

  }

  public limparForm():void{
      console.log('BarcosPesquisaPage :: limparForm  ');
      this.dataInicio = new FormControl(null,Validators.required);
      this.dataFim = new FormControl(null,Validators.required);
    
      this.barcoForm = new FormGroup({
        dataInicio: this.dataInicio,
        dataFim: this.dataFim      
      });
      this.barcoForm.reset();
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcosPesquisaPage');
  }

}
