import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroProfessorPageComponent } from './financeiro-professor-page.component';

describe('FinanceiroProfessorPageComponent', () => {
  let component: FinanceiroProfessorPageComponent;
  let fixture: ComponentFixture<FinanceiroProfessorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroProfessorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroProfessorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
