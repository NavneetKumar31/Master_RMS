import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  ErrorPageComponent,
  HomeComponent,
  LoginComponent,
  RegistrationComponent,
} from "./app-index";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  {
    path: "restaurant",
    loadChildren: () =>
      import(`./restaurant/restaurant.module`).then((m) => m.RestaurantModule),
  },
  { path: "**", component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
