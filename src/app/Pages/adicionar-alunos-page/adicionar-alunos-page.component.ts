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

  constructor(private router: Router, private escolaService:EscolaService,private route: ActivatedRoute) {}

  selectedDate: Date | null = null;
  dateChanged(event: MatDatepickerInputEvent<Date, unknown>) {
    this.selectedDate = event.value;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const alunoId = params['id'];
      if (alunoId) {
        this.carregarDadosAlunoParaEdicao(alunoId);
      }
    });
  }

  private carregarDadosAlunoParaEdicao(alunoId: string): void {
    this.escolaService.getAluno(alunoId).subscribe(
      (aluno: Aluno) => {
        this.aluno = aluno;
      },
      (error) => {
        console.error('Erro ao carregar dados do aluno para edição:', error);
      }
    );
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

  onSerieChange(event: any): void {
    this.aluno.serie = event.value;
  }

  gerarMatricula(): void {
    const anoAtual = new Date().getFullYear();
    this.aluno.matricula = `MAT${Math.floor(1000 + Math.random() * 9000).toString()}-${anoAtual}`;
  }
  

  adicionarAluno(form: NgForm): void {
    if (form.valid) {
      this.gerarMatricula();
  
      if (this.aluno.id) {
        this.escolaService.updateAluno(this.aluno.id, this.aluno).subscribe(
          (response) => {
            this.router.navigate(['aluno/consultar']);
            Swal.fire('Sucesso!', 'Aluno atualizado com sucesso!', 'success');
          },
          (error) => {
            console.error('Erro ao atualizar aluno:', error);
          }
        );
      } else {
        this.escolaService.addAluno(this.aluno).subscribe(
          (response) => {
            this.router.navigate(['aluno/consultar']);
            Swal.fire('Sucesso!', 'Aluno adicionado com sucesso!', 'success');
          },
          (error) => {
            console.error('Erro ao adicionar aluno:', error);
          }
        );
      }
    }
  }

}
