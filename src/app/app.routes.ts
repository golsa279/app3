import { Routes } from '@angular/router';
import { HomeComponent } from './+pages/home/home.component';
import { AboutComponent } from './+pages/about/about.component';
import { ProductsComponent } from './+pages/products/products.component';
import { ServicesComponent } from './+pages/services/services.component';
import { LoginComponent } from './+pages/login/login.component';
import { RegisterComponent } from './+pages/register/register.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'products',component:ProductsComponent},
    {path:'services',component:ServicesComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
];
