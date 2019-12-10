import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiAlertaModalComponent } from './mi-alerta-modal.component';

describe('MiAlertaModalComponent', () => {
  let component: MiAlertaModalComponent;
  let fixture: ComponentFixture<MiAlertaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiAlertaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiAlertaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
