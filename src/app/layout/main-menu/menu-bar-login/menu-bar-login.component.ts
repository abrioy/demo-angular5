import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {ErrorStateMatcher} from "@angular/material";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-menu-bar-login',
  templateUrl: './menu-bar-login.component.html',
  styleUrls: ['./menu-bar-login.component.scss']
})
export class MenuBarLoginComponent implements OnInit {
  public loginErrorStateMatcher: LoginErrorStateMatcher = new LoginErrorStateMatcher();
  loginFormGroup: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginFormGroup = this.fb.group({
      login: ['admin', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
      password: ['password', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
    });
  }

  ngOnInit() {
  }

  public logAs(id: string) {
    this.authService.loginAs(id).then(
      () => this.loginErrorStateMatcher.message = null
    ).catch(
      e => this.loginErrorStateMatcher.message = e
    );
  }
}

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  public message: string = null;

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    if (this.message) {
      return true;
    }
    return false;
  }
}
