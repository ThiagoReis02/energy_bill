import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEfetuadoPageRoutingModule } from './cadastro-efetuado-routing.module';

import { CadastroEfetuadoPage } from './cadastro-efetuado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEfetuadoPageRoutingModule
  ],
  declarations: [CadastroEfetuadoPage]
})
export class CadastroEfetuadoPageModule {}
