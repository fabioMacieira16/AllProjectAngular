import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersItemsComponent } from './components/orders-items/orders-items.component';
import { OrderService } from './components/shared/order.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrdersItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
