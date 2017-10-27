import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpcionaisListPage } from './opcionais-list';

@NgModule({
  declarations: [
    OpcionaisListPage,
  ],
  imports: [
    IonicPageModule.forChild(OpcionaisListPage),
  ],
})
export class OpcionaisListPageModule {}
