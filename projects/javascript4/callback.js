// rewrite the following normal functions into callback functions.
//
// function add(x, y) {
//   var result = x + y;
//   return result;
// }
//
// function subtract(x, y) {
//   return x - y;
// }
//
// function greeting(person) {
//   return 'Hola, ' + person + '!';
// }
//
// function product(numbers) {
//   return numbers.reduce(function(a, b) {
//     return a * b;
//   }, 1);
// }

function add (x ,y, callback) {
  var result = x + y;
  callback(result);
}
add(1,2, function (result) {
  console.log(result);

});

function subtract (x, y, callback) {
  var result = x - y;
  callback(result);
}
subtract(4,2, function(result){
  console.log(result);
});

var greet = function greeting(person){
  return 'Hola, ' + person + '!';
}
var greet1 = function (person, callback){
  return callback(person);
}
console.log(greet1('Justin', greet));
