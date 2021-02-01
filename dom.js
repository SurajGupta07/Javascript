const header = document.querySelector('.header')
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Query selctor or getElementById

//ElemetByTagName is a collection and has collection of all tags
const buttons = document.getElementsByTagName('button');
console.log(buttons)

console.log(document.getElementsByClassName('offWhite'));

// prepend => First child and append => last child
// before => before div
// header.after(varName)

const message = document.createElement('div')
message.innerHTML =  'This page uses cookies to personalise your browsing <button>Got it!</button>'
message.classList.add('button')
header.append(message)

function cookiesEvent(){
    message.remove();
}

message.style.width = '120%';
message.style.color = '#1155cc'
console.log(getComputedStyle(message))
console.log(getComputedStyle(message).color)

header.addEventListener('click', cookiesEvent)