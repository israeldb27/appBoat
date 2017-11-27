import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormaPagamentoClienteCreatePage } from './forma-pagamento-cliente-create';

@NgModule({
  declarations: [
    FormaPagamentoClienteCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(FormaPagamentoClienteCreatePage),
  ],
})
export class FormaPagamentoClienteCreatePageModule {}
