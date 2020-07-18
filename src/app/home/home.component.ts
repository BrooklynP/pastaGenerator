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

  getOrder(currentIndex, arrayName) {
    let index = currentIndex;
    switch (arrayName) {
      case 'pasta':
        if (this.selectedPasta === -1) {
          index = currentIndex + this.offset;
          while (index >= this.pasta.length) {
            index = index - this.pasta.length;
          }
          return index;
        }
        else {
          if (currentIndex === this.selectedPasta) {
            return 4;
          }
          else if (currentIndex === 4) {
            return this.selectedPasta;
          }
          else {
            return currentIndex;
          }
        }
      case 'meats':
        if (this.selectedMeat === -1) {
          index = currentIndex + this.offset;
          while (index >= this.meats.length) {
            index = index - this.meats.length;
          }
          return index;
        }
        else {
          if (currentIndex === this.selectedMeat) {
            return 4;
          }
          else if (currentIndex === 4) {
            return this.selectedMeat;
          }
          else {
            return currentIndex;
          }
        }
      case 'sauces':
        if (this.selectedSauce === -1) {
          index = currentIndex + this.offset;
          while (index >= this.sauces.length) {
            index = index - this.sauces.length;
          }
          return index;
        }
        else {
          if (currentIndex === this.selectedSauce) {
            return 4;
          }
          else if (currentIndex === 4) {
            return this.selectedSauce;
          }
          else {
            return currentIndex;
          }
        }
      case 'sides':
        if (this.selectedSide === -1) {
          index = currentIndex + this.offset;
          while (index >= this.sides.length) {
            index = index - this.sides.length;
          }
          return index;
        }
        else {
          if (currentIndex === this.selectedSide) {
            return 4;
          }
          else if (currentIndex === 4) {
            return this.selectedSide;
          }
          else {
            return currentIndex;
          }
        }
      default:
        return currentIndex;
    }
  }
}
