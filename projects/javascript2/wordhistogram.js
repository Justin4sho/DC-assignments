
var words = {};

function wordHistogram(string){

  var string1 = string.split(',');
  for (var i = 0;i < string1.length;i++) {
    var word = string1[i];
    if (word in words){
      words[word] ++;
    }
    else{
      words[word] = 1;
    }

  };
  return words;
};

console.log(wordHistogram('to be or not to be'));
