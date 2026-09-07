//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}
const cat = new Cat("cat")
const dog = new Dog("dog")

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
