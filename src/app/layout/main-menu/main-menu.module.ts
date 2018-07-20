import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {MenuBarComponent} from "./menu-bar/menu-bar.component";
import {RouterModule} from "@angular/router";
import {AuthModule} from "../../auth/auth.module";
import {MenuBarLoginComponent} from "./menu-bar-login/menu-bar-login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
  ],
  exports: [
    MenuBarComponent
  ],
  declarations: [
    MenuBarComponent,
    MenuBarLoginComponent
  ]
})
export class MainMenuModule {
}
