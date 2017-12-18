import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ReservaBarco, ReservaBarcoApi, LoggerService } from "../../app/shared/angular-client/index";
import { LoopBackConfig, LoopBackFilter } from "../../app/shared/angular-client"

@Injectable()
export class ReservasSolicitadasServiceProvider {

  constructor(public http: Http,
              private logger: LoggerService,
              public reservaBarcoService: ReservaBarcoApi) {

    this.logger.info('ReservasSolicitadasServiceProvider Provider');
  }

  public checarQuantidadeReservasSolicitadasDonoBarco(idDonoBarco: number): number {

      let filtro: LoopBackFilter = {
        "where": {
          "and": [
            {
              "donoBarcoId": idDonoBarco              
            },
            {
              "statusReserva": "solicitado"
            }
          ]      
        }
      };

      this.reservaBarcoService.find(filtro).subscribe( (reservaBarcos: ReservaBarco[]) => {
        return reservaBarcos.length;
      }, (error: any) => {
        this.logger.error('ReservasSolicitadasListPage :: listarReservasSolicitadas :: reservaBarcoService.find :: error :: ', error);
      });
      return 0;
  }

}
