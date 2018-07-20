import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FoodItem} from "../../services/model/foodItem";
import {FoodItemService} from "../../services/food-item.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/share'

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {
  foodItems$: Observable<FoodItem[]> = null;
  selectedFoodItem: FoodItem = null;
  selectedFoodItemId: string = null;
  foodItems: FoodItem[];

  constructor(private route: ActivatedRoute, private foodItemService: FoodItemService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedFoodItemId = params['foodId'];
      this.updateSelectedFoodItem();
    });

    this.foodItems$ = this.foodItemService.getFoodItems();
    this.foodItems$.subscribe(foodItems => {
      this.foodItems = foodItems;
      this.updateSelectedFoodItem();
    })
  }

  private updateSelectedFoodItem() {
    if (this.foodItems && this.selectedFoodItemId) {
      this.selectedFoodItem = this.foodItems.find(foodItem => {
        return foodItem.id === this.selectedFoodItemId
      });
    }
  }
}


