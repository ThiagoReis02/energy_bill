import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametrizacaoPageRoutingModule } from './parametrizacao-routing.module';

import { ParametrizacaoPage } from './parametrizacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametrizacaoPageRoutingModule
  ],
  declarations: [ParametrizacaoPage]
})
export class ParametrizacaoPageModule {}
