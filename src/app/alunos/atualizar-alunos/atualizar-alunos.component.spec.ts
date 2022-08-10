import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarAlunosComponent } from './atualizar-alunos.component';

describe('AtualizarAlunosComponent', () => {
  let component: AtualizarAlunosComponent;
  let fixture: ComponentFixture<AtualizarAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarAlunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
