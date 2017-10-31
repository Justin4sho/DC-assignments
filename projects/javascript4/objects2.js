class Person{
  constructor(name) {
    this.name = name;
    this.friends = [];
  }
  addFriend(friend) {
    this.friends.push(friend);
  }
  createGreeting(other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
  }
  greet(other) {
    console.log(this.createGreeting(other));
  }
  // lazyGreet(other) {
  //   var self = this;
  //   setTimeout(function () {
  //     self.greet(other)
  //   }, 2000);
  // }
  lazyGreet(other) {

    setTimeout(() => {
      this.greet(other)
    }, 2000);
  }
  createGreetingsForFriends() {
    var array = this.friends.map(() => function() {
      return this.createGreeting();
    });
    console.log(array);

  }
}

var justin = new Person('Justin');
var adam = new Person('Adam')
var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
justin.addFriend(anushka);
justin.addFriend(henrique);
justin.createGreetingsForFriends();
console.log(justin.name);
justin.addFriend(adam);
justin.lazyGreet(adam);
