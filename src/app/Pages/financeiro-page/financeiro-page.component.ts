import { Component, OnInit } from '@angular/core';
import { financeiroAlunos } from 'src/app/features/financeiroAlunosInterface';
import * as moment from 'moment';
import { EscolaService } from 'src/app/services/escola.service';

@Component({
  selector: 'app-financeiro-page',
  templateUrl: './financeiro-page.component.html',
  styleUrls: ['./financeiro-page.component.css']
})
export class FinanceiroPageComponent implements OnInit {
  alunos: financeiroAlunos[] = [];
  displayedColumns: string[] = ['matricula', 'name', 'dataPagamento', 'situacao', "vizualizar"];
  alunoSituacao = ""

  constructor(private escolaService: EscolaService) {}

  dataSource: financeiroAlunos[] = [];

  ngOnInit() {
    this.getAlunos()
  }

  getAlunos(): void {
    this.escolaService.getAlunos().subscribe(
      (data) => {
        this.alunos = data;
        console.log(data);
        this.updateSituacao();
        this.dataSource = this.alunos
      },
      (error) => {
        console.error('Erro ao buscar alunos:', error);
      }
    );
  }

  updateSituacao() {
    const hoje = new Date();
  
    this.alunos.forEach(aluno => {
      const dataPagamento = moment(aluno.data_pagamento, 'DD/MM/YYYY').toDate();
  
      if (dataPagamento < hoje) {
        aluno.situacao = 'Inadimplente';
      } else {
        aluno.situacao = 'Adimplente';
      }
    });
  }
}
