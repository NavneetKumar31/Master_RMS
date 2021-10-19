import { Component, OnInit } from "@angular/core";
import { IResponse, IDish } from "src/app/shared/models/shared-models-index";
import { DishesService } from "../../shared/services/shared-services-index";
import * as _lodash from "lodash";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-restaurant-menu",
  templateUrl: "./restaurant-menu.component.html",
  styleUrls: ["./restaurant-menu.component.scss"],
})
export class RestaurantMenuComponent implements OnInit {
  allDishes: IDish[] = [];
  filteredDishes: IDish[] = [];
  filterForm: FormGroup;
  types: string[] = ["all", "veg", "non-veg"];
  categories: string[] = [
    "all",
    "starter",
    "main course",
    "bread",
    "dessert",
    "drink",
  ];

  constructor(private _dishes: DishesService, private _fb: FormBuilder) {
    this.filterForm = this._fb.group({
      selectedDishType: ["all"],
      selectedDishCategory: ["all"],
    });
  }

  ngOnInit(): void {
    this.getAllDishes();
    this.handleFilterChanges();
  }

  getAllDishes(): void {
    this._dishes.getAllDishes().subscribe((data: IResponse) => {
      if (data.success) {
        this.allDishes = [...data.results];
        this.filteredDishes = this.allDishes;
      }
    });
  }

  trackByFn(index: number, item: IDish) {
    return item.id;
  }

  handleFilterChanges(): void {
    this.filterForm
      .get("selectedDishType")
      ?.valueChanges.subscribe((value: string) => {
        const dishType = this.filterForm.controls["selectedDishType"].value;
        if (value.toLowerCase() === "all") {
          this.filteredDishes = this.allDishes;
          return;
        }
        this.filteredDishes = _lodash.filter(this.allDishes, {
          type: dishType,
        });
      });

    this.filterForm
      .get("selectedDishCategory")
      ?.valueChanges.subscribe((value: string) => {
        const dishType = this.filterForm.controls["selectedDishType"].value;
        const dishCategory =
          this.filterForm.controls["selectedDishCategory"].value;

        if (value.toLowerCase() === "all") {
          this.filteredDishes = _lodash.filter(this.allDishes, {
            type: dishType,
          });
          return;
        }
        this.filteredDishes = _lodash.filter(this.allDishes, {
          type: dishType,
          category: dishCategory,
        });
      });
  }
}
