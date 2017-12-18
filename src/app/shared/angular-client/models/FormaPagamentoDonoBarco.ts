/* tslint:disable */

declare var Object: any;
export interface FormaPagamentoDonoBarcoInterface {
  "dataCadastro": Date;
  "banco": number;
  "numeroCartao": number;
  "agencia": number;
  "conta": number;
  "status": string;
  "idDonoBarco": number;
  "id"?: number;
}

export class FormaPagamentoDonoBarco implements FormaPagamentoDonoBarcoInterface {
  "dataCadastro": Date;
  "banco": number;
  "numeroCartao": number;
  "agencia": number;
  "conta": number;
  "status": string;
  "idDonoBarco": number;
  "id": number;
  constructor(data?: FormaPagamentoDonoBarcoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FormaPagamentoDonoBarco`.
   */
  public static getModelName() {
    return "FormaPagamentoDonoBarco";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FormaPagamentoDonoBarco for dynamic purposes.
  **/
  public static factory(data: FormaPagamentoDonoBarcoInterface): FormaPagamentoDonoBarco{
    return new FormaPagamentoDonoBarco(data);
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
      name: 'FormaPagamentoDonoBarco',
      plural: 'FormaPagamentosDonoBarco',
      path: 'FormaPagamentosDonoBarco',
      idName: 'id',
      properties: {
        "dataCadastro": {
          name: 'dataCadastro',
          type: 'Date'
        },
        "banco": {
          name: 'banco',
          type: 'number'
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
        "idDonoBarco": {
          name: 'idDonoBarco',
          type: 'number'
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
