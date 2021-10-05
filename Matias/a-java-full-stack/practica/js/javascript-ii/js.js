const navBar = `
    <nav>
        <a href="#">Home</a>
        <a href="#">Recetas</a>
        <a href="#">Sobre Nosotros</a>
        <a href="#">Registrese</a>
    </nav>`

let table = `            
    <table>
        <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Descipcion</th>
            <th>Imagen</thd>
        </tr>
    `

for (let i = 0; i < data.length; i++) {
    table += `        
            <tr>
             <td>${data[i].codigo}</td>
             <td>${data[i].nombre}</td>
             <td>${data[i].descripcion}</td>
             <td><img src=${data[i].imagen} alt=${data[i].nombre}></td>
            </tr>`
}
table += '</table>'

const header = document.getElementById('header')
header.innerHTML = navBar

const footer = document.getElementById('footer')
footer.innerHTML = navBar

const tabla = document.getElementById('tabla')
tabla.innerHTML = table

