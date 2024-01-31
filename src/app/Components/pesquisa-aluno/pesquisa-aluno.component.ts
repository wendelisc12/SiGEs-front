import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pesquisa-aluno',
  templateUrl: './pesquisa-aluno.component.html',
  styleUrls: ['./pesquisa-aluno.component.css']
})
export class PesquisaAlunoComponent {
  @Output() dadosPesquisa: EventEmitter<any> = new EventEmitter<any>();

  pesquisa: any = {
    matricula: '',
    serie: '',
    turno: ''
  };

  pesquisar(): void {
    this.dadosPesquisa.emit(this.pesquisa)
    
    this.pesquisa = {
      matricula: '',
      serie: '',
      turno: ''
    };
  }
}
