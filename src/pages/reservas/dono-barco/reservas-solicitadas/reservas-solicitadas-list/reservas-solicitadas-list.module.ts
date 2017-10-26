import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservasSolicitadasListPage } from './reservas-solicitadas-list';

@NgModule({
  declarations: [
    ReservasSolicitadasListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservasSolicitadasListPage),
  ],
})
export class ReservasSolicitadasListPageModule {}
