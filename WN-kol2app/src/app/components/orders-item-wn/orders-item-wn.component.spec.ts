import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemWNComponent } from './orders-item-wn.component';

describe('OrdersItemWNComponent', () => {
  let component: OrdersItemWNComponent;
  let fixture: ComponentFixture<OrdersItemWNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemWNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemWNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
