/*
EVENTOS DE RATÓN:
    click -> cuando pulsamos el botón izquierdo del ratón
    dbclick -> Cuando pulsamos dos veces seguidas el botón izquierdo del ratón

    mouseenter -> Cuando entramos a la zona que tiene el evento
    mouseleave -> cuando salimos de la zona que tiene el evento 

    mousedown -> Cuando pulsamos el botón izquierdo del ratón 
    mouseup -> Cuando soltamos el botón izquierdo del ratón 

    mousemove -> Cuando movemos el ratón 

EVENTOS DE TECLADO:
    keydown -> Cuando pulsamos una tecla
    keyup -> Cuando soltamos una tecla
    Keypress -> Cuando pulsamos una tecla y no la soltamos 
*/


const button = document.getElementById('button');
const box = document.getElementById('box');
const input = document.getElementById('input');

button.addEventListener('click', () => {
    console.log('CLICK');
})

button.addEventListener('dblclick', () => {
    console.log('doble click');
})

box.addEventListener('mouseenter', () => {
    box.classList.replace('leave', 'enter');
});

box.addEventListener('mouseleave', () => {
    box.classList.replace('enter', 'leave');
});

box.addEventListener('mousedown', () => {
    console.log('Clickeaste en la caja');
})

box.addEventListener('mouseup', () => {
    console.log('Soltaste el click');
})

box.addEventListener('mousemove', () => {
    console.log('Estás moviendo el mouse');
})

input.addEventListener('keydown', () => {
    console.log('Apretaste una tecla!');
})

input.addEventListener('keyup', () => {
    console.log('Soltaste una tecla');
})

input.addEventListener('keypress', () => {
    console.log('Estás manteniendo una tecla');
})