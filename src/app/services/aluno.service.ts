import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  // httpClient é um serviço angular que permite acessar endereços REST
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:8080/alunos');
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/alunos/${id}`);
  }

  save(alunoObj: any) {
    return this.http.post(`http://localhost:8080/alunos`, alunoObj);
  }

  getOne(id: number) {
    return this.http.get(`http://localhost:8080/alunos/${id}`);
  }

  update(id: number, alunoObj: any) {
    return this.http.patch(`http://localhost:8080/alunos/${id}`, alunoObj);
  }
  
}

