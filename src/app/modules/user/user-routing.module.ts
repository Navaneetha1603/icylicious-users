import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetComponent } from './components/reset/reset.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';

import { UserComponent } from './user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'shop',component:ViewProductsComponent},
  {path:'register',component:RegistrationComponent},
  {path:'signup',component:SignupComponent},
  {path:'reset',component:ResetComponent},
  {path:'update',component:UpdatePasswordComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
