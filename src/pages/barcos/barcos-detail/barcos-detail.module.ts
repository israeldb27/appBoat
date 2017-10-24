import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcosDetailPage } from './barcos-detail';

@NgModule({
  declarations: [
    BarcosDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcosDetailPage),
  ],
})
export class BarcosDetailPageModule {}
