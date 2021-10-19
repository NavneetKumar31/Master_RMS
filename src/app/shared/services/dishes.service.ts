import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EnvironmentService } from "./shared-services-index";
import { IResponse } from "../models/shared-models-index";

@Injectable({
  providedIn: "root",
})
export class DishesService {
  private _assetsPath: string = "";
  constructor(
    private _http: HttpClient,
    private _environment: EnvironmentService
  ) {
    this._assetsPath = this._environment.assetsPath;
  }

  getAllDishes(): Observable<IResponse> {
    return this._http.get<IResponse>(this._assetsPath + "localDB/dishes.json");
  }
}
