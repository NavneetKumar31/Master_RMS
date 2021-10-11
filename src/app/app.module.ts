import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AppComponent,
  AppRoutingModule,
  HeaderComponent,
  FooterComponent,
  LoginComponent,
  RegistrationComponent,
  HomeComponent,
  ErrorPageComponent,
} from './app-index';
import { SharedModule } from './shared/modules/shared-modules-index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ErrorPageComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
