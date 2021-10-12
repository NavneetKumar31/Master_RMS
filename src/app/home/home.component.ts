import { Component, OnInit } from "@angular/core";
import { EnvironmentService } from "../shared/services/shared-services-index";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  assetsPath: string = "";

  constructor(private _environment: EnvironmentService) {
    this.assetsPath = _environment.assetsPath;
  }

  ngOnInit(): void {}
}
