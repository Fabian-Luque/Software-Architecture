abstract class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }

    // Abstract Method
    abstract makeSound(): string;

    // Concrete Method
    eat(): string {
        return `${this.name} is eating.`;
    }

}

// Class Dog that extends animal
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    // Implementation of the abstract method
    makeSound(): string {
        return `${this.name} barks.`;
    }
}

// Class Cat that extends animal
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    //Implementation of the abstract method
    makeSound(): string {
        return `${this.name} meows.`;
    } 
}

let myDog = new Dog("Rex");
let myCat = new Cat("Manolo");

console.log(myDog.makeSound()); // Outputs: Rover barks.
console.log(myCat.makeSound()); // Outputs: Whiskers meows.
console.log(myDog.eat()); // Outputs: Rover is eating.