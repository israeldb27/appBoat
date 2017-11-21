/* tslint:disable */

declare var Object: any;
export interface OrdempagamentoInterface {
  "idBarco": number;
  "idPlanoReservaBarco": number;
  "idUsuarioSolicitante": number;
  "valorPagamento": number;
  "dataCriacao": Date;
  "status": string;
  "dataPagamento"?: Date;
  "dataCancelamento"?: Date;
  "id"?: number;
}

export class Ordempagamento implements OrdempagamentoInterface {
  "idBarco": number;
  "idPlanoReservaBarco": number;
  "idUsuarioSolicitante": number;
  "valorPagamento": number;
  "dataCriacao": Date;
  "status": string;
  "dataPagamento": Date;
  "dataCancelamento": Date;
  "id": number;
  constructor(data?: OrdempagamentoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Ordempagamento`.
   */
  public static getModelName() {
    return "Ordempagamento";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Ordempagamento for dynamic purposes.
  **/
  public static factory(data: OrdempagamentoInterface): Ordempagamento{
    return new Ordempagamento(data);
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
      name: 'Ordempagamento',
      plural: 'ordenspagamentos',
      path: 'ordenspagamentos',
      idName: 'id',
      properties: {
        "idBarco": {
          name: 'idBarco',
          type: 'number'
        },
        "idPlanoReservaBarco": {
          name: 'idPlanoReservaBarco',
          type: 'number'
        },
        "idUsuarioSolicitante": {
          name: 'idUsuarioSolicitante',
          type: 'number'
        },
        "valorPagamento": {
          name: 'valorPagamento',
          type: 'number'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "dataPagamento": {
          name: 'dataPagamento',
          type: 'Date'
        },
        "dataCancelamento": {
          name: 'dataCancelamento',
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
