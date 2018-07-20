export class FoodItem {
  id: string = null;
  name: string = null;
  description: string = null;
  image: string = null;
  price: number = 0;
  isVegan: boolean = false;

  public getPrice(): string {
    if (this.price) {
      return this.price.toFixed(2) + "€";
    }
    else {
      return "";
    }
  }

  static generateId(foodItem: FoodItem) {
    return foodItem.name.toLowerCase()
      .replace(/\s/g, '_')
      .replace(/[^\w]/g, '');
  }
}
