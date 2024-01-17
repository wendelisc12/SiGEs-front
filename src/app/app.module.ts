import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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

@NgModule({
  declarations: [
    AppComponent,ConsultarAlunoPageComponent,PesquisaAlunoComponent, AdicionarAlunosPageComponent, InicioPageComponent, SidebarComponent, FinanceiroPageComponent, DocumentacaoPageComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
