import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroAlunoPageComponent } from './financeiro-aluno-page.component';

describe('FinanceiroAlunoPageComponent', () => {
  let component: FinanceiroAlunoPageComponent;
  let fixture: ComponentFixture<FinanceiroAlunoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroAlunoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroAlunoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
