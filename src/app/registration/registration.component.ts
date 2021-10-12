import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { IUser } from "../shared/models/shared-models-index";
import {
  RoutingService,
  EnvironmentService,
} from "../shared/services/shared-services-index";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent implements OnInit {
  registrationForm: any;
  assetsPath: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _routing: RoutingService,
    private _environment: EnvironmentService
  ) {
    this.assetsPath = this._environment.assetsPath;
  }

  ngOnInit(): void {
    this.initializeRegistrationForm();
  }

  initializeRegistrationForm(): void {
    this.registrationForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email]],
      mobile: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      city: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirm_password: ["", [Validators.required]],
    });
  }

  routeTo(path: string): void {
    this._routing.rootRouting(path.toLowerCase());
  }

  onSubmit(): void {
    const newUser: IUser = {
      name: this.registrationForm.controls["name"].value,
      email: this.registrationForm.controls["email"].value,
      mobile: this.registrationForm.controls["mobile"].value,
      city: this.registrationForm.controls["city"].value,
    };

    this.register(newUser);
  }

  register(newUser: IUser): void {
    alert("successfully registered.");
    this.routeTo("login");
  }
}
