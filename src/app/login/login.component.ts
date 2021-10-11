import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IUser } from '../shared/models/shared-models-index';
import { RoutingService } from '../shared/services/shared-services-index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _routing: RoutingService
  ) {}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    console.log(this.loginForm);

    const user: IUser = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    };
    this.login(user);
  }

  login(user: IUser): void {
    console.log(user);

    if (user.username === 'test@email.com') {
      this._routing.rootRouting('home');
    } else {
      alert('Invalid Username & password...');
    }
  }
}
