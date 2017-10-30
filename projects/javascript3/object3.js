class Card {
  constructor (point, suit) {
    this.point = point;
    this.suit = suit;
  }
  getImageUrl(){
    var cardImage =  'images/' + this.point + '_of_' + this.suit + '.png';
    return cardImage;
  }
}
var myCard = new Card(5 , 'diamonds');

console.log(myCard.suit);
console.log(myCard.point);
console.log(myCard.getImageUrl());
