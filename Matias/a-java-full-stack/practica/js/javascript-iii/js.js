let datos = []
datos.push(
    {
        id: 1,
        nombre: 'Matias',
        apellido: 'Espinola',
        genero: 'Masculino',
        email: 'matias.esp@noexist.com',
        pass: 'contraseña1',
        fotoPerfil: 'https://64.media.tumblr.com/194ca228df19e83a052c3bde86504e96/tumblr_osg29iL8171vjxr9zo1_400.jpg',
        mostrarDatos(){
            console.table(this)
        }
    },
    {
        id: 2,
        nombre: 'Fernando',
        apellido: 'Gaspari',
        genero: 'Masculino',
        email: 'fernanado.gasp@noexist.com',
        pass: 'contraseña2',
        fotoPerfil: 'https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/5a3ba24b5bafe850cbbd00d7/hamilton-de-lado.jpg',
        mostrarDatos(){
            console.table(this)
        }
    },
    {
        id: 3,
        nombre: 'Mayra',
        apellido: 'Espinola',
        genero: 'Femenino',
        email: 'mayra.esp@noexist.com',
        pass: 'contraseña3',
        fotoPerfil: 'https://imagenpng.com/wp-content/uploads/2015/07/gato_by_martismiler-d6giudm.jpg',
        mostrarDatos(){
            console.table(this)
        }
    },
    {
        id: 4,
        nombre: 'Zoe',
        apellido: 'Imperiatriz Universal',
        genero: 'Macho Alfa',
        email: 'zoe.imperiatriz@noexist.com',
        pass: 'contraseña4',
        fotoPerfil: 'https://i.pinimg.com/originals/33/3f/e0/333fe011426a07d8a90969f281a40af0.jpg',
        mostrarDatos(){
            console.table(this)
        }
    },
    {
        id: 5,
        nombre: 'Marcela',
        apellido: 'Cerdá',
        genero: 'Femenino',
        email: 'marcela.cer@noexist.com',
        pass: 'contraseña5',
        fotoPerfil: 'https://yt3.ggpht.com/ytc/AKedOLSn1mLVpN49lg7YW-D7upIY2LDsINM0QLqSbn20=s900-c-k-c0x00ffffff-no-rj',
        mostrarDatos(){
            console.table(this)
        }
    },
    {
        id: 6,
        nombre: 'Erika',
        apellido: 'Hola Profe',
        genero: 'Femenino',
        email: 'erika.hola@noexist.com',
        pass: 'contraseña6',
        fotoPerfil: 'https://static.dw.com/image/16809924_303.jpg',
        mostrarDatos(){
            console.table(this)
        }
    },
    {
        id: 7,
        nombre: 'Matias',
        apellido: 'Anime',
        genero: 'Masculino',
        email: 'matias.anim@noexist.com',
        pass: 'contraseña7',
        fotoPerfil: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2021/08/naruto-naruto-uzumaki-2425679.jpg?itok=cSHefN5K',
        mostrarDatos(){
            console.table(this)
        }
    },
    {
        id: 8,
        nombre: 'Victor',
        apellido: 'Programador',
        genero: 'Masculino',
        email: 'victor.prog@noexist.com',
        pass: 'contraseña8',
        fotoPerfil: 'https://blog.desdelinux.net/wp-content/uploads/2018/12/sysadmin-administrador-sistemas-servidores-contenido-desdelinux-830x332.jpg.webp',
        mostrarDatos(){
            console.table(this)
        }
    },
    {
        id: 9,
        nombre: 'Rafael',
        apellido: 'Rafecas',
        genero: 'Masculino',
        email: 'Rafael.raf@noexist.com',
        pass: 'contraseña9',
        fotoPerfil: 'https://media.istockphoto.com/photos/smiling-senior-man-picture-id472174039?k=20&m=472174039&s=612x612&w=0&h=sjweNfJnlFsR5pXxWT4BBRGlutW_ZlqJeCX8OkHJxdc=',
        mostrarDatos(){
            console.table(this)
        }
    },
    {
        id: 10,
        nombre: 'Estefanía',
        apellido: 'Estefi',
        genero: 'Femenino',
        email: 'estefania.est@noexist.com',
        pass: 'contraseña10',
        fotoPerfil: 'https://www.infobae.com/new-resizer/2ATHC2KspB6Bj8gpj6PWR52VtQ8=/1200x900/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/XIIJCBI4BRH2NOLNJXDRCWCGQY.jpg',
        mostrarDatos(){
            console.table(this)
        }
    }
)

let cad = `
    <tr>
        <td>Nombre</td>
        <td>Apellido</td>
        <td>Email</td>
        <td>Contraseña</td>
        <td>Foto de Perfil</td>
    </tr>`
for (let i = 0; i < datos.length; i++) {
    cad += `<tr onclick="datos[${i}].mostrarDatos()">`
    cad += `<td>${datos[i].nombre}</td>`
    cad += `<td>${datos[i].apellido}</td>`
    cad += `<td>${datos[i].email}</td>`
    cad += `<td>${datos[i].pass}</td>`
    cad += `<td><img src="${datos[i].fotoPerfil}" alt="Foto de perfil"></td>`
    cad += `</tr>`
}

const tabla = document.querySelector('#tabla')
tabla.innerHTML = cad

for (const iterator in datos[5]) {
    console.log(datos[5][iterator])
}