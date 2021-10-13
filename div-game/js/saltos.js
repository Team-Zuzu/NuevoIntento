const jugador = {
    objeto: document.querySelector('#jugador'),
    alto: 50,
    ancho: 50,
}
const herido = {
    estaHerido: false,
    cont: 0
}
const zonaDeJuego = {
    objeto: document.querySelector('#zona-de-juego'),
    ancho: 853,
    alto: 480
}
const salto = {
    saltoIniciado: false,
    fuerza: 20,
    gravedad: 0.5,
    tiempoSalto: 0
}
const movimiento = {
    direccion: 'c',
    velocidad: 3
}
const juego = {
    dificultad: 50
}
let enemigos = {
    objeto: [],
    ancho: 50,
    alto: 50,
    velocidad: 5
}
const terremoto = {
    fuerza: 10,
    caida: 0.5,
}
const pantalla = {
    objeto: document.querySelector('#pantalla')
}

function iniciarJuego() {
    jugador.objeto.style.bottom = 0 + 'px'
    jugador.objeto.style.left = 0 + 'px'
    zonaDeJuego.objeto.style.width = zonaDeJuego.ancho + 'px'
    zonaDeJuego.objeto.style.height = zonaDeJuego.alto + 'px'
    zonaDeJuego.objeto.style.bottom = 0 + 'px'
    zonaDeJuego.objeto.style.left = 0 + 'px'
}
iniciarJuego()

setInterval(() => {
    update()
}, 1000 / 60);

function update() {
    if (salto.saltoIniciado)
        fSalto()
    fMovimiento()
    colision()
    marchaEnemiga()
}

document.addEventListener('keydown', boton => {
    if (boton.key == ' ') {
        salto.saltoIniciado = true
    }
})
document.addEventListener('mousemove', mouse => {
    let zonas = window.visualViewport.width / 3
    if (mouse.pageX < zonas) {
        movimiento.direccion = 'i'
    }
    else if (mouse.pageX < zonas * 2) {
        movimiento.direccion = 'c'
    }
    else {
        movimiento.direccion = 'd'
    }
})

function fMovimiento() {
    switch (movimiento.direccion) {
        case 'i':
            if (parseInt(jugador.objeto.style.left) > 0)
                jugador.objeto.style.left = parseInt(jugador.objeto.style.left) - movimiento.velocidad + 'px'
            break
        case 'd':
            if (parseInt(jugador.objeto.style.left) < zonaDeJuego.ancho - jugador.ancho)
                jugador.objeto.style.left = parseInt(jugador.objeto.style.left) + movimiento.velocidad + 'px'
            break
        default:
            break
    }
}

function fSalto() {
    if (parseInt(jugador.objeto.style.bottom) >= 0) {
        jugador.objeto.style.bottom = - Math.pow(salto.tiempoSalto, 2) + salto.tiempoSalto * salto.fuerza + 'px'
        salto.tiempoSalto += salto.gravedad
    }
    else {
        jugador.objeto.style.bottom = 0 + 'px'
        salto.tiempoSalto = 0
        salto.saltoIniciado = false
    }
}

const posX = elemento => parseInt(elemento.style.left)
const posY = elemento => parseInt(elemento.style.bottom)

function colision() {
    for (let i = 0; i < enemigos.objeto.length; i++) {
        if (posX(jugador.objeto) > posX(enemigos.objeto[i]) - jugador.ancho &&
            posX(jugador.objeto) - jugador.ancho < posX(enemigos.objeto[i])) {
            if (posY(jugador.objeto) > posY(enemigos.objeto[i]) - jugador.alto &&
                posY(jugador.objeto) - jugador.alto < posY(enemigos.objeto[i])) {
                if (!herido.estaHerido) fueHerido()
            }
        }
    }
}

function sacudida(){
    let fuerzaActual = terremoto.fuerza
    const animTerremoto = setInterval(() => {
        zonaDeJuego.objeto.style.bottom = Math.random() * fuerzaActual + 'px'
        zonaDeJuego.objeto.style.left = Math.random() * fuerzaActual + 'px'
        fuerzaActual -= terremoto.caida
    }, 50);
    setTimeout(() => {
        clearInterval(animTerremoto)  
    }, 1000);
}

function fueHerido() {
    sacudida()
    pantalla.objeto.classList.add('herido')
    herido.estaHerido = true
    const parpadeo = setInterval(() => {
        setTimeout(() => {
            jugador.objeto.style.backgroundColor = 'transparent'
        }, 200);
        setTimeout(() => {
            jugador.objeto.style.backgroundColor = 'red'
            herido.cont++
        }, 400);
        if (herido.cont >= 5) {
            clearInterval(parpadeo)
            herido.cont = 0
            herido.estaHerido = false
            pantalla.objeto.classList.remove('herido')
        }
    }, 400);
}

setInterval(() => {
    let random = Math.round(Math.random() * 100)
    if (random > juego.dificultad) {
        let nuevoEnemigo = document.createElement('div')
        nuevoEnemigo.classList.add('enemigo')
        nuevoEnemigo.style.left = zonaDeJuego.ancho + 'px'
        nuevoEnemigo.style.bottom = 0 + 'px'
        nuevoEnemigo.style.width = enemigos.ancho + 'px'
        nuevoEnemigo.style.height = enemigos.alto + 'px'
        zonaDeJuego.objeto.insertAdjacentElement('beforeend', nuevoEnemigo)
        enemigos.objeto.push(nuevoEnemigo)
    }
}, 1000);

function marchaEnemiga() {
    for (let i = 0; i < enemigos.objeto.length; i++) {
        enemigos.objeto[i].style.left = parseInt(enemigos.objeto[i].style.left) - enemigos.velocidad + 'px'
        if (parseInt(enemigos.objeto[i].style.left) + enemigos.ancho < 0) {
            enemigos.objeto.shift()
            zonaDeJuego.objeto.removeChild(zonaDeJuego.objeto.children[1])
        }
    }
}