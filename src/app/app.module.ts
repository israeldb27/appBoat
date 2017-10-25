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

import { ReservasListPage } from '../pages/reservas/reservas-list/reservas-list';
import { ReservasPlanejamentoPage } from '../pages/reservas/reservas-planejamento/reservas-planejamento';
import { ReservasSolicitadasPage } from '../pages/reservas/reservas-solicitadas/reservas-solicitadas';
import { ReservasDetailPage } from '../pages/reservas/reservas-detail/reservas-detail';

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
    ReservasPlanejamentoPage,
    ReservasSolicitadasPage,
    SobreDetailPage,    
    LoginPage,
    LogoutPage,
    ReservasDetailPage,
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
    ReservasPlanejamentoPage,
    ReservasSolicitadasPage,
    SobreDetailPage,    
    LoginPage,
    LogoutPage,
    ReservasDetailPage,
    UsuarioCreatePage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
