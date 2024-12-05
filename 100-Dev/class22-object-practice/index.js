// -------------------- constructor ------------------------

// constructors : constructors that bring classes to javascript

// the capital letter of function indicates its a constructor
// (this) is a constructor, any car that comes out of this constructor is going to have all of this property and all of the methods. 
// so we don't have to rewrite (object value) code every single time we want to make an object
function MakeCar(carMake, carModel, carColor, numOfDoors){
    this.make = carMake,
    this.model = carModel,
    this.color = carColor,
    this.doors = numOfDoors,
    this.honk = function(){
        alert('BEEP BEEP FUCKER')
    }
    this.lock = function(){
        alert(`Locked ${this.doors} doors!`)
    }
}
let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4);
let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2);


// -------------- car factory ----------------
// -------- we forgot to enable bluetooth ---------

// --------- prototype inheritence ----------

//  If a object has a property or method is that it will check itself first , do i have that property or method, and if it doesn't , it's going to look at its factory or wherever it's source core, do you have that property or method and if it has it it'll use it. 


// A prototype is another object that is used as a fallback source of properties

// object prototype in js
// array prototype in js
// string prototype in js


let teslaRoadster = new MakeCar('Tesla', 'Radster', 'Red', 2);
console.log(teslaRoadster.bluetooth);  // undefined

MakeCar.prototype.bluetooth = true;
console.log(teslaRoadster.bluetooth);   // true

let teslaRoadster = new MakeCar('Tesla', 'Radster', 'Red', 2);
console.log(teslaRoadster.doors.toString());  // "2" not 2