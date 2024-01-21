import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAlunoPageComponent } from './consultar-aluno-page.component';

describe('ConsultarAlunoPageComponent', () => {
  let component: ConsultarAlunoPageComponent;
  let fixture: ComponentFixture<ConsultarAlunoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAlunoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarAlunoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
