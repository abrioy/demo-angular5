import {Injectable} from '@angular/core';
import {FoodItem} from "./model/foodItem";

const DEFAULT_CONFIG = {
  "ui.bgColor": "#008080"
};

@Injectable()
export class ConfigService {
  constructor() {

  }

  public static saveConfig(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static loadConfig(key: string): any {
    let data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    else {
      if (key in DEFAULT_CONFIG) {
        return DEFAULT_CONFIG[key];
      }
      else {
        return null;
      }
    }
  }

  public getBackgroundColor(): string {
    return ConfigService.loadConfig("ui.bgColor");
  }

  public setBackgroundColor(color: string): void {
    ConfigService.saveConfig("ui.bgColor", color);
  }

  public getFoodItemsData(): string {
    return ConfigService.loadConfig("food.items");
  }

  public setFoodItemsData(foodItems: FoodItem[]): void {
    ConfigService.saveConfig("food.items", foodItems);
  }
}
