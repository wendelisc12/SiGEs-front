import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaAlunoComponent } from './pesquisa-aluno.component';

describe('PesquisaAlunoComponent', () => {
  let component: PesquisaAlunoComponent;
  let fixture: ComponentFixture<PesquisaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
