import {Component, Input, OnInit} from '@angular/core';
import {FoodItem} from "../../../services/model/foodItem";
import {FoodItemService} from "../../../services/food-item.service";

@Component({
  selector: 'app-food-menu-entry',
  templateUrl: './food-menu-entry.component.html',
  styleUrls: ['./food-menu-entry.component.scss']
})
export class FoodMenuEntryComponent implements OnInit {
  @Input() foodItem: FoodItem;

  constructor(private foodItemService: FoodItemService) { }

  ngOnInit() {
  }

  public deleteFoodItem(event) {
    this.foodItemService.removeFoodItem(this.foodItem);

    event.preventDefault();
    event.stopPropagation();
  }
}
