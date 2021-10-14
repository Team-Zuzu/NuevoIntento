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
    nuevaCapa.style.left = zonaDeJuego.ancho * i + 'px'
    nuevaCapa.style.zIndex = -10 * (j + 1)
    nuevaCapa.src = `./assets/svg/capa${j + 1}.svg`
    nuevaCapa.alt = 'Una imágen de fondo'
    fondo.insertAdjacentElement('beforeend', nuevaCapa)
    return nuevaCapa
}

for (let j = 0; j < 6; j++) {
    let aux = []
    for (let i = 0; i < 3; i++) {
        aux.push(crearImagen(i, j))
    }
    capas.push(aux)
}


console.log(capas)
