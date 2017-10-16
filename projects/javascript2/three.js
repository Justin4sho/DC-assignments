


function call3Times(fun) {
  fun();
  fun();
  fun();
}

function hello(){
  console.log('Hello, World!');
}
call3Times(hello);
