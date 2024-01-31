import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EscolaService } from '../../services/escola.service';
import { detalhesAluno } from '../../features/detalhesAlunoInterface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vizualizar-aluno-page',
  templateUrl: './vizualizar-aluno-page.component.html',
  styleUrls: ['./vizualizar-aluno-page.component.css']
})
export class VizualizarAlunoPageComponent {
  id: string = '';
  aluno:detalhesAluno = {id: '', matricula: '',nome_aluno: '',nome_responsavel: '',data_nascimento: '',cpf_responsavel: '',identidade_aluno: '',telefone: '',horario: '',serie: '',endereco: '',cep: '',data_pagamento: '',valor_mensalidade: ''}
  isModalOpen = false;

  constructor(private router: Router,private route: ActivatedRoute, private escolaService: EscolaService) { }


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    id ? this.id = id : this.id = ""
    
    this.getAluno()
    
  }

  getAluno():void{
    this.escolaService.getAluno(this.id).subscribe(
      (data) => {
        this.aluno = data
        console.log(this.aluno)
      },
      (error) => {
        console.error('Erro ao buscar alunos:', error);
      })
  }

  onDeleteClick(): void {
    this.isModalOpen = true;
  }
  get modalClass(): string {
    return this.isModalOpen ? 'modal open' : 'modal';
  }
  
  onConfirmDelete(): void {
    this.isModalOpen = false;
    this.escolaService.deleteAluno(this.id).subscribe(
      (data) => {
        this.router.navigate(['aluno/consultar']);
        Swal.fire('Sucesso!', 'Aluno excluído com sucesso!', 'success');
      },
      (error) => {
        console.error('Erro ao excluir aluno:', error);
      }
    );
  }

  onEditClick(): void{
    this.router.navigate(['/aluno/editar', this.id]);
  }
  
  
  onCancelDelete(): void {
    this.isModalOpen = false;
  }


}
