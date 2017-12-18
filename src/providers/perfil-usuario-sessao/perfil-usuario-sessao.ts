import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {  LoggerService } from "../../app/shared/angular-client/index";
import { Events } from 'ionic-angular';


@Injectable()
export class PerfilUsuarioSessaoProvider {

  HAS_DONO_BARCO_LOGGED = 'hasDonoBarcoLogged';
  HAS_CLIENTE_LOGGED    = 'hasClienteLogged';

  constructor(public http: Http, 
              public storage: Storage,
              public events: Events,
              private logger: LoggerService) {

    this.logger.info('PerfilUsuarioSessaoProvider :: constructor');
  }


  hasDonoBarcoLogged(): Promise<boolean> {
    this.logger.info('PerfilUsuarioSessaoProvider :: hasDonoBarcoLogged');
    return this.storage.get(this.HAS_DONO_BARCO_LOGGED).then((value) => {
      return value === true;
    });
  }; 

  hasClienteLogged(): Promise<boolean> {
    this.logger.info('PerfilUsuarioSessaoProvider :: hasClienteLogged');
    return this.storage.get(this.HAS_CLIENTE_LOGGED).then((value) => {
      return value === true;
    });
  };

  public carregaMenuDonoBarco(){
    this.logger.info('PerfilUsuarioSessaoProvider :: carregaMenuDonoBarco');
    this.storage.set(this.HAS_DONO_BARCO_LOGGED, true);
    this.storage.set(this.HAS_CLIENTE_LOGGED, false);
    this.events.publish('user:donoBarco');
  }

  public carregaMenuCliente(){
    this.logger.info('PerfilUsuarioSessaoProvider :: carregaMenuCliente');
    this.storage.set(this.HAS_CLIENTE_LOGGED, true);
    this.storage.set(this.HAS_DONO_BARCO_LOGGED, false);
    this.events.publish('user:cliente');
  }

  public logout(){
    this.logger.info('PerfilUsuarioSessaoProvider :: carregaMenuCliente');

    this.storage.remove(this.HAS_DONO_BARCO_LOGGED);
    this.storage.remove(this.HAS_CLIENTE_LOGGED);
    this.events.publish('user:logout');
  }

}
