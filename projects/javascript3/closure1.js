var count1 = counter();

function counter () {
  var count = 0;
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
