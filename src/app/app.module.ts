import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { UserService } from './services/user.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LogOutComponent } from './log-out/log-out.component';
import { LogInComponent } from './log-in/log-in.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ProductFormComponent } from './Admin/product-form/product-form.component';
import { CategoriesService } from './services/categories.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    LogOutComponent,
    LogInComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
  ],
  providers:
   [ AuthService ,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
