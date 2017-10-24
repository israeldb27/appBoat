import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoggerService } from "../../../app/shared/angular-client/index";
import { LoopBackConfig } from "../../../app/shared/angular-client"
import { BASE_URL, API_VERSION } from "../../../app/shared/constantes";

@IonicPage()
@Component({
  selector: 'page-sobre-detail',
  templateUrl: 'sobre-detail.html',
})
export class SobreDetailPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private logger: LoggerService) {

      this.logger.info('SobreDetailPage :: constructor');           
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobreDetailPage');
  }

}
