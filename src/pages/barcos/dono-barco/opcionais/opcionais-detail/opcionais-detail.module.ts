import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpcionaisDetailPage } from './opcionais-detail';

@NgModule({
  declarations: [
    OpcionaisDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OpcionaisDetailPage),
  ],
})
export class OpcionaisDetailPageModule {}
