const button = document.getElementById('button')

/*
    window -> Es el objeto global. De él descienden todos los objetos 
        alert()
        prompt()
        confirm()
*/


// (confirm('¿aceptás?')) ? console.log('aceptó'): console.log('no aceptó');


/*
    console -> Es el objeto que contiene la consola del navegador
        https://developer.mozilla.org/es/docs/WEb/API/Console
        console.log()
        console.dir() -> Usar en caso que nos aparezca en consola una línea que no podemos desplegar
        console.error()
        console.table() -> Ideal para visualizar clases y arrays
*/

const person = {
    name: 'Matías',
    age: 30,
    email: 'matias@gmail.com'
}

// console.table(person);

/*
    location -> Es el objeto que contiene la barra de direcciones
        https://developer.mozilla.org/es/docs/Web/API/Location
        location.href -> La dirección del dominio. También puede usarse para redirigir la página.
        location.protocol 
        location.host -> la dirección principal del dominio
        location.pathname -> los directorios donde estamos metidos (eliminando la dirección principal)
        location.hash -> Es una forma de pasar parametros entre páginas. Podemos utilizarlo para tener un solo html y, en función del hash que pasemos, cargar una información u otra.
        location.reload() -> Recarga la página (suele ir dentro de un if)
*/

// console.log(location.href);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.hash);
// location.reload();

// location.href = 'https://google.com.ar/'

/*
    history
        https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
        back() -> Nos regresa en el historial
        forward() -> Nos adelanta en el historial
        go(n|-n) -> Nos regresa o adelanta en el historial dependiendo el número que le pongamos entre parentesis

        lenght -> Para saber cuántas páginas tenemos en el historial (puede servir para poner publicidad, supongo.) 
*/

/*
    date -> PARA LAS FECHAS

        https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
        https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

const date = new Date() //para utilizarlo necesitamos instanciarlo
console.log(date);

/*
    timers
        https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

        setTimeout(() => {code}, delay-in-miliseconds) - Hace que se ejecute la funcion despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia).

    interval:
        https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

        setInterval(() => {code}, delay-in-miliseconds) - Hace que se ejecute la función cada cierto tiempo (como fixedUpdate, mas o menos). Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia).
*/

/*
//Ejemplo de funcion escrita adentro del timeout
button.addEventListener('click', () => {
    setTimeout(() => {
        console.log('hola');
    }, 3000);
})
*/

/*
//ejemplo de funcion escrita afuera del timeout
button.addEventListener('click', () => {
    setTimeout(saludar, 3000);
})

const saludar = () => {
    console.log('hola');
}
*/

/*
//clearTimeout puede parar un contador
const timeout = setTimeout(() => {
    console.log('Adios');
}, 3000)

button.addEventListener('click', () => {
    clearTimeout(timeout)
})
*/

let num = 0
const interval = setInterval(() => {
    console.log(num);
    num++;
}, 1000);
button.addEventListener('click', () => {
    clearInterval(interval)
})