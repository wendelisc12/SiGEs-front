import { Component } from '@angular/core';
import { PesquisaAlunoComponent } from 'src/app/Components/pesquisa-aluno/pesquisa-aluno.component';

export interface PeriodicElement {
  name: string;
  matricula: string;
  serie: string;
  turno: string;
  vizualizar: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {matricula: "101", name: 'Alice', serie: '1º ano', turno: 'Manhã', vizualizar:""},
    {matricula: '202', name: 'Bob', serie: '2º ano', turno: 'Tarde', vizualizar:""},
    {matricula: '303', name: 'Charlie', serie: '3º ano', turno: 'Manhã', vizualizar:""},
    {matricula: '404', name: 'David', serie: '4º ano', turno: 'Tarde', vizualizar: ""},
    {matricula: '505', name: 'Eva', serie: '5º ano', turno: 'Manhã', vizualizar: ""},
    {matricula: '606', name: 'Frank', serie: '6º ano', turno: 'Tarde', vizualizar: ""},
    {matricula: '707', name: 'Grace', serie: '7º ano', turno: 'Manhã', vizualizar: ""},
    {matricula: '808', name: 'Helen', serie: '8º ano', turno: 'Tarde', vizualizar: ""},
    {matricula: '909', name: 'Ian', serie: '9º ano', turno: 'Manhã', vizualizar: ""}  
];

@Component({
  selector: 'app-consultar-aluno-page',
  templateUrl: './consultar-aluno-page.component.html',
  styleUrls: ['./consultar-aluno-page.component.css']
})
export class ConsultarAlunoPageComponent {
  displayedColumns: string[] = ['matricula', 'name', 'serie', 'turno', "vizualizar"];
  dataSource = ELEMENT_DATA;
}
