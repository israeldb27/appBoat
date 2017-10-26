import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcosMeusPage } from '../pages/barcos/barcos-meus/barcos-meus';
import { BarcosPesquisaPage } from '../pages/barcos/barcos-pesquisa/barcos-pesquisa';
import { BarcosPresentFilterPage } from '../pages/barcos/barcos-present-filter/barcos-present-filter';
import { BarcosResultadoPesquisaPage } from '../pages/barcos/barcos-resultado-pesquisa/barcos-resultado-pesquisa';
import { BarcosDetailPage } from '../pages/barcos/barcos-detail/barcos-detail';
import { BarcosCreatePage } from '../pages/barcos/barcos-create/barcos-create';

import { ContaDetailPage } from '../pages/conta/conta-detail/conta-detail';

import { LoginPage } from '../pages/usuario/login/login';
import { LogoutPage } from '../pages/usuario/logout/logout';
import { UsuarioCreatePage } from '../pages/usuario/usuario-create/usuario-create';

import { PagamentosListPage } from '../pages/pagamentos/pagamentos-list/pagamentos-list';
import { PagamentosMeusPage } from '../pages/pagamentos/pagamentos-meus/pagamentos-meus';
import { PagamentosDetailPage } from '../pages/pagamentos/pagamentos-detail/pagamentos-detail';

import { ReservasPlanejamentoListPage } from '../pages/reservas/dono-barco/reservas-planejamento/reservas-planejamento-list/reservas-planejamento-list';
import { ReservasPlanejamentoCreatePage } from '../pages/reservas/dono-barco/reservas-planejamento/reservas-planejamento-create/reservas-planejamento-create';
import { ReservasPlanejamentoDetailPage } from '../pages/reservas/dono-barco/reservas-planejamento/reservas-planejamento-detail/reservas-planejamento-detail';

import { ReservasSolicitadasListPage } from '../pages/reservas/dono-barco/reservas-solicitadas/reservas-solicitadas-list/reservas-solicitadas-list';
import { ReservasSolicitadasDetailPage } from '../pages/reservas/dono-barco/reservas-solicitadas/reservas-solicitadas-detail/reservas-solicitadas-detail';

import { ReservasListPage } from '../pages/reservas/usuario-comum/reservas-list/reservas-list';


import { SobreDetailPage } from '../pages/sobre/sobre-detail/sobre-detail';

import { SDKBrowserModule } from './shared/angular-client/index';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BarcosMeusPage,
    BarcosPesquisaPage,
    BarcosPresentFilterPage,
    BarcosResultadoPesquisaPage,
    BarcosDetailPage,
    BarcosCreatePage,
    ContaDetailPage,
    PagamentosListPage,
    PagamentosMeusPage,
    PagamentosDetailPage,
    ReservasListPage,
    ReservasPlanejamentoCreatePage,
    ReservasPlanejamentoListPage,
    ReservasPlanejamentoDetailPage,
    ReservasSolicitadasListPage,
    ReservasSolicitadasDetailPage,    
    SobreDetailPage,    
    LoginPage,
    LogoutPage,
    UsuarioCreatePage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SDKBrowserModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BarcosMeusPage,
    BarcosPesquisaPage,
    BarcosPresentFilterPage,
    BarcosResultadoPesquisaPage,
    BarcosDetailPage,
    BarcosCreatePage,
    ContaDetailPage,
    PagamentosListPage,
    PagamentosMeusPage,
    PagamentosDetailPage,
    ReservasListPage,
    ReservasPlanejamentoCreatePage,
    ReservasPlanejamentoListPage,
    ReservasPlanejamentoDetailPage,
    ReservasSolicitadasListPage,
    ReservasSolicitadasDetailPage,     
    SobreDetailPage,    
    LoginPage,
    LogoutPage,
    UsuarioCreatePage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
