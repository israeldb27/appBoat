/* tslint:disable */

declare var Object: any;
export interface OpcionalInterface {
  "nome": string;
  "descricao"?: string;
  "observacao"?: string;
  "dataCadastro"?: Date;
  "dataUltimaAtualizacao": Date;
  "id"?: number;
  "barcoId"?: number;
}

export class Opcional implements OpcionalInterface {
  "nome": string;
  "descricao": string;
  "observacao": string;
  "dataCadastro": Date;
  "dataUltimaAtualizacao": Date;
  "id": number;
  "barcoId": number;
  constructor(data?: OpcionalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Opcional`.
   */
  public static getModelName() {
    return "Opcional";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Opcional for dynamic purposes.
  **/
  public static factory(data: OpcionalInterface): Opcional{
    return new Opcional(data);
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
      name: 'Opcional',
      plural: 'Opcionais',
      path: 'Opcionais',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "observacao": {
          name: 'observacao',
          type: 'string'
        },
        "dataCadastro": {
          name: 'dataCadastro',
          type: 'Date'
        },
        "dataUltimaAtualizacao": {
          name: 'dataUltimaAtualizacao',
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
      },
      relations: {
      }
    }
  }
}
