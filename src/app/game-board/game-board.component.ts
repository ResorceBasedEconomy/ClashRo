import { Component, OnInit , Input} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import CardService from '../card.service';
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  op = null;
  
  constructor() { }

  ngOnInit() {
    this.op = CardService.getRandomOp();
  }
  

}
