/* tslint:disable */

declare var Object: any;
export interface AvaliacaoUsuariosolicitanteInterface {
  "dataAvaliacao": Date;
  "pontuacao": number;
  "observacao"?: string;
  "id"?: number;
  "usuarioSolicitanteId"?: number;
  "donoBarcoId"?: number;
}

export class AvaliacaoUsuariosolicitante implements AvaliacaoUsuariosolicitanteInterface {
  "dataAvaliacao": Date;
  "pontuacao": number;
  "observacao": string;
  "id": number;
  "usuarioSolicitanteId": number;
  "donoBarcoId": number;
  constructor(data?: AvaliacaoUsuariosolicitanteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AvaliacaoUsuariosolicitante`.
   */
  public static getModelName() {
    return "AvaliacaoUsuariosolicitante";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AvaliacaoUsuariosolicitante for dynamic purposes.
  **/
  public static factory(data: AvaliacaoUsuariosolicitanteInterface): AvaliacaoUsuariosolicitante{
    return new AvaliacaoUsuariosolicitante(data);
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
      name: 'AvaliacaoUsuariosolicitante',
      plural: 'avaliacaousuariosolicitantes',
      path: 'avaliacaousuariosolicitantes',
      idName: 'id',
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
