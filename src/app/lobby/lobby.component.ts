import { Component, OnInit, Output } from '@angular/core';
import CardService from '../card.service';
import * as swal from 'sweetalert';

import {Router} from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  cards = [];
  filter = null;
  deckReview = null;
  parentRouter = Router;
  
  ngOnInit() {
    CardService.getCards().then(cards => this.cards = cards)
  }

  get cardsToShow() {
      if (!this.filter) return this.cards;
      else return CardService.filterCards(this.cards, this.filter)
  }
  get selectedCards() {
    return this.cards.filter(card => card.selected);
  }

  get deckReady() {
    return this.selectedCards.length === 8
  }
  
  get avgElixirCost() {
    const res = this.cards.reduce((acc, card) => {
      if (card.selected) {
        acc.sum += card.elixirCost
        acc.count++;
      }
      return acc;
    }, { sum: 0, count: 0 });
    return Number(res.sum / res.count).toFixed(1);
  }
  applyFilter(filter) {
      // console.log(filter);
      this.filter = filter;
  }
  toggleCardSelection(ev) {
    //  console.log(ev);
    const card = this.cards.find(card => card._id === ev.cardId)

    if (!card.selected && this.selectedCards.length < 8) {
      card.selected = !card.selected;
      CardService.audio.count[this.selectedCards.length].play();

      if (this.deckReady) {
          setTimeout(() => CardService.audio.ready.play(), 1000);
          CardService.saveDeck(this.selectedCards);
      }


    } else {
      card.selected = false;
    }
  }
  showReviewModal() {
    const review = CardService.analyzeDeck(this.selectedCards)
    const body = review.tips.map(tip => `*. ${tip.txt}`).join('\n')
    swal(`Deck Review: Avg Cost: ${review.avgCardCost}`, body);

  }
  stratGame() {
    CardService.setDeck(this.selectedCards);
   
  }
  

}
