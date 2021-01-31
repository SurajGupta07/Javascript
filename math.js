console.log(Math.sqrt(25));

console.log(Math.max(22,2,34,12))
console.log(Math.min(22,2,34,12))

console.log(Math.trunc(Math.random() * 6 + 1)) // random value between 2 numbers


//Remainder 
console.log(8 /3)
console.log(8 % 3)

//Checking if Even or odd number
const isEven = n => n % 2 === 0;
console.log(isEven(8))
console.log(isEven(19))

//bigInt -> cannot be mixed with regular functions
//Ex console.log(466n * 67)
console.log(123456789876543234567876543456789)
console.log(123456789876543234567876543456789n)
console.log(BigInt(123456789876543234567876543456789))

console.log(10000n + 10000000n)
console.log(34566543457n * 456897654567899n)