// JS MAPS
// Map is a Data Structure to map values to keys (Just like Objects)
// Main diffrecne is in Maps keys can have anytype where in Objects it was always a String
// Keys can also contain an object or arrays or other maps in maps

const resturant = new Map(); //Setting values to map
resturant.set('name', 'Druid Garden');
resturant.set(1, 'Bengaluru')
resturant.set(2, 'Mumabi')
resturant.set('categories', ['Vegetarian', 'Pizzaeria', 'Italic', 'Organic'])
         .set('open', 11)
         .set('close', 23)
         .set(true, 'We are open')
         .set(false, 'We are closed')

console.log(resturant.get('name')) //Fetching values from map
console.log(resturant.get(true))

console.log("Fun Experiment")
const time = 21;
console.log(resturant.get(time > resturant.get('open') && time < resturant.get('close')));


// JS MAPS ITERATION

const question =  new Map([
    ['question', 'What is the best programming language in the world'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    [4, 'Python'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try Again']
])
console.log(question)

for(let [keys,values] of question){
    if(typeof keys === 'number')
        console.log(keys)
}
