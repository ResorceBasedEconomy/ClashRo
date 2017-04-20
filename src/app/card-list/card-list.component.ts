import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() cards = []
  @Output() toggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  toggleCardSelection (cardId) {
    console.log('emitting: ', cardId);
      this.toggle.emit({cardId});
  }

}
