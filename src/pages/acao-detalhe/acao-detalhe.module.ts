import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcaoDetalhePage } from './acao-detalhe';

@NgModule({
  declarations: [
    AcaoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(AcaoDetalhePage),
  ],
})
export class AcaoDetalhePageModule {}
