import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagamentosDetailPage } from './pagamentos-detail';

@NgModule({
  declarations: [
    PagamentosDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PagamentosDetailPage),
  ],
})
export class PagamentosDetailPageModule {}
