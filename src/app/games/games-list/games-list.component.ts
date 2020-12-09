import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  constructor() { }
  @Input()
  games;

  ngOnInit(): void {
  }

  removeGame(gamesId): void {
    this.games.splice(gamesId,1);
  }

}
