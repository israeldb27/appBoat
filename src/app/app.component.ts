import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { BarcosMeusPage } from '../pages/barcos/dono-barco/barcos-meus/barcos-meus';
import { BarcosPesquisaPage } from '../pages/barcos/usuario-comum/barcos-pesquisa/barcos-pesquisa'; 

import { ContaDetailPage } from '../pages/conta/conta-detail/conta-detail';

import { LogoutPage } from '../pages/usuario/logout/logout';
import { LoginPage } from '../pages/usuario/login/login';

import { PagamentosListPage } from '../pages/pagamentos/dono-barco/pagamentos-list/pagamentos-list';
import { PagamentosMeusPage } from '../pages/pagamentos/usuario-comum/pagamentos-meus/pagamentos-meus';

import { ReservasPlanejamentoListPage } from '../pages/reservas/dono-barco/reservas-planejamento/reservas-planejamento-list/reservas-planejamento-list';
import { ReservasSolicitadasListPage } from '../pages/reservas/dono-barco/reservas-solicitadas/reservas-solicitadas-list/reservas-solicitadas-list';

import { ReservasListPage } from '../pages/reservas/usuario-comum/reservas-list/reservas-list';

import { OpcionaisListPage } from '../pages/barcos/dono-barco/opcionais/opcionais-list/opcionais-list';

import { SobreDetailPage } from '../pages/sobre/sobre-detail/sobre-detail';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = BarcosPesquisaPage;
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    this.initializeApp();


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Meus Barcos', component: BarcosMeusPage },
      { title: 'Pesquisar Barcos', component: BarcosPesquisaPage },
      { title: 'Conta', component: ContaDetailPage },
      { title: 'Pagamentos', component: PagamentosListPage },
      { title: 'Meus Pagamentos', component: PagamentosMeusPage },
      { title: 'Reservas', component: ReservasListPage }, // funcionalidade destinada para os usuarios comuns para checarem as reservas de barco que estes fizeram
      { title: 'Planejar Reservas', component: ReservasPlanejamentoListPage }, // funcionalidade destinada para os donos de barcos pssam listar os planos de reserva que estes cadastraram    
      { title: 'Reservas solicitadas', component: ReservasSolicitadasListPage }, // funcionalidade destinada para os donos de barcos para que estes possam listar as solicitacoes de reserva que foram feitas para algum de seus barcos
      { title: 'Sobre', component: SobreDetailPage },
      { title: 'Opcionais', component: OpcionaisListPage }, // temporariamente esta funcionalidade ira aparecer aqui e depois será disponivel a partir da tela de detalhes de um imovel      
      { title: 'Logout', component: LogoutPage }      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
