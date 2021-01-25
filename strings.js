//WORKING WITH STRINGS
// STRINGS ARE IMMUTABLE COZ THEY'RE PRIMITIVES
const airline = 'TAP Air Portugal'
const plane = 'A320'

console.log(plane[0]);
console.log('B2930'[0]);

console.log(airline.length);
console.log('Suraj'.length);

console.log(airline.indexOf('r')); //First occurance of the letter/word
console.log(airline.lastIndexOf('r')); //Last occurance 
console.log(airline.indexOf('Portugal')) // Occurance of entire word and it is case sensitive
//SLICE METHOD ALWAYS RETURNS A NEW STRING
console.log(airline.slice(4)) //Position at which extraction will start
console.log(airline.slice(4, 7)) //Begin and End position and lenght = end - begin

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat){
    //B and E are middle seats
    const s = seat.slice(-1)
    if(s === 'B' || s === 'E'){
        console.log('You got the middle seat');
    }
    else{
        console.log("You got lucky")
    }
};
checkMiddleSeat('115E');
checkMiddleSeat('123C');
checkMiddleSeat('266B');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in passanger name
// const passanger = 'sUrAJ'
// console.log("Before Passanger name:", passanger)
// const lowerCase = passanger.toLowerCase()
// const correctPassanger = lowerCase[0].toUpperCase() + lowerCase.slice(1)
// console.log("After conversion", correctPassanger)

const correctCapialization = function(name){
    const passangerLower = name.toLowerCase();
    const correctName = passangerLower[0].toUpperCase() + passangerLower.slice(1);
    console.log(correctName);
}
correctCapialization('sURaJ')

//email check
const email = 'suraj@gmail.com';
const loginEmail = ' surAj@Gmail.Com \n';
console.log(loginEmail)
const trimmedEmail = loginEmail.toLowerCase().trim();
console.log(trimmedEmail)
if(email === trimmedEmail){
    console.log('Success')
}

//String Replace

const cash = 'Rs22'
const usCash = cash.replace('Rs', '$') //Only first occurance is replaced
console.log(cash)
console.log(usCash)

const announcment = 'All Passangers please come to Door no. 23, Door no. 23'
console.log(announcment.replaceAll('Door', 'Gate'))
console.log(announcment.replace(/Door/g, 'Gate'))

//Booleans
const airPlane = 'Air Bus 226cs'
console.log(airPlane.includes(22))
console.log(airPlane.startsWith('Air'))

//Baggae check practice exercise

//Split and Join Method - Most powerfull

console.log('a+very+large+string'.split('+'))
console.log('Suraj Gupta'.split(' '))

const [firstName, lastName] = 'Suraj Gupta'.split(' ');
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName)

const capitalizeName = function(name){
    const names = name.split(' ')
    const nameUpper = []
    for (const n of names){
       nameUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(nameUpper.join(' '))
}

capitalizeName('jessica ann smith davis');

//Padding
const paddname = 'Go to gate number 23'
console.log(paddname.padStart(30, '+'));
console.log(paddname.padEnd(30, '+'));

//Repeat
const repeatName = 'My name is Khan'
console.log(repeatName.repeat(5))