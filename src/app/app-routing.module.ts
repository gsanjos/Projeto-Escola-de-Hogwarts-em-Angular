import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarAlunosComponent } from './alunos/atualizar-alunos/atualizar-alunos.component';
import { FormAlunosComponent } from './alunos/form-alunos/form-alunos.component';
import { ListaAlunosComponent } from './alunos/lista-alunos/lista-alunos.component';
import { HomeComponent } from './tela/home/home.component';
import { NavComponent } from './tela/nav/nav.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [ 
      {path: 'home', component: HomeComponent},
      {path: 'alunos', component: ListaAlunosComponent},
      {path: 'form', component: FormAlunosComponent},
      {path: 'alunos/atualizar/:id', component: AtualizarAlunosComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
