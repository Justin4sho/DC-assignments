var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

console.log(people.sort(function(a,b){
  if (a.length < b.length ){
    return -1;
  }
  else if (a.length > b.length){
    return 1;
  }
  return 0;
}))
