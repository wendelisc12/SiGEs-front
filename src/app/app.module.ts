import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ConsultarAlunoPageComponent } from './Pages/consultar-aluno-page/consultar-aluno-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { AdicionarAlunosPageComponent } from './Pages/adicionar-alunos-page/adicionar-alunos-page.component';
import { InicioPageComponent } from './Pages/inicio-page/inicio-page.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FinanceiroPageComponent } from './Pages/financeiro-page/financeiro-page.component';
import { DocumentacaoPageComponent } from './Pages/documentacao-page/documentacao-page.component';
import { PesquisaAlunoComponent } from './Components/pesquisa-aluno/pesquisa-aluno.component';
import { VizualizarAlunoPageComponent } from './vizualizar-aluno-page/vizualizar-aluno-page.component';

import { EscolaService } from './services/escola.service';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,ConsultarAlunoPageComponent,PesquisaAlunoComponent, AdicionarAlunosPageComponent, InicioPageComponent, SidebarComponent, FinanceiroPageComponent, DocumentacaoPageComponent, VizualizarAlunoPageComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule, 
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
    CommonModule, 
    MatDialogModule, 
    BrowserAnimationsModule, 
    MatSidenavModule, 
    MatListModule,
    MatTableModule
  ],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }, EscolaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
