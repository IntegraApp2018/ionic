import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarIdeiaPage } from './criar-ideia';

@NgModule({
  declarations: [
    CriarIdeiaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarIdeiaPage),
  ],
})
export class CriarIdeiaPageModule {}
