import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FoodItemService} from "../../../services/food-item.service";
import {FoodItem} from "../../../services/model/foodItem";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-food-menu-create-form',
  templateUrl: './food-menu-create-form.component.html',
  styleUrls: ['./food-menu-create-form.component.scss']
})
export class FoodMenuCreateFormComponent implements OnInit {
  @Output() showForm = new EventEmitter();
  foodItemForm: FormGroup;

  constructor(private foodItemService: FoodItemService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.foodItemForm = this.fb.group({
      name: ['',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
      isVegan: false,
      price: ['',[
        Validators.required,
        Validators.min(1)
      ]],
      description: ['',[
        Validators.required
      ]],
      image: ['/assets/pizza/placeholder.jpg',[
        Validators.required,
        Validators.minLength(1)
      ]],
    });
  }

  ngOnInit() {
  }

  public hideForm(): void {
    this.showForm.emit(false);
  }

  public submit(): void {
    if (this.foodItemForm.valid) {
      let foodItem = new FoodItem();
      foodItem.name = this.foodItemForm.get('name').value;
      foodItem.isVegan = this.foodItemForm.get('isVegan').value;
      foodItem.price = this.foodItemForm.get('price').value;
      foodItem.description = this.foodItemForm.get('description').value;
      foodItem.image = this.foodItemForm.get('image').value;

      foodItem.id = FoodItem.generateId(foodItem);

      this.foodItemService.addFoodItem(foodItem);
    }
  }

}
