import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  RestaurantLandingComponent,
  RestaurantMenuComponent,
  RestaurantOrderComponent,
  RestaurantRoutingModule,
} from "./restaurant-index";
import { SharedModule } from "../shared/modules/shared-modules-index";

@NgModule({
  declarations: [
    RestaurantLandingComponent,
    RestaurantMenuComponent,
    RestaurantOrderComponent,
  ],
  imports: [CommonModule, SharedModule, RestaurantRoutingModule],
})
export class RestaurantModule {}
