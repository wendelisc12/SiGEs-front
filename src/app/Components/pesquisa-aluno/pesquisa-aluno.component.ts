import { Component } from '@angular/core';

@Component({
  selector: 'app-pesquisa-aluno',
  templateUrl: './pesquisa-aluno.component.html',
  styleUrls: ['./pesquisa-aluno.component.css']
})
export class PesquisaAlunoComponent {
  matricula: string = '';
  serie: string = '';
  turno: string = '';

  pesquisar(): void {
    console.log('Matrícula:', this.matricula);
    console.log('Série:', this.serie);
    console.log('Turno:', this.turno);

  }
}
