function aJugar() {
    const jugador = {
        objeto: document.querySelector('#jugador'),
        alto: 50,
        ancho: 50,
        sobreSuelo: false,
        vidas: 3,
        puntos: 0
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
        tiempoSalto: 0,
    }
    const giro = {
        grados: 0,
        velocidad: 6
    }
    const movimiento = {
        derecha: false,
        izquierda: false,
        velocidad: 3
    }
    const juego = {
        dificultad: 50,
        inicio: false,
        velocidadSpam: 1000
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
        jugador.objeto.style.left = 200 + 'px'
        jugador.objeto.style.transform = `rotate(${0}deg)`
        zonaDeJuego.objeto.style.width = zonaDeJuego.ancho + 'px'
        zonaDeJuego.objeto.style.height = zonaDeJuego.alto + 'px'
        zonaDeJuego.objeto.style.bottom = 0 + 'px'
        zonaDeJuego.objeto.style.left = 0 + 'px'
    }
    iniciarJuego()

    const intervaloMaestro = setInterval(() => {
        update()
    }, 1000 / 60);

    document.addEventListener('keydown', botonDown => {
        if (botonDown.key == ' ') salto.saltoIniciado = true
        if (botonDown.key == 'd') movimiento.derecha = true
        if (botonDown.key == 'a') movimiento.izquierda = true
    })
    document.addEventListener('keyup', botonUp => {
        if (botonUp.key == 'd') movimiento.derecha = false
        if (botonUp.key == 'a') movimiento.izquierda = false
    })
    function update() {
        if (salto.saltoIniciado) {
            rotacion()
            fSalto()
        }
        fMovimiento()
        colision()
        marchaEnemiga()
        if (juego.inicio)
            sumarPuntos()
    }

    idPuntos = document.querySelector('#score').children
    function sumarPuntos() {
        jugador.puntos++
        idPuntos[0].innerText = Math.round(jugador.puntos / 15)
        if (jugador.puntos > 0 && jugador.puntos % 500 == 0) {
            aumentarDificultad()
        }
    }

    function aumentarDificultad() {
        juego.dificultad += 10
        console.log('Dificultad: ' + juego.dificultad)
        enemigos.velocidad = juego.dificultad / 10
        console.log('Velocidad: ' + enemigos.velocidad)
        if (juego.velocidadSpam > 500) juego.velocidadSpam -= 10
        console.log(juego.velocidadSpam)
    }

    function rotacion() {
        giro.grados += giro.velocidad
        if (giro.grados > 360) {
            giro.grados = 0
        }
        jugador.objeto.style.transform = `rotate(${giro.grados}deg)`
    }
    function finRotacion() {
        if (giro.grados < 45) giro.grados = 0
        else if (giro.grados < 135) giro.grados = 90
        else if (giro.grados < 225) giro.grados = 180
        else if (giro.grados < 315) giro.grados = 270
        else giro.grados = 0
        jugador.objeto.style.transform = `rotate(${giro.grados}deg)`
    }
    function fSalto() {
        if (parseInt(jugador.objeto.style.bottom) >= 0) {
            jugador.objeto.style.bottom = - Math.pow(salto.tiempoSalto, 2) + salto.fuerza * salto.tiempoSalto + 'px'
            salto.tiempoSalto += salto.gravedad
        }
        else {
            jugador.objeto.style.bottom = 0 + 'px'
            salto.tiempoSalto = 0
            salto.saltoIniciado = false
            finRotacion()
        }
    }
    function fMovimiento() {
        if (movimiento.derecha && parseInt(jugador.objeto.style.left) < zonaDeJuego.ancho - jugador.ancho)
            jugador.objeto.style.left = parseInt(jugador.objeto.style.left) + movimiento.velocidad + 'px'
        if (movimiento.izquierda && parseInt(jugador.objeto.style.left) > 0)
            jugador.objeto.style.left = parseInt(jugador.objeto.style.left) - movimiento.velocidad + 'px'
    }

    const posX = elemento => parseInt(elemento.style.left)
    const posY = elemento => parseInt(elemento.style.bottom)
    function colision() {
        for (let i = 0; i < enemigos.objeto.length; i++) {
            if (posX(jugador.objeto) > posX(enemigos.objeto[i]) - jugador.ancho &&
                posX(jugador.objeto) - jugador.ancho < posX(enemigos.objeto[i]) &&
                posY(jugador.objeto) > posY(enemigos.objeto[i]) - jugador.alto &&
                posY(jugador.objeto) - jugador.alto < posY(enemigos.objeto[i]))

                if (!herido.estaHerido) fueHerido()
        }
    }

    function sacudida() {
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

    function corazonRoto() {
        jugador.vidas--
        let arrayCorazones = document.querySelector('#corazones')
        if (jugador.vidas > 0) {
            arrayCorazones.children[jugador.vidas].src = './assets/svg/corazon2.svg'
            arrayCorazones.children[jugador.vidas].alt = 'Un corazón roto'
        }
        else if (jugador.vidas == 0) {
            arrayCorazones.children[jugador.vidas].src = './assets/svg/corazon2.svg'
            arrayCorazones.children[jugador.vidas].alt = 'Un corazón roto'
            juego.inicio = false
            clearInterval(intervaloMaestro)
            muerto()
        }
        else {
            console.error('Hay un error raro en la función corazonRoto del archivo juego.js ¿Andás intentando hackear el juego? xDD')
        }
    }

    function muerto(){
        sessionStorage.setItem("newScore", Math.round(jugador.puntos / 15))
        setTimeout(() => {
            tablaDePuntos()
        }, 3000);
    }

    function fueHerido() {
        sacudida()
        corazonRoto()
        pantalla.objeto.classList.add('herido')
        herido.estaHerido = true
        const parpadeo = setInterval(() => {
            setTimeout(() => {
                jugador.objeto.style.backgroundColor = '#ffffff20'
            }, 200);
            setTimeout(() => {
                jugador.objeto.style.backgroundColor = '#fff'
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
        if (random < juego.dificultad) {
            let nuevoEnemigo = document.createElement('div')
            nuevoEnemigo.classList.add('enemigo')
            let numRandom = Math.random() * 100
            if (numRandom < 100 / 4 * 1) {
                nuevoEnemigo.classList.add('volador')
                nuevoEnemigo.style.bottom = enemigos.alto * 2 + 'px'
                // nuevoEnemigo.style.background = 'green'
            }
            else if (numRandom < 100 / 4 * 2) {
                
                nuevoEnemigo.classList.add('volador2')
                nuevoEnemigo.style.bottom = enemigos.alto * 2 + 'px'
                // nuevoEnemigo.style.background = 'yellow'
            }
            else {
                nuevoEnemigo.style.bottom = 0 + 'px'
            }

            nuevoEnemigo.style.left = zonaDeJuego.ancho + 'px'

            nuevoEnemigo.style.width = enemigos.ancho + 'px'
            nuevoEnemigo.style.height = enemigos.alto + 'px'
            zonaDeJuego.objeto.insertAdjacentElement('beforeend', nuevoEnemigo)
            enemigos.objeto.push(nuevoEnemigo)
        }
    }, juego.velocidadSpam);

    function marchaEnemiga() {
        if (juego.inicio) {
            for (let i = 0; i < enemigos.objeto.length; i++) {


                if (enemigos.objeto[i].classList.contains('volador')) {
                    enemigos.objeto[i].style.left = parseInt(enemigos.objeto[i].style.left) - enemigos.velocidad / 1.5 + 'px'
                    enemigos.objeto[i].style.bottom = 75 + Math.sin(parseInt(enemigos.objeto[i].style.left) / 100) * 25 + 'px'
                }
                else if (enemigos.objeto[i].classList.contains('volador2')) {
                    enemigos.objeto[i].style.left = parseInt(enemigos.objeto[i].style.left) - enemigos.velocidad / 1.5 + 'px'
                    enemigos.objeto[i].style.bottom = 100 + Math.cos(parseInt(enemigos.objeto[i].style.left) / 100) * 50 + 'px'
                }
                else {
                    enemigos.objeto[i].style.left = parseInt(enemigos.objeto[i].style.left) - enemigos.velocidad + 'px'
                }
                if (parseInt(enemigos.objeto[i].style.left) + enemigos.ancho < 0) {
                    enemigos.objeto.shift()
                    zonaDeJuego.objeto.removeChild(zonaDeJuego.objeto.children[3])
                }
            }
        }
    }

    /*
    ZONA DEL ESCENARIOOOOOOOO!
        ZONA DEL ESCENARIOOOOOOOO!
            ZONA DEL ESCENARIOOOOOOOO!
                ZONA DEL ESCENARIOOOOOOOO!
                    ZONA DEL ESCENARIOOOOOOOO!
                        ZONA DEL ESCENARIOOOOOOOO!
                            ZONA DEL ESCENARIOOOOOOOO!
                                ZONA DEL ESCENARIOOOOOOOO!
                                    ZONA DEL ESCENARIOOOOOOOO!
                                        ZONA DEL ESCENARIOOOOOOOO!
                                            ZONA DEL ESCENARIOOOOOOOO!
                                                ZONA DEL ESCENARIOOOOOOOO!
                                                    ZONA DEL ESCENARIOOOOOOOO!
                                                        ZONA DEL ESCENARIOOOOOOOO!
                                                            ZONA DEL ESCENARIOOOOOOOO!
                                                                ZONA DEL ESCENARIOOOOOOOO!
    
    
    */

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
        if (juego.inicio) {
            for (let i = 0; i < array.length; i++) {
                let posicion = parseInt(array[i].style.left) - movimiento
                if (posicion < -zonaDeJuego.ancho) {
                    let maximo = Math.max(parseInt(array[0].style.left), parseInt(array[1].style.left))
                    posicion = maximo + zonaDeJuego.ancho - 2
                }
                array[i].style.left = posicion + 'px'
            }
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

    let contador = 0
    const amanecer = setInterval(() => {

        for (let j = 0; j < capas.length; j++) {
            for (let i = 0; i < capas[j].length; i++) {
                let movimiento = (-800 + contador) / 10 * (j + 1)
                capas[j][i].style.bottom = movimiento + 'px'
            }
        }
        contador += 5
        if (contador > 800) {
            juego.inicio = true
            clearInterval(amanecer)
        }

    }, 1000 / 60);
}