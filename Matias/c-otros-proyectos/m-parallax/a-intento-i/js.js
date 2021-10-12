let capas = document.querySelector('#parallax').children
let fuerza = 0.1

document.addEventListener('scroll', () =>{

    for (let i = 1; i < capas.length; i++) {
        capas[i].style.bottom = - window.scrollY * fuerza + 'px'
        
    }

})