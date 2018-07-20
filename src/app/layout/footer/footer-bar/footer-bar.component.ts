import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../../services/config.service";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.css']
})
export class FooterBarComponent implements OnInit {
  public currentUserName: string;
  today: number = Date.now();

  constructor(public configService: ConfigService, public authService: AuthService) {
    authService.getCurrentUser().subscribe(user => this.currentUserName = user.id);
  }

  ngOnInit() {

  }
}
