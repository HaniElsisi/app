import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';


const routes: Routes =
[
  {path : "products", component : ProductsComponent},
  {path : "orders", component : MyOrdersComponent},
  {path : "admin/products", component : AdminProductsComponent},
  {path : "admin/orders", component : AdminOrdersComponent},
  {path : "shopping-cart", component : ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
