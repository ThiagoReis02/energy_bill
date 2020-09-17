import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEfetuadoPage } from './cadastro-efetuado.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEfetuadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEfetuadoPageRoutingModule {}
