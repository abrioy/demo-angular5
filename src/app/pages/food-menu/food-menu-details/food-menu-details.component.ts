import {Component, Input, OnInit} from '@angular/core';
import {FoodItem} from "../../../services/model/foodItem";

@Component({
  selector: 'app-food-menu-details',
  templateUrl: './food-menu-details.component.html',
  styleUrls: ['./food-menu-details.component.scss']
})
export class FoodMenuDetailsComponent implements OnInit {
  @Input() foodItem: FoodItem = null;

  constructor() {

  }

  ngOnInit() {

  }

}
