import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-adicionar-alunos-page',
  templateUrl: './adicionar-alunos-page.component.html',
  styleUrls: ['./adicionar-alunos-page.component.css'],
})
export class AdicionarAlunosPageComponent {
  selectedDate: Date | null = null;
  dateChanged(event: MatDatepickerInputEvent<Date, unknown>) {
    this.selectedDate = event.value;
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      let date: Date = event.value;
      let formattedDate = moment(date).format('DD/MM/YYYY');
      console.log(formattedDate);
    } else {
      console.log('Nenhuma data selecionada');
    }
  }
}
