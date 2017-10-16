var string = 'taad faat pet boot got loopy, took walk';
string = string.toLowerCase();
var vowels = ['aa', 'ee', 'ii','oo','uu'];
var longv = ['aaaaa', 'eeeee', 'iiiii','ooooo','uuuuu'];

var long = function (item, i){
  string = string.replace(item,longv[i]);
}


vowels.forEach(long)

console.log(string);
