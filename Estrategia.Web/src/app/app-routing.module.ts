import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaDetalheComponent } from './views/pessoa-detalhe/pessoa-detalhe.component';
import { PessoaListaComponent } from './views/pessoa-lista/pessoa-lista.component';

const routes: Routes = [
  {
    path: '',
    component: PessoaListaComponent
  },
  {
    path: 'Detalhe/:id',
    component: PessoaDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
