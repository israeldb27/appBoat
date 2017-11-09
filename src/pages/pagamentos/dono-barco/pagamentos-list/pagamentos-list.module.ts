import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagamentosListPage } from './pagamentos-list';

@NgModule({
  declarations: [
    PagamentosListPage,
  ],
  imports: [
    IonicPageModule.forChild(PagamentosListPage),
  ],
})
export class PagamentosListPageModule {}
