import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-atualizar-alunos',
  templateUrl: './atualizar-alunos.component.html',
  styleUrls: ['./atualizar-alunos.component.css']
})
export class AtualizarAlunosComponent implements OnInit {

  // Alocar a variável que vai armazenar os controladores do formulário
  meuForm : FormGroup = new FormGroup({});

    // id de quem estou alterando
    id : number = -1;

  // Injentar o formBuilder para poder ajudar a criar os controladores do form
  constructor(
    private formBuilder: FormBuilder,
    private alunoService: AlunoService,
    private activatedRoute: ActivatedRoute
  ) { }
   
 
  // Alocar os controladores na variável meuForm
  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome : [ null, [ Validators.required ]],
      casa : [ null, [ Validators.required ]]
    });


  
    // Pegando os parâmentros da rota
    this.activatedRoute.params.subscribe(

      (parametros: any) => {
        console.log(parametros);
      
      this.id = parametros.id;
      
      // Consultando a API para buscar todas as informações do ID a ser editado
      this.alunoService.getOne(parametros.id).subscribe(
          (dadosAlunos) => {
            console.log(dadosAlunos);

            // patchValue atualiza os campos do formulário de acordo com o nome dos controles
            this.meuForm.patchValue(dadosAlunos);
          }
        );
      }
    );
  }

  
 
   // Integrar os controles do form no HTML
  onSubmit(){
    console.log(this.meuForm.value);
    this.alunoService.update(this.id, this.meuForm.value)
        .subscribe(
        (data) => {
          console.log(data);
        }
      ) ;
  }
   

}


