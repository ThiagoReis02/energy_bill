import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestaoGastosPage } from './gestao-gastos.page';

const routes: Routes = [
  {
    path: '',
    component: GestaoGastosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestaoGastosPageRoutingModule {}
