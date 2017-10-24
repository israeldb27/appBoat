/* tslint:disable */
import {
  Barco
} from '../index';

declare var Object: any;
export interface AvaliacaobarcoInterface {
  "dataAvaliacao": Date;
  "pontuacao": number;
  "idUsuarioSolicitante": number;
  "observacao"?: string;
  "id"?: number;
  "barcoId"?: number;
  barco?: Barco;
}

export class Avaliacaobarco implements AvaliacaobarcoInterface {
  "dataAvaliacao": Date;
  "pontuacao": number;
  "idUsuarioSolicitante": number;
  "observacao": string;
  "id": number;
  "barcoId": number;
  barco: Barco;
  constructor(data?: AvaliacaobarcoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Avaliacaobarco`.
   */
  public static getModelName() {
    return "Avaliacaobarco";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Avaliacaobarco for dynamic purposes.
  **/
  public static factory(data: AvaliacaobarcoInterface): Avaliacaobarco{
    return new Avaliacaobarco(data);
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
      name: 'Avaliacaobarco',
      plural: 'Avaliacaobarcos',
      path: 'Avaliacaobarcos',
      properties: {
        "dataAvaliacao": {
          name: 'dataAvaliacao',
          type: 'Date'
        },
        "pontuacao": {
          name: 'pontuacao',
          type: 'number'
        },
        "idUsuarioSolicitante": {
          name: 'idUsuarioSolicitante',
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
        "barcoId": {
          name: 'barcoId',
          type: 'number'
        },
      },
      relations: {
        barco: {
          name: 'barco',
          type: 'Barco',
          model: 'Barco'
        },
      }
    }
  }
}
