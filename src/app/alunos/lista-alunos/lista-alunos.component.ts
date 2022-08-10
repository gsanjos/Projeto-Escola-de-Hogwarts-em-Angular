import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  alunos: Aluno[] = [];

  displayedColumns: string[] = ['id', 'nome', 'casa', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Aluno>(this.alunos);


  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private service: AlunoService) { }  

  
  ngOnInit(): void {
    this.getAll();
  }
  

  // Método que apaga um registro no Banco de Dados
  onDelete(id: number) {
    this.service.delete(id)
      .subscribe(
        ()=>{

          console.log(`deletou registro com id ${id}`);
   
          alert(`Registro ${id} apagado com sucesso!`);

          this.getAll();

        }
      )
  }
  
  // Método reutilizável que traz uma lista de todos os alunos
  private getAll(){
    
    this.service.getAll()
    .subscribe( 
      (data : any) => {
        console.log(data);

        this.alunos = data;

        this.dataSource = new MatTableDataSource(this.alunos);

        this.dataSource.paginator = this.paginator;
      }
    );

  }

  // Método da Paginação  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
