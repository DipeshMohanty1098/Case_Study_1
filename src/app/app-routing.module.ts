import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  {path: 'view-orders/:id', component: ViewOrdersComponent,},
  {path: 'customer-orders', component: CustomerOrdersComponent,},
  {path: '', redirectTo:'customer-orders', pathMatch: 'full'},
  {path: '**', redirectTo: 'customer-orders', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
