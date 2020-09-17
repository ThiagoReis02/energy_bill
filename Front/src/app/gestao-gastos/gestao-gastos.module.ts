import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestaoGastosPageRoutingModule } from './gestao-gastos-routing.module';

import { GestaoGastosPage } from './gestao-gastos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestaoGastosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GestaoGastosPage]
})
export class GestaoGastosPageModule {}
