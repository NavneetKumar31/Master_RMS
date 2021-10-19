import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UtilityService {
  isLoginOrRegistration = new Subject<boolean>();

  constructor() {}
}
