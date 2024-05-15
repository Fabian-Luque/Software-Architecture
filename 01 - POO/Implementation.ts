// Definition of the abstract class Vehicle
abstract class Vehicle {
    // Protected properties
    protected make : string;
    protected model : string;

    constructor( make : string, model : string ){
        this.make = make;
        this.model = model;
    }

    // Abstract methods
    abstract start() : string;

    // Concrete method
    stop(): string {
        return "The vehicle has stopped.";
    }
}


// Definition of the class Car that extends Vehicle
class Car extends Vehicle {
    private hasSunroof: boolean;

    constructor( make: string, model: string, hasSunroof: boolean) {
        super(make, model); // call to constructor of the parent class
        this.hasSunroof = hasSunroof;
    }

    start(): string {
        return "The car has started.";
    }

    openSunroof(): string {
        if (this.hasSunroof) {
            return "Opening sunroof.";
        }

        return "This car does not have a sunroof.";
    }
}

// Class ElectricCar that extends Car
class ElectricCar extends Car {
    private baterrySize: number;

    constructor(make: string, model: string, batterySize: number) {
        super(make, model, false); // Electric cars do not have sunroofs
        this.baterrySize = batterySize;
    }

    start(): string {
        return "Silently starting the electring engine.";
    }
}

let myCar = new Car("Toyota", "Corolla", true);
let myTesla = new ElectricCar("Tesla", "Model S", 100);