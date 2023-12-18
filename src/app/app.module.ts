import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdicionarAlunoComponent } from './Components/Adicionar-alunos/adicionar-alunos.component';
import { LoginComponent } from './Components/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdicionarAlunosPageComponent } from './Pages/adicionar-alunos-page/adicionar-alunos-page.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { InicioPageComponent } from './Pages/inicio-page/inicio-page.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';




@NgModule({
  declarations: [
    AppComponent,AdicionarAlunoComponent, LoginComponent,AdicionarAlunosPageComponent, InicioComponent,InicioPageComponent, SidebarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,AppRoutingModule, HttpClientModule,FormsModule,CommonModule, MatDialogModule, BrowserAnimationsModule, MatSidenavModule, MatListModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
