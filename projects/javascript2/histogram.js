var string1 = ('bananas');
var letter = {};

function letterHistogram(string){
  for (var i = 0;i < string.length;i++) {

    if (string[i] in letter){
      letter[string[i]] += 1;
    }
    else{
      letter[string[i]] = 1;
    }
  };
  return letter;
};

console.log(letterHistogram('bananasana'));
