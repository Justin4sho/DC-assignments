var cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value:15}
];

var capacity = 20;

var cake = function maxDuffelBagValue(cakeTypes, capacity){
  for (var i = 0;i < cakeTypes.length;i++){
    console.log(cakeTypes[i].value / cakeTypes[i].weight);
  }
}

cake(cakeTypes,capacity);
