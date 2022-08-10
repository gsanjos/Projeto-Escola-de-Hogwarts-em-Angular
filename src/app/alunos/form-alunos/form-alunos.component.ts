import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from 'src/app/services/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-alunos',
  templateUrl: './form-alunos.component.html',
  styleUrls: ['./form-alunos.component.css']
})
export class FormAlunosComponent implements OnInit {

  // Alocar a variável que vai armazenar os controladores do formulário
  meuForm : FormGroup = new FormGroup({});


  // Injentar o formBuilder para poder ajudar a criar os controladores do form
  constructor(
    private formBuilder: FormBuilder,
    private alunoService: AlunoService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }
   
 
  // Alocar os controladores na variável meuForm
  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome : [ null, [ Validators.required ]],
      casa : [ null, [ Validators.required ]],
      email : [ null, [ Validators.required ]]
    });
  }
 
  // Integrar os controles do form no HTML
  onSubmit(){
    console.log(this.meuForm.value);
    this.alunoService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          alert(`Cadastro realizado com sucesso!`);
          
          // O navigate é para redirecionar para uma outra rota de interesse
          this.router.navigate(['../form']);
        }
      ) ;
   }
   
}