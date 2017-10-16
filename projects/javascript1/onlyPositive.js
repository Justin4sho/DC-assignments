var nums = [1, -3, 5, -3, 0,-6,4,7,-1];
var num2 = [];
// var pos = function (item, i){
//   if (item < 0){
//     nums.splice(i, 1);
//     console.log(nums);
//
//   }
// }

// console.log(nums.forEach(pos));

var pos = function(num) {
  for (var i = 0; i < num.length;i++){
    if (num[i] < 0){
      num.splice(i,1);
    }
  }
  return num;
}

console.log(pos(nums));
