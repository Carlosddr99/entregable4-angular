import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaCincoComponent } from './suma-cinco.component';

describe('SumaCincoComponent', () => {
  let component: SumaCincoComponent;
  let fixture: ComponentFixture<SumaCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaCincoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumaCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
