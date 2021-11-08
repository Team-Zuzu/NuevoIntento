new Vue({
    el: "#app",
    data: {
        tarjeta: [],
        anterior: null,
        siguiente: null
    },


    created() {
        this.cargarDatos('https://pokeapi.co/api/v2/pokemon')
    },

    methods: {
        botonAnterior() {
            if (this.anterior != null) {
                this.cargarDatos(this.anterior)
                document.getElementById('cualquiera').innerHTML = '';
            }

        },
        botonSiguiente() {
            if (this.siguiente != null) {
                this.cargarDatos(this.siguiente)
                document.getElementById('cualquiera').innerHTML = '';
            }

        },
        cargarDatos(url) {

            fetch(url)
                .then(response => response.json())
                .then(dataInicio => {
                    this.siguiente = dataInicio.next
                    this.anterior = dataInicio.previous

                    for (let i = 0; i < dataInicio.results.length; i++) {

                        fetch(dataInicio.results[i].url) //busca el nombre y la imagen del pokemon que le indiquemos (entre al link)
                            .then(response => response.json())
                            .then(dataNameImagen => {

                                let nuevaTarjeta = {
                                    nombre: dataNameImagen.name,
                                    imagen: dataNameImagen.sprites.other.dream_world.front_default
                                }
                                this.tarjeta.push(nuevaTarjeta)
                            })
                    }
                })
            console.log(this.tarjeta);
        },

    }

})
