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

}
