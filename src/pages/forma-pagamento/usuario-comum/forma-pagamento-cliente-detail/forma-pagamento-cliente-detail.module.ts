import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormaPagamentoClienteDetailPage } from './forma-pagamento-cliente-detail';

@NgModule({
  declarations: [
    FormaPagamentoClienteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FormaPagamentoClienteDetailPage),
  ],
})
export class FormaPagamentoClienteDetailPageModule {}
