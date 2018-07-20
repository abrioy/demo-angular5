import {Injectable} from '@angular/core';
import {FoodItem} from "./model/foodItem";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ConfigService} from "./config.service";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/last'
import {ReplaySubject} from "rxjs/ReplaySubject";

@Injectable()
export class FoodItemService {
  foodItems$ = new ReplaySubject<FoodItem[]>(1);

  constructor(private http: HttpClient, private configService: ConfigService) {

  }

  private getPizzasReference(): Observable<FoodItem[]> {
    return this.http.get("/assets/pizza.json").map((data) => {
      if ('pizzas' in data) {
        return this.dataToFoodItems(data['pizzas']);
      }
      console.error("Invalid content for pizza.json", data);
      return []
    });
  }

  private dataToFoodItems(data: string): FoodItem[] {
    let res: FoodItem[] = [];
    for (let pizzaData of data) {
      try {
        let pizza = new FoodItem();
        Object.assign(pizza, pizzaData);
        res.push(pizza);
      }
      catch (e) {
        console.error(e);
      }
    }
    return res
  }

  private loadFoodItems(): Observable<FoodItem[]> {
    return Observable.create(observer => {
      let foodItemsData = this.configService.getFoodItemsData();
      if (foodItemsData) {
        observer.next(this.dataToFoodItems(foodItemsData));
        observer.complete();
      }
      else {
        this.getPizzasReference().subscribe(foodItems => {
          this.configService.setFoodItemsData(foodItems);
          observer.next(foodItems);
          observer.complete();
        });
      }
    }).delay(1000);
  }


  public getFoodItems(): Observable<FoodItem[]> {
    this.loadFoodItems().subscribe(foodItems => {
      this.foodItems$.next(foodItems);
    });
    return this.foodItems$.asObservable();
  }

  public addFoodItem(foodItem: FoodItem): void {
    this.loadFoodItems().subscribe(foodItems => {
      let existingFoodItem = foodItems.find(element => element.id == foodItem.id);
      if (existingFoodItem) {
        this.foodItems$.error("Impossible d'ajouter la pizza " + foodItem.name +
          ", une pizza avec le même id existe déjà (" + foodItem.id + ").");
      }
      else {
        foodItems.push(foodItem);
        this.configService.setFoodItemsData(foodItems);
        this.foodItems$.next(foodItems);
      }
    })
  }

  public removeFoodItem(foodItem: FoodItem): void {
    this.loadFoodItems().subscribe(foodItems => {
      foodItems = foodItems.filter(element => element.id != foodItem.id);
      this.configService.setFoodItemsData(foodItems);
      this.foodItems$.next(foodItems);
    });
  }

}
