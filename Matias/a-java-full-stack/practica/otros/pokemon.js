botones = {
    siguiente: null,
    anterior: null
}

function botonSiguiente() {
    botones.siguiente != null ? cargaDatos(botones.siguiente) : console.log('Llegaste al final, sorry')
}

function botonAnterior() {
    botones.anterior != null ? cargaDatos(botones.anterior) : console.log('No podés ir más atrás')
}

window.addEventListener('load', load => {
    cargaDatos("https://pokeapi.co/api/v2/pokemon")
})

function cargaDatos(url) {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => {
            const cuerpo = document.querySelector('#cuerpo')
            let nuevoCuerpo = document.createElement('section')
            nuevoCuerpo.id = 'cuerpo'
            const fragmento = document.createDocumentFragment()
            for (let i = 0; i < data.results.length; i++) {
                let nuevaTarjeta = document.createElement('div')
                nuevaTarjeta.classList.add('tarjeta')
                let nuevaImagen = document.createElement('img')
                fetch(data.results[i].url)
                    .then(respuesta => respuesta.json())
                    .then(data2 => {
                        nuevaImagen.src = data2.sprites.other.dream_world.front_default
                    })
                nuevaImagen.alt = data.results[i].name
                nuevaTarjeta.insertAdjacentElement('afterbegin', nuevaImagen)
                let nuevoParrafo = document.createElement('p')
                nuevoParrafo.textContent = data.results[i].name
                nuevaTarjeta.insertAdjacentElement('beforeend', nuevoParrafo)
                fragmento.append(nuevaTarjeta)
            }
            nuevoCuerpo.append(fragmento)
            cuerpo.replaceWith(nuevoCuerpo)
            botones.siguiente = data.next
            botones.anterior = data.previous
        })
}