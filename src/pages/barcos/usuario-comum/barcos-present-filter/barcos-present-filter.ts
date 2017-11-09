import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Barco, BarcoApi, LoggerService } from "../../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../../app/shared/constantes";


@IonicPage()
@Component({
  selector: 'page-barcos-present-filter',
  templateUrl: 'barcos-present-filter.html',
})
export class BarcosPresentFilterPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public barcoService: BarcoApi,
              private logger: LoggerService ) {
  }

  ionViewDidLoad() {
    this.logger.info('ionViewDidLoad BarcosPresentFilterPage');
  }

}
