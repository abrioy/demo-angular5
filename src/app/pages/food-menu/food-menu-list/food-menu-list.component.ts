import {Component, Input, OnInit} from '@angular/core';
import {FoodItem} from "../../../services/model/foodItem";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-food-menu-list',
  templateUrl: './food-menu-list.component.html',
  styleUrls: ['./food-menu-list.component.scss'],
})
export class FoodMenuListComponent implements OnInit {
  @Input() foodItems: FoodItem[] = null;

  showCreatePizzaForm: boolean = false;

  constructor() {

  }

  ngOnInit() {

  }

}
