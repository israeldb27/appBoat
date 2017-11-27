import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservasPagamentoDetailPage } from './reservas-pagamento-detail';

@NgModule({
  declarations: [
    ReservasPagamentoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservasPagamentoDetailPage),
  ],
})
export class ReservasPagamentoDetailPageModule {}
