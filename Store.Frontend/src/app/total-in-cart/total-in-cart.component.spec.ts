import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalInCartComponent } from './total-in-cart.component';

describe('TotalInCartComponent', () => {
  let component: TotalInCartComponent;
  let fixture: ComponentFixture<TotalInCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalInCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
