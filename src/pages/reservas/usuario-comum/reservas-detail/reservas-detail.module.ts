import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservasDetailPage } from './reservas-detail';

@NgModule({
  declarations: [
    ReservasDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservasDetailPage),
  ],
})
export class ReservasDetailPageModule {}
