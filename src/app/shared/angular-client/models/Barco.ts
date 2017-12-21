/* tslint:disable */
import {
  Avaliacaobarco,
  Opcional,
  ReservaBarco
} from '../index';

declare var Object: any;
export interface BarcoInterface {
  "nome": string;
  "cor"?: string;
  "pes"?: number;
  "tipoCasco"?: string;
  "motor"?: string;
  "capacidadePessoas"?: number;
  "autonomia"?: number;
  "comprimento"?: number;
  "tipoCombustivel"?: string;
  "capacidadeCombustivel"?: number;
  "velocidade"?: number;
  "quantidadeCabines"?: number;
  "observacoes"?: string;
  "descricao"?: string;
  "dataCadastro"?: Date;
  "dataUtilmaAtualizacao"?: Date;
  "idDonoBarco"?: number;
  "disponivel": string;
  "tipoBarco"?: string;
  "id"?: number;
  avaliacaobarcos?: Avaliacaobarco[];
  opcionais?: Opcional[];
  reservaBarcos?: ReservaBarco[];
}

export class Barco implements BarcoInterface {
  "nome": string;
  "cor": string;
  "pes": number;
  "tipoCasco": string;
  "motor": string;
  "capacidadePessoas": number;
  "autonomia": number;
  "comprimento": number;
  "tipoCombustivel": string;
  "capacidadeCombustivel": number;
  "velocidade": number;
  "quantidadeCabines": number;
  "observacoes": string;
  "descricao": string;
  "dataCadastro": Date;
  "dataUtilmaAtualizacao": Date;
  "idDonoBarco": number;
  "disponivel": string;
  "tipoBarco": string;
  "id": number;
  avaliacaobarcos: Avaliacaobarco[];
  opcionais: Opcional[];
  reservaBarcos: ReservaBarco[];
  constructor(data?: BarcoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Barco`.
   */
  public static getModelName() {
    return "Barco";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Barco for dynamic purposes.
  **/
  public static factory(data: BarcoInterface): Barco{
    return new Barco(data);
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
      name: 'Barco',
      plural: 'Barcos',
      path: 'Barcos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "cor": {
          name: 'cor',
          type: 'string'
        },
        "pes": {
          name: 'pes',
          type: 'number'
        },
        "tipoCasco": {
          name: 'tipoCasco',
          type: 'string'
        },
        "motor": {
          name: 'motor',
          type: 'string'
        },
        "capacidadePessoas": {
          name: 'capacidadePessoas',
          type: 'number'
        },
        "autonomia": {
          name: 'autonomia',
          type: 'number'
        },
        "comprimento": {
          name: 'comprimento',
          type: 'number'
        },
        "tipoCombustivel": {
          name: 'tipoCombustivel',
          type: 'string'
        },
        "capacidadeCombustivel": {
          name: 'capacidadeCombustivel',
          type: 'number'
        },
        "velocidade": {
          name: 'velocidade',
          type: 'number'
        },
        "quantidadeCabines": {
          name: 'quantidadeCabines',
          type: 'number'
        },
        "observacoes": {
          name: 'observacoes',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "dataCadastro": {
          name: 'dataCadastro',
          type: 'Date'
        },
        "dataUtilmaAtualizacao": {
          name: 'dataUtilmaAtualizacao',
          type: 'Date'
        },
        "idDonoBarco": {
          name: 'idDonoBarco',
          type: 'number'
        },
        "disponivel": {
          name: 'disponivel',
          type: 'string'
        },
        "tipoBarco": {
          name: 'tipoBarco',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        avaliacaobarcos: {
          name: 'avaliacaobarcos',
          type: 'Avaliacaobarco[]',
          model: 'Avaliacaobarco',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'barcoId'
        },
        opcionais: {
          name: 'opcionais',
          type: 'Opcional[]',
          model: 'Opcional',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'barcoId'
        },
        reservaBarcos: {
          name: 'reservaBarcos',
          type: 'ReservaBarco[]',
          model: 'ReservaBarco',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'barcoId'
        },
      }
    }
  }
}
