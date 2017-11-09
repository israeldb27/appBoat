import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcosMeusDetailPage } from './barcos-meus-detail';

@NgModule({
  declarations: [
    BarcosMeusDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcosMeusDetailPage),
  ],
})
export class BarcosMeusDetailPageModule {}
