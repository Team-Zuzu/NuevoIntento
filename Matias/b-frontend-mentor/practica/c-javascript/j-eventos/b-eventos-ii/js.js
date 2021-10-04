const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');
const gallery = document.getElementById('gallery');
const link = document.getElementById('link');

//dice donde se clickeó
addEventListener('click', (e) => {
    console.log(e);
})

//dice que teclas se pulsaron
input.addEventListener('keyup', (e) => {
    console.log(e.key);
})

// button.addEventListener('click', (e) => {
//     console.log(e.target);
// })


//Para ahorrar recursos es muy recomendable darle evento de escucha a al padre de un conjunto de objetos y acceder a sus hijos
gallery.addEventListener('click', (e) => {
    e.target.classList.add('red');
})

//Si no queremos que algo tenga su comportamiento por defecto (como el envio de un formulario o un link), podemos usar element.preventDefault();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('El formulario se ha enviado');
})

link.addEventListener('click', (e) => {
    e.preventDefault();
})

//También podemos forzar eventos! 
button.addEventListener('click', () => {
    input.value = 'Hiciste click!';
    console.log('Hiciste click!');
})

button.click();