// FUNCTIONS
'use strict';
// 1. DEFAULT PARAMETERS

const bookings = [];

const createBooking = function(flightNum, noOfPassanger = 1, price = 100 * noOfPassanger){
    //ES5 Way of setting default values
    // noOfPassanger = noOfPassanger || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        noOfPassanger,
        price
    }
    console.log(booking)
    bookings.push(booking);
}

createBooking('LH123', 22)

// HOW PASSING ARGUMENTS WORK: VALUES VS REFERENCES

const flight = 'LH647'
const suraj = {
    name:'Suraj Gupta',
    passport:12345678
}

const checkIn = function(flightNo, passanger){
    flightNo = 'LH999'
    passanger.name = 'Mr' + passanger.name;
    console.log(flightNo)
    if(passanger.passport === 12345678){
        console.log('Checked In')
    }else{
        console.log('Wrong passport');
    }
}

checkIn(flight, suraj)
//JS does not have pass by reference

// FUNCTIONS ACCEPTING OTHER FUNCTIONS AS INPUT (FUNCTIONS ACCEPTING CALLBACK FUNCTIONS)
const onWord =  function(str){
    return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function(str){
    const  [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//Higer order Function

const transformer = function(str, fn){
    console.log(str)
    console.log(fn(str))
    console.log(fn.name)
}

transformer('JavaScript is the best!', upperFirstWord)
transformer('JavaScript is the best!', onWord)

document.body.addEventListener('click', function clickHandler(){
    console.log('Clicked')
});

// FUNCTIONS RETURNING FUNCTIONS

// Normal function
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('Hey')
greeterHey('Suraj')
greet('Hello')('ABD')

//Using arrow function
const greets = (greetings) => {
    return (names) => {
        console.log(`${greetings} ${names}`)    
    }
}
const greetersHey = greets('Hey')
greetersHey('Suraj')
greets('Hello')('ABD')

// CALL AND APPLY METHODS

const lufthanza = {
    airLine:'Lufthanza',
    code:'LH',
    booking: [],
    book(flightName, nameOfPass){
        console.log(`${nameOfPass} booked a seat on ${flightName} in ${this.code}`)
        this.booking.push(`flight: ${nameOfPass} booked a seat on ${flightName} in ${this.code}`)
    },
}
lufthanza.book(234, 'Suraj Gupta')
console.log(lufthanza)

const inwings = {
    airLine:'Inwings',
    code:'LH',
    booking: [],
};

//book(22, 'Suraj') Does not work as this keyword depends on function call
// CALL METHOD 
const book = lufthanza.book;
book.call(inwings, 22, 'Suraj'); 
console.log(inwings)
book.call(lufthanza, 123, 'Arya Stark')
console.log(lufthanza)

//APPLY METHOD
const flightData = [1231, 'Donald Trump']
book.apply(inwings, flightData)
console.log(inwings)

book.call(inwings, ...flightData)
console.log(inwings)

//BIND METHOD - Does not immedetily call the function instead calls a new function
const bookLH = book.bind(lufthanza);
const bookIN = book.bind(inwings);

bookLH(124, 'Stee Stove')

//Partial Application

const addTax = (rate, value) => value + value*rate;
console.log(addTax(0.18, 200))

const addGST = addTax.bind(null, 0.18)
console.log(addGST(850000))

