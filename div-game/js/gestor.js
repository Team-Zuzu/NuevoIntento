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
    score: `
    <div id="table">
    <button onclick="menuPrincipal()">&#60 --</button>
    `,
    menu: `
    <div id="loby">
        <nav>
            <button onclick="jugar()">Jugar</button>
            <button onclick="tablaDePuntos()">Tabla de puntos</button>
            <button>Creditos</button>
        </nav>
    </div>

    `
}

function menuPrincipal(){
    main.innerHTML = secciones.menu
}

function jugar() {
    main.innerHTML = secciones.juego
    aJugar()
}

class NuevoIngreso {
    constructor(puntos, dia, mes, year) {
        this.puntos = puntos;
        this.dia = dia;
        this.mes = mes;
        this.year = year
    }
}

function tablaDePuntos() {
    let nuevoScore = sessionStorage.getItem('newScore')
    let totalScore = localStorage.getItem('totalScore')
    let newCad = ''

    if (!nuevoScore) {
        if (!totalScore) {
            newCad = secciones.score + `<p>No hay ningún<br>score registrado :C</p></div>`
        }
        else {     
            newCad += `
            <p>Tabla de puntos:</p>
            `       
            let aux = JSON.parse(localStorage.getItem('totalScore'))

            if (aux[1] == undefined) {
                newCad += `
                <table>
                    <tr>
                        <td>Puntos</td>
                        <td>Fecha</td>
                    </tr>                
                    <tr>
                        <td>${aux.puntos}</td>
                        <td>${aux.dia} - ${aux.mes} - ${aux.year}</td>
                    </tr>
                </table></div>
                `
            }
            else{
                newCad += `
                <table>
                    <tr>
                        <td>Puntos</td>
                        <td>Fecha</td>
                    </tr>
                `
                for (let i = 0; i < aux.length; i++) {
                    newCad += `
                    <tr>
                        <td>${aux[i].puntos}</td>
                        <td>${aux[i].dia} - ${aux[i].mes} - ${aux[i].year}</td>
                    </tr>
                    `
                }
                newCad += `</table></div>`
            }
        }
    }
    else {
        newCad += `
        <p>Tabla de puntos:</p>
        `
        let date = new Date()
        let nuevoIngreso = new NuevoIngreso(parseInt(nuevoScore), date.getDate(), date.getMonth(), date.getFullYear())

        if (!totalScore) {
            localStorage.setItem('totalScore', JSON.stringify(nuevoIngreso))
            newCad += `
            <table>
                <tr>
                    <td>Puntos</td>
                    <td>Fecha</td>
                </tr>
            `
            newCad += `
            <tr>
                <td>${nuevoIngreso.puntos}</td>
                <td>${nuevoIngreso.dia} - ${nuevoIngreso.mes} - ${nuevoIngreso.year}</td>
            </tr>
            `
            newCad += `</table></div>`
        }
        else {
            let aray = []
            let pruebaa = JSON.parse(localStorage.getItem('totalScore'))
            if (pruebaa[1] == undefined) {
                aray.push(pruebaa)
            }
            else{
                aray.push(...pruebaa)
            }
            aray.push(nuevoIngreso)
            localStorage.setItem('totalScore', JSON.stringify(aray))
            newCad += `
            <table>
                <tr>
                    <td>Puntos</td>
                    <td>Fecha</td>
                </tr>
            `
            for (let i = 0; i < aray.length; i++) {
                newCad += `
                <tr>
                    <td>${aray[i].puntos}</td>
                    <td>${aray[i].dia} - ${aray[i].mes} - ${aray[i].year}</td>
                </tr>
                `
            }
            newCad += `</table></div>`
        }

        sessionStorage.removeItem('newScore')
    }

    main.innerHTML = secciones.score + newCad
}