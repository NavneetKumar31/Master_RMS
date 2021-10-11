import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IEnvironmentVariable } from "../models/shared-models-index";

@Injectable({
  providedIn: "root",
})
export class EnvironmentService {
  private _baseUri: string = "";
  private _assetsPath: string = "";

  constructor(private _http: HttpClient) {}

  readEnvironmentVariables(): Observable<any> {
    return this._http.get<any>("assets/configurations/config.json");
  }

  setEnvironmentVariables(variables: any): void {
    this._assetsPath = variables.assetsPath;
    this._baseUri = variables.baseUri;
  }

  async init(): Promise<void> {
    const variables = await this.readEnvironmentVariables().toPromise();
    this.setEnvironmentVariables(variables);

    return new Promise((resolve) => {
      this.readEnvironmentVariables().subscribe((data: any) => {
        this.setEnvironmentVariables(data);
      });
      resolve();
    });
  }

  get assetsPath(): string {
    return this._assetsPath;
  }

  get baseUri(): string {
    return this._baseUri;
  }
}
