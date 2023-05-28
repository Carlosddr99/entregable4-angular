import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaCincoComponent } from './resta-cinco.component';

describe('RestaCincoComponent', () => {
  let component: RestaCincoComponent;
  let fixture: ComponentFixture<RestaCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaCincoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
