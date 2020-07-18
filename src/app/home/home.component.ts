import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pasta = [];
  public sauces = [];
  public meats = [];
  public sides = [];

  public selectedPasta = -1;
  public selectedSauce = -1;
  public selectedMeat = -1;
  public selectedSide = -1;

  public isSpinning = false;
  private offset = 0;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPastaShapes().then((res: Array<string>) => {
      this.pasta = res;
    });
    this.data.getSauces().then((res: Array<string>) => {
      this.sauces = res;
    });
    this.data.getMeats().then((res: Array<string>) => {
      this.meats = res;
    });
    this.data.getSides().then((res: Array<string>) => {
      this.sides = res;
    });
  }

  randomise() {
    this.isSpinning = true;
    this.selectedPasta = -1;
    this.selectedMeat = -1;
    this.selectedSauce = -1;
    this.selectedSide = -1;
    const isSpinning = setInterval(() => { this.offset++; }, 200);
    setTimeout(() => {
      clearInterval(isSpinning);
      this.selectedPasta = this.data.getRandomItem('pasta');
      this.selectedSauce = this.data.getRandomItem('sauces');
      this.selectedMeat = this.data.getRandomItem('meats');
      this.selectedSide = this.data.getRandomItem('sides');
      this.isSpinning = false;
    }, 2000);
  }

  getOrderForArray(array, currentIndex, selectedItem) {
    let newIndex = currentIndex;
    if (selectedItem === -1) {
      newIndex = currentIndex + this.offset;
      while (newIndex >= array.length) {
        newIndex = newIndex - array.length;
      }
      return newIndex;
    } else {
      if (currentIndex === selectedItem) {
        return 4;
      } else if (currentIndex === 4) {
        return selectedItem;
      } else {
        return currentIndex;
      }
    }
  }

  getOrder(currentIndex, arrayName) {
    switch (arrayName) {
      case 'pasta':
        return this.getOrderForArray(this.pasta, currentIndex, this.selectedPasta);
      case 'meats':
        return this.getOrderForArray(this.meats, currentIndex, this.selectedMeat);
      case 'sauces':
        return this.getOrderForArray(this.sauces, currentIndex, this.selectedSauce);
      case 'sides':
        return this.getOrderForArray(this.sides, currentIndex, this.selectedSide);
      default:
        return currentIndex;
    }
  }
}
