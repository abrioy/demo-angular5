import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuardDirective} from "./auth-guard.directive";
import {AuthService} from "./auth.service";
import {LogoutComponent} from "./logout/logout.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthGuardDirective,
    LogoutComponent
  ],
  exports: [
    AuthGuardDirective,
    LogoutComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
