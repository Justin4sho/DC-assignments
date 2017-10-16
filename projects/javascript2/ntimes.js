function callNTimes(x, fun){
  for (var i = 0; i < x; i++){
    fun();
  }
}

function hello(){
  console.log('Hello, World!');
}

callNTimes(9,hello);
