import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Aluno } from 'src/app/model/aluno.model';
import Swal from 'sweetalert2';
import { EscolaService } from 'src/app/services/escola.service';

@Component({
  selector: 'app-adicionar-alunos-page',
  templateUrl: './adicionar-alunos-page.component.html',
  styleUrls: ['./adicionar-alunos-page.component.css'],
})

export class AdicionarAlunosPageComponent {

  aluno:Aluno = new Aluno()

  constructor(private router: Router, private escolaService:EscolaService) {}

  selectedDate: Date | null = null;
  dateChanged(event: MatDatepickerInputEvent<Date, unknown>) {
    this.selectedDate = event.value;
  }


  onDateChange(event: MatDatepickerInputEvent<Date>, campoData: string): void {
    if (event.value) {
      let date: Date = event.value;
      let formattedDate = moment(date).format('DD/MM/YYYY');

      if (campoData === 'nascimento') {
        this.aluno.data_nascimento = formattedDate
      } else if (campoData === 'pagamento') {
        this.aluno.data_pagamento = formattedDate
      }
    } else {
      console.log('Nenhuma data selecionada');
    }
  }

  onTurnoChange(event: any): void {
    this.aluno.horario = event.value;
  }

  gerarMatricula(): void {
    const anoAtual = new Date().getFullYear();
    this.aluno.matricula = `MAT${Math.floor(1000 + Math.random() * 9000).toString()}-${anoAtual}`;
  }

  adicionarAluno(form: NgForm): void { 
    if (form.valid) {
      this.gerarMatricula()
      console.log(this.aluno)

      const novoAluno = {
        matricula: this.aluno.matricula,
        nome_aluno: this.aluno.nome_aluno,
        nome_responsavel: this.aluno.nome_responsavel,
        data_nascimento: this.aluno.data_nascimento,
        serie: this.aluno.serie,
        data_pagamento: this.aluno.data_pagamento,
        cpf_responsavel: this.aluno.cpf_responsavel,
        telefone: this.aluno.telefone,
        endereco: this.aluno.endereco,
        cep: this.aluno.cep,
        identidade_aluno: this.aluno.identidade_aluno,
        horario: this.aluno.horario,
        valor_mensalidade: this.aluno.valor_mensalidade,
      };

      this.escolaService.addAluno(novoAluno).subscribe(
        (response) => {          
          this.router.navigate(['aluno/consultar']);
          Swal.fire('Sucesso!', 'Aluno adicionado com sucesso!', 'success');  
        },
        (error) => {
          console.error('Erro ao adicionar aluno:', error);
        }
      );
      console.log('Dados o Aluno:', this.aluno);

    }
  }

}
