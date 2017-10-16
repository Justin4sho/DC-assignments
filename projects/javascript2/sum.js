var a = [1,2,3,7,30,23,1,2];

a.reduce(function(total,i){
  total += i;
})

console.log(a.reduce(function(total,i){
  console.log(total,i);
  return total + i;
}));
