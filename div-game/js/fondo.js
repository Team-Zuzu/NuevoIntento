const fondo = document.querySelector('#fondo')
fondo.style.height = zonaDeJuego.alto + 'px'
fondo.style.width = zonaDeJuego.ancho + 'px'
fondo.style.overflow = 'hidden'

let capas = []

function crearImagen(i, j) {
    let nuevaCapa = document.createElement('img')
    nuevaCapa.style.display = 'block'
    nuevaCapa.style.position = 'absolute'
    nuevaCapa.style.height = zonaDeJuego.alto + 'px'
    nuevaCapa.style.width = zonaDeJuego.ancho + 'px'
    nuevaCapa.style.bottom = 0 + 'px'
    nuevaCapa.style.left = zonaDeJuego.ancho * i - i * 1 + 'px'
    nuevaCapa.style.zIndex = -10 * (j + 1)
    nuevaCapa.src = `./assets/svg/capa${j + 1}.svg`
    nuevaCapa.alt = 'Una imágen de fondo'
    fondo.insertAdjacentElement('beforeend', nuevaCapa)
    return nuevaCapa
}

function mover(array, movimiento) {
    for (let i = 0; i < array.length; i++) {
        let posicion = parseInt(array[i].style.left) - movimiento
        if (posicion < -zonaDeJuego.ancho) {
            let maximo = Math.max(parseInt(array[0].style.left), parseInt(array[1].style.left))
            posicion = maximo + zonaDeJuego.ancho - 2
        }
        array[i].style.left = posicion + 'px'
    }
}

function crearCapas() {
    for (let j = 0; j < 6; j++) {
        let aux = []
        for (let i = 0; i < 2; i++) {
            aux.push(crearImagen(i, j))
        }
        capas.push(aux)
    }
}
crearCapas()

setInterval(() => {
    mover(capas[0], 1)
}, 1000 / 60);
setInterval(() => {
    mover(capas[1], 1)
}, 1000 / 50);
setInterval(() => {
    mover(capas[2], 1)
}, 1000 / 40);
setInterval(() => {
    mover(capas[3], 1)
}, 1000 / 30);
setInterval(() => {
    mover(capas[4], 1)
}, 1000 / 20);
setInterval(() => {
    mover(capas[5], 1)
}, 1000 / 10);