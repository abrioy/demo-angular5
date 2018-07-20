import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterBarComponent} from "./footer-bar/footer-bar.component";
import {MatToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    FooterBarComponent
  ],
  declarations: [
    FooterBarComponent
  ]
})
export class FooterModule { }
