import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  RestaurantLandingComponent,
  RestaurantMenuComponent,
  RestaurantOrderComponent,
} from "./restaurant-index";

const routes: Routes = [
  {
    path: "",
    component: RestaurantLandingComponent,
    children: [
      { path: "", redirectTo: "restaurant-menu", pathMatch: "full" },
      { path: "restaurant-order", component: RestaurantOrderComponent },
      { path: "restaurant-menu", component: RestaurantMenuComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantRoutingModule {}
