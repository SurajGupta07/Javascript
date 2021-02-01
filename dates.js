// Creating a date
const date =  new Date()
console.log(date)
//Month is zero based in javascript
console.log(new Date(2037, 10, 19, 15, 23, 5))
console.log(new Date(10, 2066, 12, 77))

const future = new Date(2037, 10, 19, 15, 23)
console.log(future)
console.log(future.getFullYear())
console.log(future.getMonth())
console.log(future.getDate())
console.log(future.getHours())
console.log(future.getMinutes())
console.log(future.getSeconds())

//Converting it to a string
console.log(future.toISOString())

console.log(Date.now())

//Internationalization API for date (ISO Language code tables)
console.log(new Intl.DateTimeFormat('en-US').format(now))

console.log(new Intl.DateTimeFormat('en-US').format(now))
