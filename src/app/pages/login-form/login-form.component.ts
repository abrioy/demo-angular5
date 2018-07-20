import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  public logAs(id:string) {
    this.authService.loginAs(id);
  }

  public logout() {
    this.authService.logout();
  }
}
