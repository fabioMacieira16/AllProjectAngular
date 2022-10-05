import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemsComponent } from './orders-items.component';

describe('OrdersItemsComponent', () => {
  let component: OrdersItemsComponent;
  let fixture: ComponentFixture<OrdersItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
