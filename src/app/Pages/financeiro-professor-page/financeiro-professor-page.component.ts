import { Component } from '@angular/core';
import { EscolaService } from 'src/app/services/escola.service';
import { financeiroProfessor } from 'src/app/features/financeiroProfessor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-financeiro-professor-page',
  templateUrl: './financeiro-professor-page.component.html',
  styleUrls: ['./financeiro-professor-page.component.css']
})
export class FinanceiroProfessorPageComponent {
  nomeProfessor: string = '';
  isModalOpen = false;
  displayedColumns: string[] = ['name', 'situacao', 'opcoes'];
  professores:financeiroProfessor[] = []
  professorNome: string = '';

  constructor(private escolaService: EscolaService) {}

  ngOnInit(): void {
    this.getProfessores();
  }

  get modalClass(): string {
    return this.isModalOpen ? 'modal open' : 'modal';
  }


  getProfessores(): void {
    this.escolaService.getProfessores().subscribe(
      (data) => {
        this.professores = data;
        console.log(data)
      },
      (error) => {
        console.error('Erro ao buscar alunos:', error);
      }
    );
  }

  get dataSource(): financeiroProfessor[] {
    return this.professores;
  }

  realizarPagamento(professor: financeiroProfessor): void {
    // Calcula a data atual e a data do próximo pagamento
    const dataAtual = new Date();
    const proximoPagamento = new Date(dataAtual);
    proximoPagamento.setMonth(proximoPagamento.getMonth() + 1);
  
    Swal.fire({
      title: 'Tem certeza?',
      text: `Você quer realizar o pagamento do professor hoje, ${dataAtual.toLocaleDateString()}, e a próxima data de pagamento será em ${proximoPagamento.toLocaleDateString()}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, realizar pagamento!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.escolaService.updateProfessorDataPagamento(professor.id, 'Pago').subscribe(
          (data) => {
            professor.situacao = 'Pago';
            console.log('Pagamento realizado com sucesso:', data);
            Swal.fire('Sucesso!', 'Pagamento realizado com sucesso!', 'success');
          },
          (error) => {
            console.error('Erro ao realizar pagamento:', error);
            Swal.fire('Erro!', 'Ocorreu um erro ao realizar o pagamento.', 'error');
          }
        );
      }
    });
  }

  addProfessor():void{
    this.isModalOpen = true
  }

  inserirProfessor(): void {
    // Passa o nome do novo professor para o método addProfessor do serviço
    this.escolaService.addProfessor({ nome: this.professorNome }).subscribe(
      (data) => {
        console.log('Professor inserido com sucesso:', data);
        // Atualiza a lista de professores após a adição
        this.getProfessores();
        // Fecha o modal
        this.closeModal();
        Swal.fire('Sucesso!', 'Professor adicionado com sucesso!', 'success');
      },
      (error) => {
        console.error('Erro ao inserir professor:', error);
      }
    );
  }

  closeModal():void{
    this.isModalOpen = false
  }

  deletarProfessor(professorId: string): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.escolaService.deleteProfessor(professorId).subscribe(
          (data) => {
            console.log('Professor deletado com sucesso:', data);
            // Atualiza a lista de professores após a exclusão
            this.getProfessores();
            Swal.fire('Deletado!', 'O professor foi deletado.', 'success');
          },
          (error) => {
            console.error('Erro ao deletar professor:', error);
            Swal.fire('Erro!', 'Ocorreu um erro ao tentar deletar o professor.', 'error');
          }
        );
      }
    });
  }

  pesquisarProfessor(): void {
    // Verifica se o campo de pesquisa está vazio
    if (this.nomeProfessor.trim() !== '') {
      this.escolaService.getProfessoresPorNome(this.nomeProfessor).subscribe(
        (data) => {
          this.professores = data;
          console.log(data)
        },
        (error) => {
          console.error('Erro ao buscar professores:', error);
        }
      );
    } else {
      this.getProfessores();
    }
  }


}
