import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./app/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'my-acount',
    loadChildren: () => import('./my-acount/my-acount.module').then( m => m.MyAcountPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => {
      return m.ContactPageModule;
    })
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cadastro-efetuado',
    loadChildren: () => import('./cadastro-efetuado/cadastro-efetuado.module').then( m => m.CadastroEfetuadoPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'parametrizacao',
    loadChildren: () => import('./parametrizacao/parametrizacao.module').then( m => m.ParametrizacaoPageModule)
  },
  {
    path: 'gestao-gastos',
    loadChildren: () => import('./gestao-gastos/gestao-gastos.module').then( m => m.GestaoGastosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    [ HttpClientModule ]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
