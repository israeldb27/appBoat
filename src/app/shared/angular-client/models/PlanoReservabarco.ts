/* tslint:disable */
import {
  ReservaBarco
} from '../index';

declare var Object: any;
export interface PlanoReservabarcoInterface {
  "valorAluguel": number;
  "diaSemana"?: string;
  "dataEspecifica"?: Date;
  "horaInicioDisponivel"?: number;
  "horaFimDisponivel"?: number;
  "quantidadeHorasDisponiveis"?: number;
  "status": string;
  "id"?: number;
  reservaBarcos?: ReservaBarco[];
}

export class PlanoReservabarco implements PlanoReservabarcoInterface {
  "valorAluguel": number;
  "diaSemana": string;
  "dataEspecifica": Date;
  "horaInicioDisponivel": number;
  "horaFimDisponivel": number;
  "quantidadeHorasDisponiveis": number;
  "status": string;
  "id": number;
  reservaBarcos: ReservaBarco[];
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
        "valorAluguel": {
          name: 'valorAluguel',
          type: 'number'
        },
        "diaSemana": {
          name: 'diaSemana',
          type: 'string'
        },
        "dataEspecifica": {
          name: 'dataEspecifica',
          type: 'Date'
        },
        "horaInicioDisponivel": {
          name: 'horaInicioDisponivel',
          type: 'number'
        },
        "horaFimDisponivel": {
          name: 'horaFimDisponivel',
          type: 'number'
        },
        "quantidadeHorasDisponiveis": {
          name: 'quantidadeHorasDisponiveis',
          type: 'number'
        },
        "status": {
          name: 'status',
          type: 'string'
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
      }
    }
  }
}
