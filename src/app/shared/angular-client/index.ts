/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { JSONSearchParams } from './services/core/search.params';
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { SocketBrowser } from './sockets/socket.browser';
import { SocketDriver } from './sockets/socket.driver';
import { SocketConnection } from './sockets/socket.connections';
import { RealTime } from './services/core/real.time';
import { BarcoApi } from './services/custom/Barco';
import { AvaliacaobarcoApi } from './services/custom/Avaliacaobarco';
import { OpcionalApi } from './services/custom/Opcional';
import { UsuarioApi } from './services/custom/Usuario';
import { AvaliacaoUsuariosolicitanteApi } from './services/custom/AvaliacaoUsuariosolicitante';
import { AvaliacaodonobarcoApi } from './services/custom/Avaliacaodonobarco';
import { ReservaBarcoApi } from './services/custom/ReservaBarco';
import { PlanoReservabarcoApi } from './services/custom/PlanoReservabarco';
import { TipoFormapagamentoApi } from './services/custom/TipoFormapagamento';
import { FormaPagamentoUsuarioApi } from './services/custom/FormaPagamentoUsuario';
import { OrdempagamentoApi } from './services/custom/Ordempagamento';
import { HistoricoPlanoReservaBarcoApi } from './services/custom/HistoricoPlanoReservaBarco';
import { FormaPagamentoDonoBarcoApi } from './services/custom/FormaPagamentoDonoBarco';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler,
    SocketConnection
  ]
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }): ModuleWithProviders {
    return {
      ngModule  : SDKBrowserModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        JSONSearchParams,
        SDKModels,
        RealTime,
        BarcoApi,
        AvaliacaobarcoApi,
        OpcionalApi,
        UsuarioApi,
        AvaliacaoUsuariosolicitanteApi,
        AvaliacaodonobarcoApi,
        ReservaBarcoApi,
        PlanoReservabarcoApi,
        TipoFormapagamentoApi,
        FormaPagamentoUsuarioApi,
        OrdempagamentoApi,
        HistoricoPlanoReservaBarcoApi,
        FormaPagamentoDonoBarcoApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser },
        { provide: SocketDriver, useClass: SocketBrowser }
      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';

