let main = document.querySelector('main')

const secciones = {
    juego: `        
    <div id="pantalla">
        <div id="fondo"></div>
        <div id="zona-de-juego">
            <div id="corazones">
                <img src="./assets/svg/corazon1.svg" alt="Corazón de vida">
                <img src="./assets/svg/corazon1.svg" alt="Corazón de vida">
                <img src="./assets/svg/corazon1.svg" alt="Corazón de vida">
            </div>
            <div id="score">
                Score: <span>0</span>
            </div>
            <div id="jugador"></div>
        </div>
    </div>
    `,
}

function jugar() {
    document.querySelector('#loby').remove()
    main.innerHTML = secciones.juego
    aJugar()
}