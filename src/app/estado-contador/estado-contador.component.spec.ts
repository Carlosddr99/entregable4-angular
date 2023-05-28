import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoContadorComponent } from './estado-contador.component';

describe('EstadoContadorComponent', () => {
  let component: EstadoContadorComponent;
  let fixture: ComponentFixture<EstadoContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoContadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
