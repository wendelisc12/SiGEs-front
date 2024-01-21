import { Component, OnInit } from '@angular/core';
import { financeiroAlunos } from 'src/app/features/financeiroAlunosInterface';
import * as moment from 'moment';

const ELEMENT_DATA: financeiroAlunos[] = [
  {matricula: "101", name: 'Alice', dataPagamento: '01/01/2024', situacao: '', vizualizar:""},
  {matricula: '202', name: 'Bob', dataPagamento: '02/01/2024', situacao: '', vizualizar:""},
  {matricula: '303', name: 'Charlie', dataPagamento: '03/01/2024', situacao: '', vizualizar:""},
  {matricula: '404', name: 'David', dataPagamento: '04/01/2024', situacao: '', vizualizar: ""},
  {matricula: '505', name: 'Eva', dataPagamento: '05/01/2024', situacao: '', vizualizar: ""},
  {matricula: '606', name: 'Frank', dataPagamento: '06/01/2024', situacao: '', vizualizar: ""},
  {matricula: '707', name: 'Grace', dataPagamento: '07/01/2024', situacao: '', vizualizar: ""},
  {matricula: '808', name: 'Helen', dataPagamento: '08/01/2024', situacao: '', vizualizar: ""},
  {matricula: '909', name: 'Ian', dataPagamento: '09/01/2024', situacao: '', vizualizar: ""}
];

@Component({
  selector: 'app-financeiro-page',
  templateUrl: './financeiro-page.component.html',
  styleUrls: ['./financeiro-page.component.css']
})
export class FinanceiroPageComponent implements OnInit {
  displayedColumns: string[] = ['matricula', 'name', 'dataPagamento', 'situacao', "vizualizar"];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
    this.updateSituacao();
  }

  updateSituacao() {
    const hoje = new Date();
    const hojeFormat = moment(hoje).format('DD/MM/YYYY');

    this.dataSource.forEach(aluno => {
      if (aluno.dataPagamento < hojeFormat) {
        aluno.situacao = 'Inadimplente';
      } else {
        aluno.situacao = 'Adimplente';
      }
    });
  }
}
