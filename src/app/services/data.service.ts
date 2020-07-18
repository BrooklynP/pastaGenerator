import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private pastaShapes = ['Capelli', 'Macaroni', 'Shells', 'Rigatoni', 'Bow-Ties',
    'Lasagne', 'Lasagne Squares', 'Linguine', 'Parpadelle', 'Spaghetti', 'Macaroni',
    'Fettuccine', 'Spiralli', 'Penne', 'Fussili', 'Tagliatelle'];
  private meats = ['Diced Chicken Breast', 'Diced Turkey Breast', 'Chicken Butterfly', 'Beef Meatballs', 'Swedish Meatballs',
    'Chicken Meatballs', 'Chicken Sausage', 'Sausages', 'Hotdogs', 'Mince Beef', 'Decased Sausage', 'Pancetta',
    'No Meat'];
  private sauces = ['Marinara', 'Alfredo', 'Arabiata', 'Mushroom', 'Green Pesto',
    'Red Pesto', 'Bechemel', 'Chicken Tonight', 'Pink Sauce', 'Cheese',
    'Vodka', 'Marscapone', 'Pasta Bake'];
  private sides = ['Boiled Veg', 'Garlic Bread', 'Buttered Bread', 'Dough Balls', 'Mozarella Sticks', 'Wedges', 'Boiled Potatoes', 
  'Parmesan Broccoli', 'Nothing'];

  constructor() { }

  public getPastaShapes(): Promise<Array<string>> {
    return new Promise((resolve) => {
      resolve(this.pastaShapes);
    });
  }
  public getMeats(): Promise<Array<string>> {
    return new Promise((resolve) => {
      resolve(this.meats);
    });
  }

  public getSauces(): Promise<Array<string>> {
    return new Promise((resolve) => {
      resolve(this.sauces);
    });
  }

  public getSides(): Promise<Array<string>> {
    return new Promise((resolve) => {
      resolve(this.sides);
    });
  }

  public getRandomItem(arrayName: string): number {
    switch (arrayName) {
      case 'pasta':
        return this.getRandomNumber(0, this.pastaShapes.length);
      case 'meats':
        return this.getRandomNumber(0, this.meats.length);
      case 'sauces':
        return this.getRandomNumber(0, this.sauces.length);
      case 'sides':
        return this.getRandomNumber(0, this.sides.length);
      default:
        return 0;
    }
  }

  private getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
