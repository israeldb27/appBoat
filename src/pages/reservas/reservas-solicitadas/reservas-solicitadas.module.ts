import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservasSolicitadasPage } from './reservas-solicitadas';

@NgModule({
  declarations: [
    ReservasSolicitadasPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservasSolicitadasPage),
  ],
})
export class ReservasSolicitadasPageModule {}
