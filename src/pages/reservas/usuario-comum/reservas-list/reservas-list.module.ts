import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservasListPage } from './reservas-list';

@NgModule({
  declarations: [
    ReservasListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservasListPage),
  ],
})
export class ReservasListPageModule {}
