import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarAlunosPageComponent } from './Pages/adicionar-alunos-page/adicionar-alunos-page.component';
import { InicioPageComponent } from './Pages/inicio-page/inicio-page.component';
import { FinanceiroPageComponent } from './Pages/financeiro-page/financeiro-page.component';
import { DocumentacaoPageComponent } from './Pages/documentacao-page/documentacao-page.component';
import { ConsultarAlunoPageComponent } from './Pages/consultar-aluno-page/consultar-aluno-page.component';
import { VizualizarAlunoPageComponent } from './Pages/vizualizar-aluno-page/vizualizar-aluno-page.component';
import { FinanceiroAlunoPageComponent } from './Pages/financeiro-aluno-page/financeiro-aluno-page.component';
import { FinanceiroProfessorPageComponent } from './Pages/financeiro-professor-page/financeiro-professor-page.component';

const routes: Routes = [
  { path: 'aluno/consultar/detalhes/:id', component: VizualizarAlunoPageComponent },
  { path: 'aluno/adicionar', component: AdicionarAlunosPageComponent },
  { path: 'aluno/editar/:id', component: AdicionarAlunosPageComponent },
  { path: 'aluno/consultar', component: ConsultarAlunoPageComponent },
  { path: 'financeiro/professores', component: FinanceiroProfessorPageComponent},
  { path: 'financeiro/alunos/:id', component: FinanceiroAlunoPageComponent },
  { path: 'financeiro/alunos', component: FinanceiroPageComponent },
  { path: 'documentacao', component: DocumentacaoPageComponent },
  { path: '', component: InicioPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



