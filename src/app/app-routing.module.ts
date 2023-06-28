import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { SignupComponent } from './screens/signup/signup.component';
import { CategorieAreaComponent } from './screens/categorie-area/categorie-area.component';
import { ProductComponent } from './screens/product/product.component';
import { CartComponent } from './screens/cart/cart.component';
import { FavoritesComponent } from './screens/favorites/favorites.component';
import { UserPageComponent } from './screens/user-page/user-page.component';
import { PaymentComponent } from './screens/payment/payment.component';
import { SearchResultsComponent } from './screens/search-results/search-results.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent},
  {path:'cat-list', component:CategorieAreaComponent},
  {path:'product', component:ProductComponent},
  {path:'cart', component:CartComponent},
  {path:'favorites', component:FavoritesComponent},
  {path:'user-page', component:UserPageComponent},
  {path:'payment', component:PaymentComponent},
  {path:'search', component:SearchResultsComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
