import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductQuantityComponent } from './porduct-quantity.component';

describe('PorductQuantityComponent', () => {
  let component: PorductQuantityComponent;
  let fixture: ComponentFixture<PorductQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorductQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
