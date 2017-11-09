import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcosPresentFilterPage } from './barcos-present-filter';

@NgModule({
  declarations: [
    BarcosPresentFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcosPresentFilterPage),
  ],
})
export class BarcosPresentFilterPageModule {}
