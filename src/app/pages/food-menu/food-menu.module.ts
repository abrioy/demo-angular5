import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoodMenuListComponent} from './food-menu-list/food-menu-list.component';
import {FoodMenuEntryComponent} from "./food-menu-entry/food-menu-entry.component";
import {
  MatButtonModule,
  MatCardModule, MatIconModule,
  MatInputModule,
  MatSlideToggleModule
} from "@angular/material";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HttpClientModule} from "@angular/common/http";
import {FoodMenuDetailsComponent} from "./food-menu-details/food-menu-details.component";
import {FoodMenuComponent} from "./food-menu.component";
import {RouterModule} from "@angular/router";
import {FoodMenuCreateFormComponent} from "./food-menu-create-form/food-menu-create-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuardDirective} from "../../auth/auth-guard.directive";
import {AuthModule} from "../../auth/auth.module";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    AuthModule
  ],
  exports: [
    FoodMenuComponent
  ],
  declarations: [
    FoodMenuListComponent,
    FoodMenuEntryComponent,
    FoodMenuDetailsComponent,
    FoodMenuComponent,
    FoodMenuCreateFormComponent
  ],
  providers: [

  ]
})
export class FoodMenuModule {
}
