import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcosMeusPage } from '../pages/barcos/dono-barco/barcos-meus/barcos-meus';
import { BarcosMeusDetailPage } from '../pages/barcos/dono-barco/barcos-meus-detail/barcos-meus-detail';

import { BarcosPesquisaPage } from '../pages/barcos/usuario-comum/barcos-pesquisa/barcos-pesquisa';
import { BarcosPresentFilterPage } from '../pages/barcos/usuario-comum/barcos-present-filter/barcos-present-filter';
import { BarcosResultadoPesquisaPage } from '../pages/barcos/usuario-comum/barcos-resultado-pesquisa/barcos-resultado-pesquisa';
import { BarcosResultadoPesquisaDetailPage } from '../pages/barcos/usuario-comum/barcos-resultado-pesquisa-detail/barcos-resultado-pesquisa-detail';

import { BarcosDetailPage } from '../pages/barcos/usuario-comum/barcos-detail/barcos-detail';

import { BarcosCreatePage } from '../pages/barcos/dono-barco/barcos-create/barcos-create';

import { BarcosSolicitarReservaPage } from '../pages/barcos/usuario-comum/barcos-solicitar-reserva/barcos-solicitar-reserva';

import { ContaDetailPage } from '../pages/conta/conta-detail/conta-detail';

import { LoginPage } from '../pages/usuario/login/login';
import { LogoutPage } from '../pages/usuario/logout/logout';
import { UsuarioCreatePage } from '../pages/usuario/usuario-create/usuario-create';

import { PagamentosListPage } from '../pages/pagamentos/dono-barco/pagamentos-list/pagamentos-list';
import { PagamentosDetailPage } from '../pages/pagamentos/dono-barco/pagamentos-detail/pagamentos-detail';

import { PagamentosMeusPage } from '../pages/pagamentos/usuario-comum/pagamentos-meus/pagamentos-meus';


import { ReservasPlanejamentoListPage } from '../pages/reservas/dono-barco/reservas-planejamento/reservas-planejamento-list/reservas-planejamento-list';
import { ReservasPlanejamentoCreatePage } from '../pages/reservas/dono-barco/reservas-planejamento/reservas-planejamento-create/reservas-planejamento-create';
import { ReservasPlanejamentoDetailPage } from '../pages/reservas/dono-barco/reservas-planejamento/reservas-planejamento-detail/reservas-planejamento-detail';

import { ReservasSolicitadasListPage } from '../pages/reservas/dono-barco/reservas-solicitadas/reservas-solicitadas-list/reservas-solicitadas-list';
import { ReservasSolicitadasDetailPage } from '../pages/reservas/dono-barco/reservas-solicitadas/reservas-solicitadas-detail/reservas-solicitadas-detail';

import { ReservasListPage } from '../pages/reservas/usuario-comum/reservas-list/reservas-list';
import { ReservasDetailPage } from '../pages/reservas/usuario-comum/reservas-detail/reservas-detail';
import { ReservasPagamentoPage } from '../pages/reservas/usuario-comum/reservas-pagamento/reservas-pagamento';

import { OpcionaisListPage } from '../pages/barcos/dono-barco/opcionais/opcionais-list/opcionais-list';
import { OpcionaisCreatePage } from '../pages/barcos/dono-barco/opcionais/opcionais-create/opcionais-create';
import { OpcionaisDetailPage } from '../pages/barcos/dono-barco/opcionais/opcionais-detail/opcionais-detail';

import { AvaliacaoBarcoCreatePage } from '../pages/avaliacao-barco/avaliacao-barco-create/avaliacao-barco-create';
import { AvaliacaoBarcoListPage } from '../pages/avaliacao-barco/avaliacao-barco-list/avaliacao-barco-list';

import { AvaliacaoDonoBarcoCreatePage } from '../pages/avaliacao-dono-barco/avaliacao-dono-barco-create/avaliacao-dono-barco-create';

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
    BarcosResultadoPesquisaDetailPage,
    BarcosDetailPage,
    BarcosCreatePage,
    ContaDetailPage,    
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
    BarcosSolicitarReservaPage,
    AvaliacaoBarcoCreatePage,
    AvaliacaoBarcoListPage,
    AvaliacaoDonoBarcoCreatePage
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
    BarcosResultadoPesquisaDetailPage,
    BarcosDetailPage,
    BarcosCreatePage,
    ContaDetailPage,    
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
    BarcosSolicitarReservaPage,
    AvaliacaoBarcoCreatePage,
    AvaliacaoBarcoListPage,
    AvaliacaoDonoBarcoCreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
