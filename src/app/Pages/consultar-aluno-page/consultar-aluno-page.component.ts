import { Component } from '@angular/core';
import { PesquisaAlunoComponent } from 'src/app/Components/pesquisa-aluno/pesquisa-aluno.component';
import { EscolaService } from 'src/app/services/escola.service';
import { consultarAluno } from 'src/app/features/consultarAlunosInterface';

@Component({
  selector: 'app-consultar-aluno-page',
  templateUrl: './consultar-aluno-page.component.html',
  styleUrls: ['./consultar-aluno-page.component.css']
})
export class ConsultarAlunoPageComponent {

  alunos: consultarAluno[] = [];
  displayedColumns: string[] = ['matricula', 'name', 'serie', 'turno', 'vizualizar'];

  constructor(private escolaService: EscolaService) {}

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos(): void {
    this.escolaService.getAlunos().subscribe(
      (data) => {
        this.alunos = data;
        console.log(data);
      },
      (error) => {
        console.error('Erro ao buscar alunos:', error);
      }
    );
  }
  get dataSource(): consultarAluno[] {
    return this.alunos;
  }
}
