import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import CardService from '../card.service';


@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.css']
})
export class CardFilterComponent implements OnInit {

  @Output() changed = new EventEmitter(); 
  cardsFilter = {byName: '', byType: '', byArena: '', byMaxCost: ''};
  cardTypes = [];
  arenas = new Array(11)

  constructor() { }

  ngOnInit() {
    CardService.getCardTypes().then(cardTypes => {
        this.cardTypes = cardTypes;
      });
  }

  applyFilter() {
    this.changed.emit(this.cardsFilter)
  }

}
