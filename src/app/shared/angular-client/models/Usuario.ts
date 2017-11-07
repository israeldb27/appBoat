/* tslint:disable */
import {
  AvaliacaoUsuariosolicitante,
  Avaliacaodonobarco,
  ReservaBarco
} from '../index';

declare var Object: any;
export interface UsuarioInterface {
  "nome": string;
  "login": string;
  "password": string;
  "email": string;
  "status": string;
  "perfil": string;
  "cpf": string;
  "dataCadastro": Date;
  "dataNascimento": Date;
  "dataUltimaAtualizacao": Date;
  "dataUltimoAcesso"?: Date;
  "id"?: number;
  avaliacaoUsuariosolicitantes?: AvaliacaoUsuariosolicitante[];
  avaliacaoUsuariosolicitantes_fk2?: AvaliacaoUsuariosolicitante[];
  avaliacaodonobarcos?: Avaliacaodonobarco[];
  avaliacaodonobarcos_fk2?: Avaliacaodonobarco[];
  reservaBarcos_fk2?: ReservaBarco[];
}

export class Usuario implements UsuarioInterface {
  "nome": string;
  "login": string;
  "password": string;
  "email": string;
  "status": string;
  "perfil": string;
  "cpf": string;
  "dataCadastro": Date;
  "dataNascimento": Date;
  "dataUltimaAtualizacao": Date;
  "dataUltimoAcesso": Date;
  "id": number;
  avaliacaoUsuariosolicitantes: AvaliacaoUsuariosolicitante[];
  avaliacaoUsuariosolicitantes_fk2: AvaliacaoUsuariosolicitante[];
  avaliacaodonobarcos: Avaliacaodonobarco[];
  avaliacaodonobarcos_fk2: Avaliacaodonobarco[];
  reservaBarcos_fk2: ReservaBarco[];
  constructor(data?: UsuarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Usuario`.
   */
  public static getModelName() {
    return "Usuario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Usuario for dynamic purposes.
  **/
  public static factory(data: UsuarioInterface): Usuario{
    return new Usuario(data);
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
      name: 'Usuario',
      plural: 'Usuarios',
      path: 'Usuarios',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "login": {
          name: 'login',
          type: 'string'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "perfil": {
          name: 'perfil',
          type: 'string'
        },
        "cpf": {
          name: 'cpf',
          type: 'string'
        },
        "dataCadastro": {
          name: 'dataCadastro',
          type: 'Date'
        },
        "dataNascimento": {
          name: 'dataNascimento',
          type: 'Date'
        },
        "dataUltimaAtualizacao": {
          name: 'dataUltimaAtualizacao',
          type: 'Date'
        },
        "dataUltimoAcesso": {
          name: 'dataUltimoAcesso',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        avaliacaoUsuariosolicitantes: {
          name: 'avaliacaoUsuariosolicitantes',
          type: 'AvaliacaoUsuariosolicitante[]',
          model: 'AvaliacaoUsuariosolicitante',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioSolicitanteId'
        },
        avaliacaoUsuariosolicitantes_fk2: {
          name: 'avaliacaoUsuariosolicitantes_fk2',
          type: 'AvaliacaoUsuariosolicitante[]',
          model: 'AvaliacaoUsuariosolicitante',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'donoBarcoId'
        },
        avaliacaodonobarcos: {
          name: 'avaliacaodonobarcos',
          type: 'Avaliacaodonobarco[]',
          model: 'Avaliacaodonobarco',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioSolicitanteId'
        },
        avaliacaodonobarcos_fk2: {
          name: 'avaliacaodonobarcos_fk2',
          type: 'Avaliacaodonobarco[]',
          model: 'Avaliacaodonobarco',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'donoBarcoId'
        },
        reservaBarcos_fk2: {
          name: 'reservaBarcos_fk2',
          type: 'ReservaBarco[]',
          model: 'ReservaBarco',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioSolicitanteId'
        },
      }
    }
  }
}
