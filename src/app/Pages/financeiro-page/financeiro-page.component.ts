import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  matricula: string;
  dataPagamento: string;
  situacao: string;
  vizualizar: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {matricula: "101", name: 'Alice', dataPagamento: '1º ano', situacao: 'Manhã', vizualizar:""},
    {matricula: '202', name: 'Bob', dataPagamento: '2º ano', situacao: 'Tarde', vizualizar:""},
    {matricula: '303', name: 'Charlie', dataPagamento: '3º ano', situacao: 'Manhã', vizualizar:""},
    {matricula: '404', name: 'David', dataPagamento: '4º ano', situacao: 'Tarde', vizualizar: ""},
    {matricula: '505', name: 'Eva', dataPagamento: '5º ano', situacao: 'Manhã', vizualizar: ""},
    {matricula: '606', name: 'Frank', dataPagamento: '6º ano', situacao: 'Tarde', vizualizar: ""},
    {matricula: '707', name: 'Grace', dataPagamento: '7º ano', situacao: 'Manhã', vizualizar: ""},
    {matricula: '808', name: 'Helen', dataPagamento: '8º ano', situacao: 'Tarde', vizualizar: ""},
    {matricula: '909', name: 'Ian', dataPagamento: '9º ano', situacao: 'Manhã', vizualizar: ""}  
];

@Component({
  selector: 'app-financeiro-page',
  templateUrl: './financeiro-page.component.html',
  styleUrls: ['./financeiro-page.component.css']
})
export class FinanceiroPageComponent {
  displayedColumns: string[] = ['matricula', 'name', 'dataPagamento', 'situacao', "vizualizar"];
  dataSource = ELEMENT_DATA;
}
