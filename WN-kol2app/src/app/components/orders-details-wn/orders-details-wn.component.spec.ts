import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsWNComponent } from './orders-details-wn.component';

describe('OrdersDetailsWNComponent', () => {
  let component: OrdersDetailsWNComponent;
  let fixture: ComponentFixture<OrdersDetailsWNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsWNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsWNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
