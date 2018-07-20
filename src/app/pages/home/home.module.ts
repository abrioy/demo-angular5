import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {SharedModule} from "../../component/shared.module";
import {GameModule} from "../../game/game.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GameModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
