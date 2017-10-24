import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcosPesquisaPage } from './barcos-pesquisa';

@NgModule({
  declarations: [
    BarcosPesquisaPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcosPesquisaPage),
  ],
})
export class BarcosPesquisaPageModule {}
