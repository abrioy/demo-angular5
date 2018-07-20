import {Component, Input, OnInit} from '@angular/core';
import {ConfigService} from "../../services/config.service";


export class Color {
  private _red: number = 0;
  private _green: number = 0;
  private _blue: number = 0;

  constructor(color: string) {
    this.fromHex(color);
  }

  set red(value: number) {
    this._red = Math.max(0, Math.min(255, value));
  }

  set green(value: number) {
    this._green = Math.max(0, Math.min(255, value));
  }

  set blue(value: number) {
    this._blue = Math.max(0, Math.min(255, value));
  }

  get red(): number {
    return this._red;
  }

  get green(): number {
    return this._green;
  }

  get blue(): number {
    return this._blue;
  }

  private componentToHex(c: number): string {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  private rgbToHex(r: number, g: number, b: number): string {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  public toHex(): string {
    return this.rgbToHex(this._red, this._green, this._blue);
  }

  public fromHex(hex: string): void {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      this._red = parseInt(result[1], 16);
      this._green = parseInt(result[2], 16);
      this._blue = parseInt(result[3], 16);
    }
  }
}

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() title: string;
  @Input() colorGetter: any;
  @Input() colorSetter: any;

  sliderDisabled: boolean = false;
  sliderMax: number = 255;
  sliderMin: number = 0;
  sliderStep: number = 1;
  sliderThumbLabel: boolean = true;
  sliderTickInterval: number = 32;
  currentColor: Color = null;


  constructor() {

  }

  ngOnInit() {
    this.resetColor();
  }

  public resetColor(): void {
    this.currentColor = new Color(this.colorGetter());
  }

  public saveColor(): void {
    this.colorSetter(this.currentColor.toHex());
  }

}
