import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizarAlunoPageComponent } from './vizualizar-aluno-page.component';

describe('VizualizarAlunoPageComponent', () => {
  let component: VizualizarAlunoPageComponent;
  let fixture: ComponentFixture<VizualizarAlunoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizualizarAlunoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VizualizarAlunoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
