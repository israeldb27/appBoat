/* tslint:disable */
import {
  ReservaBarco,
  Barco
} from '../index';

declare var Object: any;
export interface PlanoReservabarcoInterface {
  "status": string;
  "dataInicio"?: Date;
  "dataFim"?: Date;
  "valorAluguelKm"?: number;
  "quantMaxPessoas"?: number;
  "distanciaMax"?: number;
  "quantHorasDisponivel"?: number;
  "opcaoPlano": string;
  "barcoId": number;
  "id"?: number;
  reservaBarcos?: ReservaBarco[];
  barco?: Barco;
}

export class PlanoReservabarco implements PlanoReservabarcoInterface {
  "status": string;
  "dataInicio": Date;
  "dataFim": Date;
  "valorAluguelKm": number;
  "quantMaxPessoas": number;
  "distanciaMax": number;
  "quantHorasDisponivel": number;
  "opcaoPlano": string;
  "barcoId": number;
  "id": number;
  reservaBarcos: ReservaBarco[];
  barco: Barco;
  constructor(data?: PlanoReservabarcoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PlanoReservabarco`.
   */
  public static getModelName() {
    return "PlanoReservabarco";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PlanoReservabarco for dynamic purposes.
  **/
  public static factory(data: PlanoReservabarcoInterface): PlanoReservabarco{
    return new PlanoReservabarco(data);
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
      name: 'PlanoReservabarco',
      plural: 'planoreservabarcos',
      path: 'planoreservabarcos',
      idName: 'id',
      properties: {
        "status": {
          name: 'status',
          type: 'string'
        },
        "dataInicio": {
          name: 'dataInicio',
          type: 'Date'
        },
        "dataFim": {
          name: 'dataFim',
          type: 'Date'
        },
        "valorAluguelKm": {
          name: 'valorAluguelKm',
          type: 'number'
        },
        "quantMaxPessoas": {
          name: 'quantMaxPessoas',
          type: 'number'
        },
        "distanciaMax": {
          name: 'distanciaMax',
          type: 'number'
        },
        "quantHorasDisponivel": {
          name: 'quantHorasDisponivel',
          type: 'number'
        },
        "opcaoPlano": {
          name: 'opcaoPlano',
          type: 'string'
        },
        "barcoId": {
          name: 'barcoId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        reservaBarcos: {
          name: 'reservaBarcos',
          type: 'ReservaBarco[]',
          model: 'ReservaBarco',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'planoreservabarcoId'
        },
        barco: {
          name: 'barco',
          type: 'Barco',
          model: 'Barco',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'barcoId'
        },
      }
    }
  }
}
