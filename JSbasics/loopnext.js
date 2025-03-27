let teas = ["green tea ", " black tea", "chai", "oolong tea"];
let newTea = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] == "chai") {
    break;
  }
  newTea.push(teas[i]);
}
// console.log(newTea);

let cities = ["london", "new york", "paris", "berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] == "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num == 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

let Teas = ["chai", "green tea", "herbal tea", "black tea"];

let preferredTeas = [];

for (const tea of Teas) {
  if (tea == "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}
// console.log(preferredTeas);

// an object has keys instead of an index just like an array

let citiesPopulation = {
  london: 1000,
  New_York: 2000,
  paris: 3000,
  berlin: 4000,
};

let cityNewPopulation = {};

// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));

// studied object functions

for (const city in citiesPopulation) {
  // console.log(city);
  // console.log(citiesPopulation[city]);
  if (city == "paris") {
    continue;
  }
  cityNewPopulation[city] = citiesPopulation[city];
}
// console.log(cityNewPopulation);

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];

let avaliableTea = [];
teaCollection.forEach(function (tea) {
  if (tea == "chai") {
    return;
  }
  avaliableTea.push(tea);
});
// console.log(avaliableTea);
let myWorldCities = ["berlin", "tokyo", "sydney", "paris"];

let travelledCitites = [];

myWorldCities.forEach((city) => {
  if (city == "sydney") {
    return;
  }
  travelledCitites.push(city);
});
// console.log(travelledCitites);
let chaitea = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of chaitea) {
  if (tea.length > 10) {
    continue;
  }

  shortTeas.push(tea);
}

console.log(shortTeas);
