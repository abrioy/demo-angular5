import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../../services/config.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  animations: [
    trigger('loginBarAnimation', [
      state('hide', style({
        'display': 'none',
        'height': '0px',
        'transform': 'translateY(-32px)',
        'z-index': '1',
      })),
      state('show', style({
        'z-index': '2',
        'margin-left': 'auto',
        'margin-top': '-10px',
      })),
      transition('hide => show', animate('200ms ease-in')),
      transition('show => hide', animate('200ms ease-out'))
    ]),
  ]
})
export class MenuBarComponent implements OnInit {
  public showLoginBar: boolean = false;

  constructor(public configService: ConfigService) {

  }

  ngOnInit() {
  }

  public getLoginBarState() {
    if (this.showLoginBar) {
      return 'show';
    }
    return 'hide';
  }
}
