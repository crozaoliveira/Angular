import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroComponent } from './livro/livro.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';


const routes: Routes = [
  {
    path: 'livro/:id',
    component: LivroComponent,
    data: { title: 'Livro' }
  },
  {
    path: 'emprestimo/:id',
    component: EmprestimoComponent,
    data: { title: 'Livro' }
  },
  { path: '',
    redirectTo: '/livro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
