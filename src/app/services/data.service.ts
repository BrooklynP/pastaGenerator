import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private pastaShapes = ['Capelli', 'Macaroni', 'Shells', 'Rigatoni', 'Bow-Ties',
    'Lasagne', 'Lasagne Squares', 'Linguine', 'Parpadelle', 'Spaghetti', 'Macaroni',
    'Fettuccine', 'Spiralli', 'Penne', 'Fussili', 'Tagliatelle'];
  private meats = ['Chicken Breast', 'Turkey Breast', 'Beef Meatballs', 'Swedish Meatballs',
    'Chicken Meatballs', 'Chicken Sausage', 'Sausage', 'Hotdog', 'Mince Beef', 'Decased Sausage',
    'None'];
  private sauces = ['Marinara', 'Alfredo', 'Arabiata', 'Mushroom', 'Green Pesto',
    'Red Pesto', 'Bechemel', 'Chicken Tonight', 'Pink Sauce', 'Cheese Sauce',
    'Vodka Sauce', 'Marscapone', 'Pasta Bake', 'Carbonara',];
  private sides = ['Boiled Veg', 'Garlic Bread', 'Buttered Bread', 'Dough Balls', 'Mozerlla Sticks', 'Wedges'];

  constructor() { }

  getPastaShapes() {
    return new Promise((resolve) => {
      resolve(this.pastaShapes);
    });
  }
  getMeats() {
    return new Promise((resolve) => {
      resolve(this.meats);
    });
  }

  getSauces() {
    return new Promise((resolve) => {
      resolve(this.sauces);
    });
  }

  getSides() {
    return new Promise((resolve) => {
      resolve(this.sides);
    });
  }
}
