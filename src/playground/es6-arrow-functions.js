const square = function (x) {
    return x*x
}

const squareES6_A = (x) => {
    return x*x
}

const squareES6_B = x => x*x

console.log(square(10),squareES6_A(8))

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    const habitat1 = this.cities.map((city) => this.name + ' has lived in ' + city); // this works
    const habitat2 = this.cities.map(function(city) {this.name + ' has lived in ' + city}); // this doesn't work
    return habitat1
  },
};
console.log(user.printPlacesLived());