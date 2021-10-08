const loader = document.querySelector('.loader')

window.addEventListener("click", event => {
    agregarClases('carga-terminada');
    setTimeout(() => {
        agregarClases('codo-a-codo');
        loader.classList.add('codo-a-codo')
    }, 1250);
    setTimeout(() => {
        loader.classList.add('fin')
    }, 2500)
});

function agregarClases(cad){
    for (let i = 0; i < loader.childElementCount; i++) {
        loader.children[i].classList.add(cad)
    }
}