import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {
  private apiUrl = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) { }

  getAlunos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getAluno(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addAluno(aluno: any): Observable<any> {
    return this.http.post(this.apiUrl, aluno);
  }

  updateAluno(id: number, aluno: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, aluno);
  }

  deleteAluno(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  pesquisarAlunos(pesquisa: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/pesquisar-alunos`, pesquisa);
  }
  updateDataPagamento(id: string, data_pagamento: string): Observable<any> {
    const payload = { data_pagamento: data_pagamento };
    const headers = { 'Content-Type': 'application/json' };
  
    return this.http.put(`${this.apiUrl}/atualizar-pagamento/${id}`, payload, { headers: headers });
  }
}
