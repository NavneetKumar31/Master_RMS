import { Component } from "@angular/core";
import { UtilityService } from "./shared/services/shared-services-index";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "MasterHotel";
  isLoginOrRegister: boolean = false;

  constructor(private _utility: UtilityService) {
    this._utility.isLoginOrRegistration.subscribe((data: boolean) => {
      this.isLoginOrRegister = data;
    });
  }
}
