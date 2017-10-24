/* tslint:disable */

declare var Object: any;
export interface TipoFormapagamentoInterface {
  "nomeTipo": string;
  "dataCadastro": Date;
  "descricao"?: string;
  "observacao"?: string;
  "id"?: number;
  formagPagamentoUsuarios?: any[];
}

export class TipoFormapagamento implements TipoFormapagamentoInterface {
  "nomeTipo": string;
  "dataCadastro": Date;
  "descricao": string;
  "observacao": string;
  "id": number;
  formagPagamentoUsuarios: any[];
  constructor(data?: TipoFormapagamentoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TipoFormapagamento`.
   */
  public static getModelName() {
    return "TipoFormapagamento";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TipoFormapagamento for dynamic purposes.
  **/
  public static factory(data: TipoFormapagamentoInterface): TipoFormapagamento{
    return new TipoFormapagamento(data);
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
      name: 'TipoFormapagamento',
      plural: 'tipoformapagamentos',
      path: 'tipoformapagamentos',
      properties: {
        "nomeTipo": {
          name: 'nomeTipo',
          type: 'string'
        },
        "dataCadastro": {
          name: 'dataCadastro',
          type: 'Date'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "observacao": {
          name: 'observacao',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        formagPagamentoUsuarios: {
          name: 'formagPagamentoUsuarios',
          type: 'any[]',
          model: ''
        },
      }
    }
  }
}
