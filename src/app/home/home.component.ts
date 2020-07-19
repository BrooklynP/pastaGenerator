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
  private readonly middleIndex = 4;
  private readonly spinSpeed = 200;
  private readonly spinTime = 2000;

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
    const isSpinning = setInterval(() => { this.offset++; }, this.spinSpeed);
    setTimeout(() => {
      clearInterval(isSpinning);
      this.selectedPasta = this.data.getRandomItem('pasta');
      this.selectedSauce = this.data.getRandomItem('sauces');
      this.selectedMeat = this.data.getRandomItem('meats');
      this.selectedSide = this.data.getRandomItem('sides');
      this.isSpinning = false;
    }, this.spinTime);
  }

  getOrderForArray(array: Array<string>, currentIndex: number, selectedItem: number): number {
    let newIndex = currentIndex;
    if (selectedItem === -1) {
      newIndex = currentIndex + this.offset;
      while (newIndex >= array.length) {
        newIndex = newIndex - array.length;
      }
      return newIndex;
    } else {
      if (currentIndex === selectedItem) {
        return this.middleIndex;
      } else if (currentIndex === this.middleIndex) {
        return selectedItem;
      } else {
        return currentIndex;
      }
    }
  }

  getOrder(currentIndex: number, arrayName: string): number {
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
