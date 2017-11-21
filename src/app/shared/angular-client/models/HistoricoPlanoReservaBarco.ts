/* tslint:disable */

declare var Object: any;
export interface HistoricoPlanoReservaBarcoInterface {
  "dataInicio"?: Date;
  "dataFim"?: Date;
  "valorAluguelKm"?: number;
  "quantMaxPessoas"?: number;
  "distanciaMax"?: number;
  "quantHorasDisponivel"?: number;
  "opcaoPlano": string;
  "barcoId": number;
  "dataCadastro": Date;
  "id"?: number;
}

export class HistoricoPlanoReservaBarco implements HistoricoPlanoReservaBarcoInterface {
  "dataInicio": Date;
  "dataFim": Date;
  "valorAluguelKm": number;
  "quantMaxPessoas": number;
  "distanciaMax": number;
  "quantHorasDisponivel": number;
  "opcaoPlano": string;
  "barcoId": number;
  "dataCadastro": Date;
  "id": number;
  constructor(data?: HistoricoPlanoReservaBarcoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `HistoricoPlanoReservaBarco`.
   */
  public static getModelName() {
    return "HistoricoPlanoReservaBarco";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of HistoricoPlanoReservaBarco for dynamic purposes.
  **/
  public static factory(data: HistoricoPlanoReservaBarcoInterface): HistoricoPlanoReservaBarco{
    return new HistoricoPlanoReservaBarco(data);
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
      name: 'HistoricoPlanoReservaBarco',
      plural: 'HistoricosPlanoReservaVarco',
      path: 'HistoricosPlanoReservaVarco',
      idName: 'id',
      properties: {
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
        "dataCadastro": {
          name: 'dataCadastro',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
