import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  RestaurantHomeComponent,
  RestaurantLandingComponent,
  RestaurantMenuComponent,
  RestaurantOrderComponent,
} from "./restaurant-index";
import { SharedModule } from "../shared/modules/shared-modules-index";

@NgModule({
  declarations: [
    RestaurantHomeComponent,
    RestaurantLandingComponent,
    RestaurantMenuComponent,
    RestaurantOrderComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class RestaurantModule {}
