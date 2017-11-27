import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservasPagamentoListPage } from './reservas-pagamento-list';

@NgModule({
  declarations: [
    ReservasPagamentoListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservasPagamentoListPage),
  ],
})
export class ReservasPagamentoListPageModule {}
