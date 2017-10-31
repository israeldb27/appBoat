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

import { BarcosSolicitarReservaPage } from '../pages/barcos/barcos-solicitar-reserva/barcos-solicitar-reserva';

import { ContaDetailPage } from '../pages/conta/conta-detail/conta-detail';
import { ContaEditPage } from '../pages/conta/conta-edit/conta-edit';

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
import { ReservasDetailPage } from '../pages/reservas/usuario-comum/reservas-detail/reservas-detail';
import { ReservasPagamentoPage } from '../pages/reservas/usuario-comum/reservas-pagamento/reservas-pagamento';

import { OpcionaisListPage } from '../pages/barcos/opcionais/opcionais-list/opcionais-list';
import { OpcionaisCreatePage } from '../pages/barcos/opcionais/opcionais-create/opcionais-create';
import { OpcionaisDetailPage } from '../pages/barcos/opcionais/opcionais-detail/opcionais-detail';

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
    ContaEditPage,
    PagamentosListPage,
    PagamentosMeusPage,
    PagamentosDetailPage,
    ReservasListPage,
    ReservasDetailPage,
    ReservasPagamentoPage,
    ReservasPlanejamentoCreatePage,
    ReservasPlanejamentoListPage,
    ReservasPlanejamentoDetailPage,
    ReservasSolicitadasListPage,
    ReservasSolicitadasDetailPage,    
    SobreDetailPage,    
    LoginPage,
    LogoutPage,
    UsuarioCreatePage,
    OpcionaisListPage,
    OpcionaisCreatePage,
    OpcionaisDetailPage,
    BarcosSolicitarReservaPage
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
    ContaEditPage,
    PagamentosListPage,
    PagamentosMeusPage,
    PagamentosDetailPage,
    ReservasListPage,
    ReservasDetailPage,
    ReservasPagamentoPage,
    ReservasPlanejamentoCreatePage,
    ReservasPlanejamentoListPage,
    ReservasPlanejamentoDetailPage,
    ReservasSolicitadasListPage,
    ReservasSolicitadasDetailPage,     
    SobreDetailPage,    
    LoginPage,
    LogoutPage,
    UsuarioCreatePage,
    OpcionaisListPage,
    OpcionaisCreatePage,
    OpcionaisDetailPage,
    BarcosSolicitarReservaPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
