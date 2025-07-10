import { Routes } from '@angular/router';
import { Login } from './login/login';
import { CountryForm } from './country-form/country-form';

export const routes: Routes = [
  {path:"login",component:Login,pathMatch:"full"},
  {path:"form",component:CountryForm,pathMatch:"full"},
  {path:"",redirectTo:"/form",pathMatch:'full'}

];
