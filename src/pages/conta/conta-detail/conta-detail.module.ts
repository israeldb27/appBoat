import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContaDetailPage } from './conta-detail';

@NgModule({
  declarations: [
    ContaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ContaDetailPage),
  ],
})
export class ContaDetailPageModule {}
