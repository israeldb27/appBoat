import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpcionaisCreatePage } from './opcionais-create';

@NgModule({
  declarations: [
    OpcionaisCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(OpcionaisCreatePage),
  ],
})
export class OpcionaisCreatePageModule {}
