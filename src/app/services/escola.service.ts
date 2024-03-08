import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAlunos(): Observable<any> {
    return this.http.get(`${this.apiUrl}alunos`);
  }

  getAluno(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}alunos/${id}`);
  }

  addAluno(aluno: any): Observable<any> {
    return this.http.post(`${this.apiUrl}alunos`, aluno);
  }

  updateAluno(id: string, aluno: any): Observable<any> {
    return this.http.put(`${this.apiUrl}alunos/${id}`, aluno);
  }

  deleteAluno(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}alunos/${id}`);
  }
  pesquisarAlunos(pesquisa: any): Observable<any> {
    return this.http.post(`${this.apiUrl}alunos/pesquisar-alunos`, pesquisa);
  }
  updateDataPagamento(id: string, data_pagamento: string): Observable<any> {
    const payload = { data_pagamento: data_pagamento };
    const headers = { 'Content-Type': 'application/json' };
  
    return this.http.put(`${this.apiUrl}alunos/atualizar-pagamento/${id}`, payload, { headers: headers });
  }

  getProfessores(): Observable<any> {
    return this.http.get(`${this.apiUrl}professores`);
  }

  getProfessor(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}professores/${id}`);
  }

  addProfessor(professor: any): Observable<any> {
    const payload = {
        nome: professor.nome,
        situacao: 'Não pago',
        datapagamento: null
    };
    return this.http.post(`${this.apiUrl}professores`, payload);
}

deleteProfessor(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}professores/${id}`);
}

  updateProfessor(id: string, professor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}professores/${id}`, professor);
  }

  updateProfessorDataPagamento(id: string, situacao: string): Observable<any> {
    let dataPagamento = new Date().toISOString(); // Data de pagamento atual

    const payload = {
      datapagamento: dataPagamento,
      situacao: situacao
    };
  
    const headers = { 'Content-Type': 'application/json' };
    
    // Envia a solicitação PUT para o backend
    return this.http.put(`${this.apiUrl}professores/atualizar-pagamento/${id}`, payload, { headers: headers });
  }

  getProfessoresPorNome(nome: string): Observable<any> {
    return this.http.get(`${this.apiUrl}professores/pesquisar?nome=${nome}`);
  }

  
}
