new Vue({
    el: "#app",
    data: {
        producto: {
            cod: 1,
            descripcion: 'Repelente Fuyi',
            precio: 250,
            imagen: 'https://www.vassallo.com.ar/8882-large_default/fuyi-crema-60-gr-repelente.jpg',
            mensaje: 'Repelente Fuyi',
            stock: 20,
        },
        cantidad: 0,
        comprar() {
            let aux = this.cantidad
            this.producto.stock -= aux
        },
        nombre: ' ',
        email: ' ',
        tel: ' ',
        cargarDatos() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => {
                    let num = Math.round(Math.random() * 10)
                    this.nombre = data[num].name
                    this.email = data[num].email
                    this.tel = data[num].phone
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})

