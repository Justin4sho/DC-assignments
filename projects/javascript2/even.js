var a = [1,2,3,4];

function isEven (array){
  return array % 2 == 0;
}
console.log(a.filter(isEven));
