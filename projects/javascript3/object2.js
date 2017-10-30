class Card {
  constructor (point, suit) {
    this.point = point;
    this.suit = suit;
  }
}
var myCard = new Card(5 , 'diamonds');

console.log(myCard.suit);
console.log(myCard.point);
