import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcosCreatePage } from './barcos-create';

@NgModule({
  declarations: [
    BarcosCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(BarcosCreatePage),
  ],
})
export class BarcosCreatePageModule {}
