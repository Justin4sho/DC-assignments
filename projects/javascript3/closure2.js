var count1 = counter(5);

function counter (x) {
  var count = x;
  var actuallyCount = function () {
    count++;
    return count;
  }
  return actuallyCount;
}


console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());
