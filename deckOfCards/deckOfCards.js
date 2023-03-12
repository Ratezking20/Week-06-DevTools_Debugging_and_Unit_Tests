
const suits = ["Hearts","Spades","Clubs","Diamonds"];
const numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const cards = [];
const count = 0;

class Deck {
    constructor(cards = newDeck()){
    this.cards = cards
}
}

class Card{
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
}

function newDeck (){ 
    return suits.flatMap(suit => {
        return numbers.map(value => {
            return new Card (suit, value)
        });
    })
}

const deck = new Deck()
console.log(deck.cards)

//created a deck of 52 cards