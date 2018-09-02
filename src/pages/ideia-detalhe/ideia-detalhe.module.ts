import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdeiaDetalhePage } from './ideia-detalhe';

@NgModule({
  declarations: [
    IdeiaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(IdeiaDetalhePage),
  ],
})
export class IdeiaDetalhePageModule {}
