import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarAlunoComponent } from './Components/Adicionar-alunos/adicionar-alunos.component';
import { AdicionarAlunosPageComponent } from './Pages/adicionar-alunos-page/adicionar-alunos-page.component';

const routes: Routes = [
  // ... outras rotas ...

  { path: 'adicionar-alunos', component: AdicionarAlunoComponent },
  { path: 'login', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'adicionar-alunos-page', component: AdicionarAlunosPageComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



