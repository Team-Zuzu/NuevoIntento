let pos = 0;
const trucoPorLetra = 'soyfer'.split('')

document.addEventListener("keydown",  letra => {
    if (letra.key === trucoPorLetra[pos]) {
        console.log(letra.key)
        pos++
    }
    else {
        console.log('Posición reiniciada.')
        pos = 0
    }
})

const update = setInterval(() => {
    if (pos == trucoPorLetra.length) {
        clearInterval(update)
        let escondido = document.querySelectorAll('.escondido')
        for (let i = 0; i < escondido.length; i++) {
            escondido[i].classList.remove('escondido')
        }
        console.log('Hola Fer')
    }
}, 200);