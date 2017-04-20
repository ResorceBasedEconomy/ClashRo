import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card = {name: 'dd?', idName: 'goblins', elixirCost: 8};
  @Input() mode = 'preview';
  constructor() { }

  ngOnInit() {
  }
  getUrl(card) {
    return `assets/img/cards/${card.idName}.png`;
  }

}
