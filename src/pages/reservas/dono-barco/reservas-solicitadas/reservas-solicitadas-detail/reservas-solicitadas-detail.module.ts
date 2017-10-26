import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservasSolicitadasDetailPage } from './reservas-solicitadas-detail';

@NgModule({
  declarations: [
    ReservasSolicitadasDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservasSolicitadasDetailPage),
  ],
})
export class ReservasSolicitadasDetailPageModule {}
