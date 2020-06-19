import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdersWNComponent} from "./components/orders-wn/orders-wn.component";
import{OrdersDetailsWNComponent} from "./components/orders-details-wn/orders-details-wn.component";

const routes: Routes = [
  {
    path:"orders-wn",
    component:OrdersWNComponent
  },
  {
    path:"order-details-wn",
    component: OrdersDetailsWNComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
