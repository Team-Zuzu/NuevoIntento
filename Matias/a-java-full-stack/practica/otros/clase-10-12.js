new Vue({
    el: '#nav-vue',
    data: {
        links: [
            { donde: 'Home' },
            { donde: 'Sobre Nosotros' },
            { donde: 'Registrese' }
        ]
    }
})

new Vue({
    el: '#ejemplo',
    data: {
        frutas: [
            { nombre: "naranja", cantidad: 10 },
            { nombre: "banana", cantidad: 0 },
            { nombre: "pera", cantidad: 3 }
        ]
    }
})

new Vue({
    el: '#mensaje',
    data: {
        mensaje: "Hola Mundo con Vue!",
        nombre: "Juan Pablo",
        agregado: 'Codo a Codo'
    }
})


new Vue({
    el: '#imagen',
    data: {
        mensaje: 'Logo de Js',
        imagen: 'https://lenguajejs.com/javascript/logo.svg'
    }
})

new Vue({
    el: '#input-text',
    data: { message: 'Hola Matías!' }
})

new Vue({
    el: '#boton-1',
    data: {
        counter: 0
    }
})