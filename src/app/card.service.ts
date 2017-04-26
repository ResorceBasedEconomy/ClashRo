
const state = {
    cards: null,
    myDeck: []
}
let cards = null;
let myDeck = [];

const audio = {
    ready :  new Audio('assets/audio/ready.ogg'),
    bg :  new Audio('assets/audio/bg.ogg'), 
    win :  new Audio('assets/audio/win.mp3'), 
    lose :  new Audio('assets/audio/lose.mp3'),
    attack :  new Audio('assets/audio/attack2.mp3'),
    count: []
};
for (let i=1; i<=8; i++) {
    audio.count[i] = new Audio(`assets/audio/count/${i}.mp3`)
}

// window.audio = audio;

// const knownCards = ['arrows', 'bomber', 'archers', 'goblin', 'giant'];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getCards = () => {
    if (state.cards) return Promise.resolve(state.cards);
    // return fetch('http://www.clashapi.xyz/api/cards')
    return fetch('assets/data/cards.json')
                .then(res => res.json())
                .then((res: any) => {

                    // res = res.filter(card => knownCards.includes(card.idName));

                    state.cards = res.map(card => {
                        card.offense = getRandomIntInclusive(1, 7);
                        card.defense = getRandomIntInclusive(1, 7);
                        // card.audioUrl = `assets/audio/card/${card.idName}.mp3`;
                        card.audioUrl = `assets/audio/attack1.mp3`;
                        card.audio = new Audio(card.audioUrl);
                        return card;
                    });
                    
                    return state.cards;
                })
                
}

const getDeck = () => {
    if (localStorage.deck) {
        let cards = JSON.parse(localStorage.deck);
        return cards.map(card => { 
                card.audio = new Audio(card.audioUrl); return card})
    } 
    else return [];
}

const saveDeck = deck => {
    const deckToSave = deck.map(card => {delete card.audio; return card})
    localStorage.deck = JSON.stringify(deckToSave);
}

const getRandomFromArr = (arr) => {
    const item = arr[Math.floor(Math.random()*arr.length)];
    return item;
}

const getRandomOp = () => {
    const op = {name: 'Fat Bastard', health: 7, cards: [], currCard: null, currCardHealth : 0}
    return getCards().then(cards => {
        op.cards = Array(8).fill(null).map(() => getRandomFromArr(cards));
        console.log('op is ready', op);
        return op;
    })

}

const getCardTypes = () => {
    return getCards().then(cards => Array.from(
            cards.reduce((acc, card) => 
              acc.add(card.type), new Set()).values()))
}

const filterCards = (cards, cardsFilter) => {
    console.log('FILTER CARDS CALLED WITH ', cards, cardsFilter);
    const filteredCards = 
    cards.filter(card => {
            
            console.log('Card is', card);
            
            return card.name.toLowerCase().includes(cardsFilter.byName.toLowerCase()) &&
                    (!cardsFilter.byType || cardsFilter.byType === card.type) &&
                    (cardsFilter.byArena === '' || cardsFilter.byArena >= card.arena) && 
                    (cardsFilter.byMaxCost === '' || cardsFilter.byMaxCost >= card.elixirCost) 
                    
    })
    return filteredCards;
}


const analyzeDeck = deck => {
  return {
    avgCardCost: 4,
    score: 8,
    tips: [
      {
        txt: 'Better have something against flying troops',
        level: 'warning'
      },
      {
        txt: 'It is recommended to have at least two spells',
        level: 'info'
      },
      {
        txt: 'Your deck is costly!',
        level: 'info'
      }      
    ]
  };
}

export default {
    getCards,
    getDeck,
    saveDeck,
    analyzeDeck,
    getRandomOp,
    audio,
    getCardTypes,
    filterCards
}