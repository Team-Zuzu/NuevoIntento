/*
DOM - CREAR E INSERTAR ELEMENTOS

    document.createElement(element) -> Crea un elemento
    element.textContent = texto -> Escribe texto en un elemento
    element.innerHTML = código HTML -> Escribe HTML en un elemento

    parent.appendChild(element) -> Añade un elemento al DOM

    document.createDocumentFragment() -> Fragmentos de código
*/

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');

// const itemList = document.createElement('li');
// itemList.textContent = 'Lunes';

// daysList.appendChild(itemList);

title.innerHTML = 'DOM - <span>Crear</span> e insertar elementos I';
let span = title.children;
span[0].style.color = 'red';
console.log(span);

//hacerlo de esta forma es un gasto de recursos ENORME porque por cada vuelta del bucle hay que reescribir el DOM
// for (const day of days) {
//     daysList.innerHTML += `<li>${day}</li>`;
// }

const fragment = document.createDocumentFragment();
for (const day of days) {
    const itemList = document.createElement('li');
    itemList.textContent = day;
    fragment.appendChild(itemList);
}
daysList.appendChild(fragment);


const fragment2 = document.createDocumentFragment();
for (const day of days) {
    const selectItem = document.createElement('option');
    selectItem.setAttribute('value', day.toLowerCase());
    selectItem.textContent = day;
    fragment2.appendChild(selectItem);
    console.log(selectItem);
}
daysSelect.appendChild(fragment2);