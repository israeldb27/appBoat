/* tslint:disable */

declare var Object: any;
export interface TipoBarcoInterface {
  "label": string;
  "value": string;
  "id"?: number;
}

export class TipoBarco implements TipoBarcoInterface {
  "label": string;
  "value": string;
  "id": number;
  constructor(data?: TipoBarcoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TipoBarco`.
   */
  public static getModelName() {
    return "TipoBarco";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TipoBarco for dynamic purposes.
  **/
  public static factory(data: TipoBarcoInterface): TipoBarco{
    return new TipoBarco(data);
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
      name: 'TipoBarco',
      plural: 'TiposBarcos',
      path: 'TiposBarcos',
      idName: 'id',
      properties: {
        "label": {
          name: 'label',
          type: 'string'
        },
        "value": {
          name: 'value',
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
