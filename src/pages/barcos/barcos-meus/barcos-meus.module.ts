import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcosMeusPage } from './barcos-meus';

@NgModule({
  declarations: [
    BarcosMeusPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcosMeusPage),
  ],
})
export class BarcosMeusPageModule {}
