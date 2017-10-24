import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { BarcosMeusPage } from '../pages/barcos/barcos-meus/barcos-meus';
import { BarcosPesquisaPage } from '../pages/barcos/barcos-pesquisa/barcos-pesquisa';

import { ContaDetailPage } from '../pages/conta/conta-detail/conta-detail';

import { LogoutPage } from '../pages/usuario/logout/logout';

import { PagamentosListPage } from '../pages/pagamentos/pagamentos-list/pagamentos-list';
import { PagamentosMeusPage } from '../pages/pagamentos/pagamentos-meus/pagamentos-meus';


import { ReservasListPage } from '../pages/reservas/reservas-list/reservas-list';
import { ReservasPlanejamentoPage } from '../pages/reservas/reservas-planejamento/reservas-planejamento';
import { ReservasSolicitadasPage } from '../pages/reservas/reservas-solicitadas/reservas-solicitadas';

import { SobreDetailPage } from '../pages/sobre/sobre-detail/sobre-detail';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = BarcosPesquisaPage;

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
      { title: 'Reservas', component: ReservasListPage },
      { title: 'Planejar Reservas', component: ReservasPlanejamentoPage }, // funcionalidade destinada para os donos de barcos      
      { title: 'Reservas solicitadas', component: ReservasSolicitadasPage }, // funcionalidade destinada para os donos de barcos
      { title: 'Sobre', component: SobreDetailPage },
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
