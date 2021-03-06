import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProductFormComponent } from './Admin/product-form/product-form.component';

const routes: Routes =
[
  {path : 'products', component : ProductsComponent , canActivate: [AuthGuardService]},
  {path : 'orders', component : MyOrdersComponent , canActivate: [AuthGuardService]},
  {path : 'admin/products', component : AdminProductsComponent , canActivate: [AuthGuardService , AdminAuthGuardService]},
  {path : 'admin/products/new', component : ProductFormComponent , canActivate: [AuthGuardService , AdminAuthGuardService]},
  {path : 'admin/orders', component : AdminOrdersComponent, canActivate: [AuthGuardService , AdminAuthGuardService] },
  {path : 'shopping-cart', component : ShoppingCartComponent , canActivate: [AuthGuardService, AdminAuthGuardService]},
  {path : 'Log-out', component : LogOutComponent},
  {path : 'Log-in', component : LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
