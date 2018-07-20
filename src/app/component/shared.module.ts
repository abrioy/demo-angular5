import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSliderModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {ColorPickerComponent} from "./color-picker/color-picker.component";
import {MatCardModule} from '@angular/material/card';

const modules = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  FormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSliderModule,
  MatCardModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules,
    ColorPickerComponent
  ],
  declarations: [
    ColorPickerComponent
  ]
})
export class SharedModule {
}
