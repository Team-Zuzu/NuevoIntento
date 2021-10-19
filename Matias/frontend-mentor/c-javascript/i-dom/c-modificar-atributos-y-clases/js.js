/*
ATRIBUTOS
    element.getAttribute('attribute')
        Toma un atributo de cierto elemento
    element.setAttribute('attribut', value)
        Modifica un atributo de cierto elemento

CLASES  
    element.classList.add('class', 'class', ...)
        Sirve para agregar clases
    element.classList.remove('class', 'class', ...)
        Elimina clases
    element.classList.toggle('class'[,force])
        Si tiene la clase, la elimina, si no la tiene, la agrega
    element.classList.contains('class')
        Devuelve true o false en función a si tiene la clase o no
    element.classList.replace('oldClass', new Class)
        Reemplaza una clase por otra

ATRIBUTOS DIRECTOS
    id
    value
*/

const title = document.getElementById('title');
const nombre = document.getElementById('name');

//GET y SET
// console.log(nombre.getAttribute('type'));
// nombre.setAttribute('type', 'date');

//ADD
title.classList.add('main-title', 'other-title');

//REMOVE
title.classList.remove('other-title', 'title');

//CONTAINS
if (title.classList.contains('main-title')) {
    console.log('el h1 tiene la clase main-title');
} else {
    console.log('el h1 no tiene la clase main-title');
}

//REPLACE
title.classList.replace('main-title', 'title');

console.log(title);
console.log(nombre);

console.log(title.innerHTML);
console.log(title.textContent);
console.log(nombre.value.length);