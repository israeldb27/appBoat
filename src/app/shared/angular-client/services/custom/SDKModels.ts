/* tslint:disable */
import { Injectable } from '@angular/core';
import { Barco } from '../../models/Barco';
import { Avaliacaobarco } from '../../models/Avaliacaobarco';
import { Opcional } from '../../models/Opcional';
import { Usuario } from '../../models/Usuario';
import { AvaliacaoUsuariosolicitante } from '../../models/AvaliacaoUsuariosolicitante';
import { Avaliacaodonobarco } from '../../models/Avaliacaodonobarco';
import { ReservaBarco } from '../../models/ReservaBarco';
import { PlanoReservabarco } from '../../models/PlanoReservabarco';
import { TipoFormapagamento } from '../../models/TipoFormapagamento';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Barco: Barco,
    Avaliacaobarco: Avaliacaobarco,
    Opcional: Opcional,
    Usuario: Usuario,
    AvaliacaoUsuariosolicitante: AvaliacaoUsuariosolicitante,
    Avaliacaodonobarco: Avaliacaodonobarco,
    ReservaBarco: ReservaBarco,
    PlanoReservabarco: PlanoReservabarco,
    TipoFormapagamento: TipoFormapagamento,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
