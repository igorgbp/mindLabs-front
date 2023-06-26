import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import { SliderComponent } from './components/slider/slider.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {MatCardModule} from '@angular/material/card';
import { PromoComponent } from './components/promo/promo.component';
import { CategorieAreaComponent } from './screens/categorie-area/categorie-area.component';
import { ItemCategorieComponent } from './components/item-categorie/item-categorie.component'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './screens/signup/signup.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './screens/product/product.component';
import { CartComponent } from './screens/cart/cart.component';
import { UserPageComponent } from './screens/user-page/user-page.component';
import { FavoritesComponent } from './screens/favorites/favorites.component';
import { PaymentComponent } from './screens/payment/payment.component';
import { TitleScreenComponent } from './components/title-screen/title-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    CategoriesComponent,
    PromoComponent,
    CategorieAreaComponent,
    ItemCategorieComponent,
    SignupComponent,
    ProductsListComponent,
    ProductComponent,
    CartComponent,
    UserPageComponent,
    FavoritesComponent,
    PaymentComponent,
    TitleScreenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
