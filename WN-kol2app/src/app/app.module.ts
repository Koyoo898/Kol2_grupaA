import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersWNComponent } from './components/orders-wn/orders-wn.component';
import { OrdersItemWNComponent } from './components/orders-item-wn/orders-item-wn.component';
import { OrdersDetailsWNComponent } from './components/orders-details-wn/orders-details-wn.component';
import {HttpClientModule} from "@angular/common/http";
import {WNDataService} from "./service/wn-data.service";

@NgModule({
  declarations: [
    AppComponent,
    OrdersWNComponent,
    OrdersItemWNComponent,
    OrdersDetailsWNComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WNDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
