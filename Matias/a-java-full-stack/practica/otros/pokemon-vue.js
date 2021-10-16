const srVue = new Vue({
    el: "#pokemon",
    data: {
        tarjetas: [],
        botones: {
            siguiente: null,
            anterior: null
        }
    },
    created() {
        this.cargaDatos("https://pokeapi.co/api/v2/pokemon")
    },
    methods: {
        cargaDatos(url) {
            fetch(url)
                .then(response => response.json())
                .then(asd => {

                    this.botones.anterior = asd.previous
                    this.botones.siguiente = asd.next

                    for (let i = 0; i < asd.results.length; i++) {

                        fetch(asd.results[i].url)
                            .then(res => res.json())
                            .then(asd2 => {

                                let nuevaTarjeta = {
                                    nombre: asd2.name,
                                    imagen: asd2.sprites.other.dream_world.front_default
                                }

                                this.tarjetas.push(nuevaTarjeta)
                            })
                    }
                })
        },
        botonSiguiente() {
            if (this.botones.siguiente != null) {
                document.querySelector('#zona-de-cartas').innerHTML = ''
                this.cargaDatos(this.botones.siguiente)
            } 
            else {
                console.log('Llegaste al final, sorry')
            }
        },
        botonAnterior() {
            if (this.botones.anterior != null) {
                document.querySelector('#zona-de-cartas').innerHTML = ''
                this.cargaDatos(this.botones.anterior)
            } 
            else {
                console.log('No podés ir más atrás')
            }
        }
    }
})