import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SobreDetailPage } from './sobre-detail';

@NgModule({
  declarations: [
    SobreDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SobreDetailPage),
  ],
})
export class SobreDetailPageModule {}
