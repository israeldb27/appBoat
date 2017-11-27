/* tslint:disable */

declare var Object: any;
export interface FormaPagamentoUsuarioInterface {
  "dataCadastro": Date;
  "banco"?: string;
  "numeroCartao"?: number;
  "agencia"?: number;
  "conta"?: number;
  "status"?: string;
  "id"?: number;
}

export class FormaPagamentoUsuario implements FormaPagamentoUsuarioInterface {
  "dataCadastro": Date;
  "banco": string;
  "numeroCartao": number;
  "agencia": number;
  "conta": number;
  "status": string;
  "id": number;
  constructor(data?: FormaPagamentoUsuarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FormaPagamentoUsuario`.
   */
  public static getModelName() {
    return "FormaPagamentoUsuario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FormaPagamentoUsuario for dynamic purposes.
  **/
  public static factory(data: FormaPagamentoUsuarioInterface): FormaPagamentoUsuario{
    return new FormaPagamentoUsuario(data);
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
      name: 'FormaPagamentoUsuario',
      plural: 'FormaPagamentoUsuarios',
      path: 'FormaPagamentoUsuarios',
      idName: 'id',
      properties: {
        "dataCadastro": {
          name: 'dataCadastro',
          type: 'Date'
        },
        "banco": {
          name: 'banco',
          type: 'string'
        },
        "numeroCartao": {
          name: 'numeroCartao',
          type: 'number'
        },
        "agencia": {
          name: 'agencia',
          type: 'number'
        },
        "conta": {
          name: 'conta',
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
      }
    }
  }
}
