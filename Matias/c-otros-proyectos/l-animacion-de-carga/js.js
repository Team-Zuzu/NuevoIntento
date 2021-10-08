

const loader = document.querySelector('.loader')

window.addEventListener("click", event => {
    agregarClases('carga-terminada');
    setTimeout(() => {
        agregarClases('codo-a-codo');
    }, 2000);
});

function agregarClases(cad){
    for (let i = 0; i < loader.childElementCount; i++) {
        loader.children[i].classList.add(cad)
    }
}


