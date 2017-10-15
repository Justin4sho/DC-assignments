

var integers = [1,2,3,5,4,7,8,9,4]


var c4 = function (l1){
  for (var i = 0;i < l1.length; i++){
    for (var j = i + 1; j < l1.length;j++){
      if (l1[j] === l1[i]){
        return l1[j];
      }
    }
  }
}

console.log(c4(integers));
