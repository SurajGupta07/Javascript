//JS SETS

const orderSet = new Set([
    'pasta',
    'pizza',
    'pizza',
    'pasta'
]);
console.log(orderSet)
console.log(new Set('Suraj'))
console.log(orderSet.size) // Check the size of set
console.log(orderSet.has('pizza')); //To Check if it has the element
orderSet.add('Garlic Bread');
orderSet.add('Burger'); // Adding elemets to set
console.log(orderSet);
orderSet.delete('Burger') //Deleting elements Set
console.log(orderSet)

for (const order of orderSet) //Looping elemets 
    console.log(order)

orderSet.clear() // Deleting all elements from sets
console.log(orderSet)

// Real Time Example
const staff = ['Waiter', 'Manager', 'Waiter', 'Chef', 'Manager', 'Chef'];
console.log("THIS IS A SET")
let uniqueStaff = new Set(staff)
console.log(uniqueStaff);
console.log("THIS IS AN ARRAY")
uniqueStaff = [...new Set(staff)]
console.log(uniqueStaff);

//Check for unique letters in a variable
console.log(new Set("SurajGupta").size)