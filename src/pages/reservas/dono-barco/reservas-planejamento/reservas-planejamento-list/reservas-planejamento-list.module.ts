import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservasPlanejamentoListPage } from './reservas-planejamento-list';

@NgModule({
  declarations: [
    ReservasPlanejamentoListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservasPlanejamentoListPage),
  ],
})
export class ReservasPlanejamentoListPageModule {}
