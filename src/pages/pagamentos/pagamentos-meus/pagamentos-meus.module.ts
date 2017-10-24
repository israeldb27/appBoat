import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagamentosMeusPage } from './pagamentos-meus';

@NgModule({
  declarations: [
    PagamentosMeusPage,
  ],
  imports: [
    IonicPageModule.forChild(PagamentosMeusPage),
  ],
})
export class PagamentosMeusPageModule {}
