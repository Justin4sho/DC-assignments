var paragraph = 'Hello my name is justin, I am leet';
paragraph = paragraph.toUpperCase();


function leetspeak (string) {
  var normal = ['A','E', 'G', 'I', 'O', 'S', 'T'];
  var leet = ['4', '3', '6', '1', '0', '5', '7'];

  for (var i = 0;i < normal.length;i++) {
    while (paragraph.indexOf(normal[i]) > 0 ) {
      paragraph= paragraph.replace(normal[i], leet[i])
    };
  }
  console.log(paragraph);
}
leetspeak(paragraph);
