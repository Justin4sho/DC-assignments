var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}
// add Kareem's number
phonebookDict.Kareem = '938-489-1234';
// lookup Elizabeth
console.log(phonebookDict.Elizabeth);
// delete alice's phone entry
phonebookDict.Alice = '';
// Change Bob's phonenumber
phonebookDict.Bob = '968-345-2345';
// find entry using a variable
var personName = 'Elizabeth';
console.log(phonebookDict[personName]);

// print entries using loop
for (var attribute in phonebookDict){
  var value = phonebookDict[attribute];
  console.log(`${attribute}: ${value}`);
}
console.log(phonebookDict);
