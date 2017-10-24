/* tslint:disable */

declare var Object: any;
export interface AvaliacaodonobarcoInterface {
  "dataAvaliacao": Date;
  "pontuacao": number;
  "observacao"?: string;
  "id"?: number;
  "usuarioSolicitanteId"?: number;
  "donoBarcoId"?: number;
}

export class Avaliacaodonobarco implements AvaliacaodonobarcoInterface {
  "dataAvaliacao": Date;
  "pontuacao": number;
  "observacao": string;
  "id": number;
  "usuarioSolicitanteId": number;
  "donoBarcoId": number;
  constructor(data?: AvaliacaodonobarcoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Avaliacaodonobarco`.
   */
  public static getModelName() {
    return "Avaliacaodonobarco";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Avaliacaodonobarco for dynamic purposes.
  **/
  public static factory(data: AvaliacaodonobarcoInterface): Avaliacaodonobarco{
    return new Avaliacaodonobarco(data);
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
      name: 'Avaliacaodonobarco',
      plural: 'avaliacaodonobarcos',
      path: 'avaliacaodonobarcos',
      properties: {
        "dataAvaliacao": {
          name: 'dataAvaliacao',
          type: 'Date'
        },
        "pontuacao": {
          name: 'pontuacao',
          type: 'number'
        },
        "observacao": {
          name: 'observacao',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "usuarioSolicitanteId": {
          name: 'usuarioSolicitanteId',
          type: 'number'
        },
        "donoBarcoId": {
          name: 'donoBarcoId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
