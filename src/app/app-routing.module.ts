import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ErrorPageComponent,
  HomeComponent,
  LoginComponent,
  RegistrationComponent,
} from './app-index';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
