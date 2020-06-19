import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersWNComponent } from './orders-wn.component';

describe('OrdersWNComponent', () => {
  let component: OrdersWNComponent;
  let fixture: ComponentFixture<OrdersWNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersWNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersWNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
