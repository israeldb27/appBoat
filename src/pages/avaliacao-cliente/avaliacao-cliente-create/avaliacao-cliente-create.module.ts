import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvaliacaoClienteCreatePage } from './avaliacao-cliente-create';

@NgModule({
  declarations: [
    AvaliacaoClienteCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(AvaliacaoClienteCreatePage),
  ],
})
export class AvaliacaoClienteCreatePageModule {}
