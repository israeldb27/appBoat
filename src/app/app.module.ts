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
import { MudarSenhaPage } from '../pages/usuario/mudar-senha/mudar-senha';

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

import { ReservasPagamentoDetailPage } from '../pages/reservas/usuario-comum/reservas-pagamento-detail/reservas-pagamento-detail';
import { ReservasPagamentoListPage } from '../pages/reservas/usuario-comum/reservas-pagamento-list/reservas-pagamento-list';

import { ReservasPagarPage } from '../pages/reservas/usuario-comum/reservas-pagar/reservas-pagar';

import { FormaPagamentoClienteDetailPage } from '../pages/forma-pagamento/usuario-comum/forma-pagamento-cliente-detail/forma-pagamento-cliente-detail';
import { FormaPagamentoDonoBarcoDetailPage } from  '../pages/forma-pagamento/dono-barco/forma-pagamento-dono-barco-detail/forma-pagamento-dono-barco-detail';

import { OpcionaisListPage } from '../pages/barcos/dono-barco/opcionais/opcionais-list/opcionais-list';
import { OpcionaisCreatePage } from '../pages/barcos/dono-barco/opcionais/opcionais-create/opcionais-create';
import { OpcionaisDetailPage } from '../pages/barcos/dono-barco/opcionais/opcionais-detail/opcionais-detail';

import { AvaliacaoBarcoCreatePage } from '../pages/avaliacao-barco/avaliacao-barco-create/avaliacao-barco-create';
import { AvaliacaoBarcoListPage } from '../pages/avaliacao-barco/avaliacao-barco-list/avaliacao-barco-list';

import { AvaliacaoDonoBarcoCreatePage } from '../pages/avaliacao-dono-barco/avaliacao-dono-barco-create/avaliacao-dono-barco-create';
import { AvaliacaoClienteCreatePage } from  '../pages/avaliacao-cliente/avaliacao-cliente-create/avaliacao-cliente-create';

import { SobreDetailPage } from '../pages/sobre/sobre-detail/sobre-detail';

import { SDKBrowserModule } from './shared/angular-client/index';
import { PerfilUsuarioSessaoProvider } from '../providers/perfil-usuario-sessao/perfil-usuario-sessao';

import { IonicStorageModule } from '@ionic/storage';
import { ReservasSolicitadasServiceProvider } from '../providers/reservas-solicitadas-service/reservas-solicitadas-service';
import { BarcosServiceProvider } from '../providers/barcos-service/barcos-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BarcosMeusPage,
    BarcosMeusDetailPage,
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
    ReservasPagamentoListPage,
    ReservasPagamentoDetailPage,
    ReservasPagarPage,
    ReservasPlanejamentoCreatePage,
    ReservasPlanejamentoListPage,
    ReservasPlanejamentoDetailPage,
    ReservasSolicitadasListPage,
    ReservasSolicitadasDetailPage,   
    FormaPagamentoClienteDetailPage, 
    FormaPagamentoDonoBarcoDetailPage,
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
    AvaliacaoDonoBarcoCreatePage,
    AvaliacaoClienteCreatePage,
    MudarSenhaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SDKBrowserModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BarcosMeusPage,
    BarcosMeusDetailPage,
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
    ReservasPagamentoListPage,
    ReservasPagamentoDetailPage,
    ReservasPagarPage,
    ReservasPlanejamentoCreatePage,
    ReservasPlanejamentoListPage,
    ReservasPlanejamentoDetailPage,
    ReservasSolicitadasListPage,
    ReservasSolicitadasDetailPage,     
    FormaPagamentoClienteDetailPage,
    FormaPagamentoDonoBarcoDetailPage,
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
    AvaliacaoDonoBarcoCreatePage,
    AvaliacaoClienteCreatePage,
    MudarSenhaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PerfilUsuarioSessaoProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReservasSolicitadasServiceProvider,
    BarcosServiceProvider
  ]
})
export class AppModule {}
