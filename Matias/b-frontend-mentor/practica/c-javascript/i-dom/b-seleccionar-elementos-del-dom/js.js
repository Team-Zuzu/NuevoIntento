/*
document.getElementById('id') - Accede a un elemento a travez de su id

document.querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

document.querySelectorAll('SelectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

// const title = document.getElementById("title");
// title.textContent = "DOM - Accediendo a nodos";

// Accediendo desde documento
// const paragraph = document.querySelector(".paragraph:nth-child(3)");
// console.log(paragraph);


// Accediendo desde elemento
// const paragraph = document.querySelector('.paragraph');
// const span = paragraph.querySelector('span');
// console.log(span);

// Accediendo desde el padre hasta el elemento al que queremos acceder
// const paragraph = document.querySelector('.paragraph');
// const span = document.getElementById('section').querySelector('span');
// console.log(span);

const paragraphs = document.querySelectorAll('.paragraph'); // genera una lista de nodos
console.log(paragraphs)

const paragraphsSpread = [...document.querySelectorAll('.paragraph')]; // genera un array
console.log(paragraphsSpread)

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph')); // genera un array también
console.log(paragraphsArray)

// paragraphs[0].style.color = 'red';
// paragraphs.map(p => p.style.color = 'green'); // ¿no funciona?
// paragraphsSpread.map(p => p.style.color = 'green');
paragraphsArray.map(p => p.style.color = 'green');

document.querySelector('.paragraph span').style.color = 'red';
document.querySelector('.paragraph span').style.fontFamily = 'Arial, Helvetica, sans-serif';

// console.log(paragraphs);