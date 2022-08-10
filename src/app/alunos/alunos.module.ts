import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { FormAlunosComponent } from './form-alunos/form-alunos.component';
import { AtualizarAlunosComponent } from './atualizar-alunos/atualizar-alunos.component';



@NgModule({
  declarations: [
    ListaAlunosComponent,
    FormAlunosComponent,
    AtualizarAlunosComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ListaAlunosComponent,
    FormAlunosComponent,
    AtualizarAlunosComponent
  ]
})
export class AlunosModule { }
