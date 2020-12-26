import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input()
  maximoRating = 5;
  @Input()
  ratingSelect = 0;
  maximoRatingArr = [];
  voted = false;
  lastRate = 0;

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  mouseIn(index): void {
    this.ratingSelect = index + 1;

  }
  mouseOut() {
    if(this.lastRate !== 0){
      this.ratingSelect = this.lastRate;
    }else{
      this.ratingSelect = 0;
    }
}

  rate(index): void {
    this.ratingSelect = index + 1;
    this.voted = true;
    this.lastRate = this.ratingSelect;
    console.log(this.ratingSelect)
  }

}
