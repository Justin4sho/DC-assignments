var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function temp(city) {
  if (city.temperature <= 70){
    return city.temperature;
  }
}
console.log(cities.filter(temp));
