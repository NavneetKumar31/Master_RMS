import { Component, OnInit } from "@angular/core";
import { INav } from "../../shared/models/shared-models-index";

@Component({
  selector: "app-restaurant-landing",
  templateUrl: "./restaurant-landing.component.html",
  styleUrls: ["./restaurant-landing.component.scss"],
})
export class RestaurantLandingComponent implements OnInit {
  navList: INav[] = [
    {
      title: "Our Menu",
      link: "./restaurant-menu",
    },
    {
      title: "Your Order",
      link: "./restaurant-order",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
