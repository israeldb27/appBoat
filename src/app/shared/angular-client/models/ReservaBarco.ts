/* tslint:disable */

declare var Object: any;
export interface ReservaBarcoInterface {
  "dataSolicitacao": Date;
  "dataPagamento"?: Date;
  "dataCancelamento"?: Date;
  "dataUltimaAtualizacao": Date;
  "statusReserva": string;
  "dataReservaBarco"?: Date;
  "id"?: number;
  "barcoId"?: number;
  "usuarioSolicitanteId"?: number;
  "planoreservabarcoId"?: number;
}

export class ReservaBarco implements ReservaBarcoInterface {
  "dataSolicitacao": Date;
  "dataPagamento": Date;
  "dataCancelamento": Date;
  "dataUltimaAtualizacao": Date;
  "statusReserva": string;
  "dataReservaBarco": Date;
  "id": number;
  "barcoId": number;
  "usuarioSolicitanteId": number;
  "planoreservabarcoId": number;
  constructor(data?: ReservaBarcoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ReservaBarco`.
   */
  public static getModelName() {
    return "ReservaBarco";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ReservaBarco for dynamic purposes.
  **/
  public static factory(data: ReservaBarcoInterface): ReservaBarco{
    return new ReservaBarco(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'ReservaBarco',
      plural: 'ReservaBarcos',
      path: 'ReservaBarcos',
      properties: {
        "dataSolicitacao": {
          name: 'dataSolicitacao',
          type: 'Date'
        },
        "dataPagamento": {
          name: 'dataPagamento',
          type: 'Date'
        },
        "dataCancelamento": {
          name: 'dataCancelamento',
          type: 'Date'
        },
        "dataUltimaAtualizacao": {
          name: 'dataUltimaAtualizacao',
          type: 'Date'
        },
        "statusReserva": {
          name: 'statusReserva',
          type: 'string',
          default: 'dataReservaBarco'
        },
        "dataReservaBarco": {
          name: 'dataReservaBarco',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "barcoId": {
          name: 'barcoId',
          type: 'number'
        },
        "usuarioSolicitanteId": {
          name: 'usuarioSolicitanteId',
          type: 'number'
        },
        "planoreservabarcoId": {
          name: 'planoreservabarcoId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
