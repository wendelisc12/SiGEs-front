import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EscolaService } from 'src/app/services/escola.service';
import { financeiroAlunos } from 'src/app/features/financeiroAlunosInterface';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-financeiro-aluno-page',
  templateUrl: './financeiro-aluno-page.component.html',
  styleUrls: ['./financeiro-aluno-page.component.css']
})
export class FinanceiroAlunoPageComponent {
  id: string = '';
  aluno: financeiroAlunos = { matricula: '', nome_aluno: '', horario: '', serie: '', data_pagamento: '', valor_mensalidade: '', situacao: '' }
  constructor(private router: Router, private route: ActivatedRoute, private escolaService: EscolaService) { }
  isModalOpen = false;
  novaDataPagamento:string = '';

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    id ? this.id = id : this.id = ""
    this.getAluno()
  }

  get modalClass(): string {
    return this.isModalOpen ? 'modal open' : 'modal';
  }

  getAluno(): void {
    this.escolaService.getAluno(this.id).subscribe(
      (data) => {
        this.aluno = data
        this.updateSituacao()
      },
      (error) => {
        console.error('Erro ao buscar alunos:', error);
      })
  }

  onAtualizarPagamentoModal():void{
    this.isModalOpen = true
    this.novaDataPagamento = moment(this.aluno.data_pagamento, 'DD/MM/YYYY').add(1, 'months').format('DD/MM/YYYY');
    console.log(this.novaDataPagamento)
  }

  updateSituacao() {
    const hoje = new Date();

    const dataPagamento = moment(this.aluno.data_pagamento, 'DD/MM/YYYY').toDate();

    if (dataPagamento < hoje) {
      this.aluno.situacao = 'Inadimplente';
    } else {
      this.aluno.situacao = 'Adimplente';
    }
  }
  onAtualizarPagamento(): void {
    if (this.novaDataPagamento) {
      console.log('Nova data de pagamento antes da requisição:', this.novaDataPagamento);
      this.escolaService.updateDataPagamento(this.id, this.novaDataPagamento).subscribe(
        (response) => {
          console.log('Data de pagamento atualizada com sucesso!', this.novaDataPagamento);
          this.updateSituacao();
          Swal.fire('Sucesso!', 'Pagamento atualizado com sucesso!', 'success');  
          this.getAluno();
          this.isModalOpen = false;
        },
        (error) => {
          console.error('Erro ao atualizar a data de pagamento', error);
        }
      );
    } else {
      console.error('Nova data de pagamento não está definida.');
    }
  }
  
}
