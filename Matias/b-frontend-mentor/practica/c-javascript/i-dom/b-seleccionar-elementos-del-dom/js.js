/*
document.getElementById('id') - Acceder a un elemento a travez de su id

element | document.querySelector('selectorCSS') - Acceder al primer elemento que coincida con el selector CSS

element | document.querySelectorAll('SelectorCSS') - Acceder a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

// const title = document.getElementById("title");
// title.textContent = "DOM - Accediendo a nodos";

//Acceder desde documento
// const paragraph = document.querySelector(".paragraph:nth-child(3)");
// console.log(paragraph);


//Acceder desde elemento
// const paragraph = document.querySelector('.paragraph');
// const span = paragraph.querySelector('span');
// console.log(span);

//acceder desde el padre hasta el elemento al que queremos acceder
// const paragraph = document.querySelector('.paragraph');
// const span = document.getElementById('section').querySelector('span');
// console.log(span);

const paragraphs = document.querySelectorAll('.paragraph');
const paragraphsSpread = [...document.querySelectorAll('.paragraph')];
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));

paragraphs[0].style.color = 'red';
// paragraphs.map(p => p.style.color = 'green');
// paragraphsSpread.map(p => p.style.color = 'green');
paragraphsArray.map(p => p.style.color = 'green');

// console.log(paragraphs);