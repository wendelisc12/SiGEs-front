import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacaoPageComponent } from './documentacao-page.component';

describe('DocumentacaoPageComponent', () => {
  let component: DocumentacaoPageComponent;
  let fixture: ComponentFixture<DocumentacaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentacaoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
