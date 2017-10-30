var count = counter(4);

function counter (x) {

  return {
    increment : function () {
      return x += 1;},
    decrement : function () {
      return x -= 1;}
  };
}
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());
console.log(count.decrement());
