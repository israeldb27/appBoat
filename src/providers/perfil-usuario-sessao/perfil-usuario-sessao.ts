import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {  LoggerService } from "../../app/shared/angular-client/index";


@Injectable()
export class PerfilUsuarioSessaoProvider {

  HAS_DONO_BARCO_LOGGED = 'hasDonoBarcoLogged';
  HAS_CLIENTE_LOGGED    = 'hasClienteLogged';

  constructor(public http: Http, 
              public storage: Storage,
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
  }

  public carregaMenuCliente(){
    this.logger.info('PerfilUsuarioSessaoProvider :: carregaMenuCliente');
    this.storage.set(this.HAS_CLIENTE_LOGGED, true);
  }

}
