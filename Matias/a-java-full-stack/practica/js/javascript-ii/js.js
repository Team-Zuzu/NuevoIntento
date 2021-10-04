const nav = `
    <nav>
        <a href="#">Home</a>
        <a href="#">Recetas</a>
        <a href="#">Sobre Nosotros</a>
        <a href="#">Registrese</a>
    </nav>`

let tabla = `            
    <table>
        <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Descipcion</th>
            <th>Imagen</thd>
        </tr>
    `
for (let i = 0; i < data.length; i++) {
    tabla += `        
            <tr>
             <td>${data[i].codigo}</td>
             <td>${data[i].nombre}</td>
             <td>${data[i].descripcion}</td>
             <td><img src=${data[i].imagen} alt=${data[i].nombre}></td>
            </tr>`
}
tabla += '</table>'

document.getElementById('header').innerHTML = nav
document.getElementById('footer').innerHTML = nav
document.getElementById('tabla').innerHTML = tabla