import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametrizacaoPage } from './parametrizacao.page';

const routes: Routes = [
  {
    path: '',
    component: ParametrizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrizacaoPageRoutingModule {}
