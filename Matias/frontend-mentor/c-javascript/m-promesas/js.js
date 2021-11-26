//Una promesa es un objeto con 2 callbacks internos

const users = [{ id: 1, name: 'Matias' }, { id: 2, name: 'Marcela' }, { id: 3, name: 'Erika' }]
const emails = [{ id: 1, email: 'matias@gmail.com' }, { id: 2, email: 'marcela@gmail.com' }]

function getUser(id) {
    const user = users.find(user => user.id == id)

    promise = new Promise((resolve, reject) => {
        if (!user)
            reject(`No existe un usuario con id ${id}`)
        else
            resolve(user)
    })

    return promise
}

function getEmail(user) {
    const email = emails.find(email => email.id == user.id)

    promise = new Promise((resolve, reject) => {
        if (!email)
            reject(`${user.name} no tiene email`)
        else
            resolve({
                id: user.id,
                name: user.name,
                email: email.email
            })
    })

    return promise
}

for (let i = 0; i < users.length; i++) {
    getUser(i + 1)
        .then(user => getEmail(user))
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

