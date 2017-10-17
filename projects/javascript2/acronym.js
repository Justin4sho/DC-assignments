var a = ['very', 'important', 'person'];

// var a1 = a.map(function(string){
//   string.slice(0,1);
// })
function acro(a){
  return a.reduce(function(total,i){
    return total + i[0];


  },[]);
}
console.log(acro(a));
