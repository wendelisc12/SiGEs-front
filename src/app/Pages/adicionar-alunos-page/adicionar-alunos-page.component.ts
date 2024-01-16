import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-adicionar-alunos-page',
  templateUrl: './adicionar-alunos-page.component.html',
  styleUrls: ['./adicionar-alunos-page.component.css'],
})
export class AdicionarAlunosPageComponent {
  selectedDate: Date | null = null; // Inicializando a propriedade com null

  // Método chamado quando a data é selecionada no datepicker
  dateChanged(event: MatDatepickerInputEvent<Date, unknown>) {
    this.selectedDate = event.value;
  }
}
