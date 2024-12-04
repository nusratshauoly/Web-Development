//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

// properties
stopwatch.brand = 'Nike'
stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.size = 'shmmmedium'


// methods
stopwatch.start = function(){
    console.log('STARTTTINNNNGGGG')
}
stopwatch.stop = function(){
    console.log('STOPPPINNGGG')
}
stopwatch.sayBrand = function(){
    console.log( stopwatch.brand  )
}

stopwatch.start();
stopwatch.stop();
stopwatch.sayBrand();

// i can also write the object like this
let stopwatchs = {
    brand: 'Rolex',
    color: 'white',
}