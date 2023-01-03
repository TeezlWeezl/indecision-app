class Person {
  constructor(name = 'Not provided') {
    this.name = name
    this.firstName = this.splitName()[0]
    this.lastName = this.splitName()[1]
  }
  splitName() {
    return this.name.split(' ')
  }
  getGreeting() {
    return `Hi ${this.firstName}. Schön, dass du hier bist.`
  }
}
class Student extends Person {
  constructor(name, age, major = 'undecided') {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getGreeting() {
    let test = super.getGreeting()
    return 'testing'
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
  super(name, age)
  this.homeLocation = homeLocation}

  getGreeting() {
    return `Hi ${this.name}, schön, dass du hier bist. Du wohnst in ${this.homeLocation}`
  }
}

const me = new Student('Thies Oelke', 'Computer Science')
console.log(me.firstName)
console.log(me.lastName)
console.log(me.getGreeting())