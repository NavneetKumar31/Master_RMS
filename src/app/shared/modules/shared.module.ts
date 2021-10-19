import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./shared-modules-index";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {} from "../components/shared-components-index";
import { SideNavComponent } from "../components/side-nav/side-nav.component";

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    SideNavComponent,
  ],
  providers: [],
})
export class SharedModule {}
