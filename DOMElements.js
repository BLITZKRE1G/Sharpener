let itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
itemList.parentElement.parentNode.parentElement.style.backgroundColor = 'green';

itemList.children[2].style.backgroundColor = 'yellow'
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = 'First CHild';
itemList.lastElementChild.style.backgroundColor = 'orangered'
itemList.lastElementChild.textContent = 'LAST ELEMENT';

console.log(itemList.previousElementSibling.previousElementSibling);
itemList.previousElementSibling.previousElementSibling.style.backgroundColor = 'black'


let newDiv = document.createElement('div');
console.log(newDiv)
newDiv.className = 'hello';
newDiv.id = 'hello-id'

// Set Attribute
newDiv.setAttribute('title', 'Hello Div Attribute');

//Create Text Node
let newDivText = document.createTextNode('Hello Div');

//Add text to div 
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
