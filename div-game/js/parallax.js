function moverY() {
    for (let j = 0; j < capas.length; j++) {
        for (let i = 0; i < capas[j].length; i++) {
            let posJugador = parseInt(jugador.objeto.style.bottom)
            let movimiento = -posJugador / 10 / (j + 1)
            capas[j][i].style.bottom = movimiento + 'px'
        }
    }
}

let contador = 0
const amanecer = setInterval(() => {

    for (let j = 0; j < capas.length; j++) {
        for (let i = 0; i < capas[j].length; i++) {
            let movimiento = (-800 + contador) / 10 * (j + 1)
            capas[j][i].style.bottom = movimiento + 'px'
        }
    }
    contador += 5
    if (contador > 800) clearInterval(amanecer)

}, 1000 / 60);