//Create a mouse object that has four properties and three methods

let mouse = {}

mouse.brand = 'Logitech',
mouse.color = 'black',
mouse.model = 'MX Ergo',
mouse.wireless = true

mouse.leftClick = function(){
    console.log('LEFT CLICKKKK');
}

mouse.rightClick = function(){
    console.log('RIGHT CLICKKKK');
}

mouse.scroll = function(){
    console.log('JUMP JUMP JUMP');
}



let mouse2 = {}

mouse2.brand = 'Logitech',
mouse2.color = 'black',
mouse2.model = 'Pro Wireless',
mouse2.wireless = true

mouse2.leftClick = function(){
    console.log('LEFT CLICKKKK');
}

mouse2.rightClick = function(){
    console.log('RIGHT CLICKKKK');
}

mouse2.scroll = function(){
    console.log('JUMP JUMP JUMP');
}



let mouse3 = {}

mouse3.brand = 'Apple',
mouse3.color = 'Silver',
mouse3.model = 'Magic Trackpad 2',
mouse3.wireless = true

mouse3.leftClick = function(){
    console.log('LEFT CLICKKKK');
}

mouse3.rightClick = function(){
    console.log('RIGHT CLICKKKK');
}

mouse3.scroll = function(){
    console.log('Slide Two Fingers Up');
}



// constructor

// if i donot want to write the same code everytime, want to set the value once and pass my values in, i should have only had to set this once and pass my values in, this is what constructor does. a constructor enables us to set something up once amd then pass the values in.

let mouses = {}

this.brand = 'Logitech',
this.color = 'black',
this.model = 'MX Ergo',
this.wireless = true

this.leftClick = function(){
    console.log('LEFT CLICKKKK');
}

this.rightClick = function(){
    console.log('RIGHT CLICKKKK');
}

this.scroll = function(){
    console.log('JUMP JUMP JUMP');
}


// ---------------
let num = 2;

alert(num.toString());  // "2"