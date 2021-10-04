const users = [{ id: 1, name: 'Matias' }, { id: 2, name: 'Marcela' }, { id: 3, name: 'Erika' }]
const emails = [{ id: 1, email: 'matias@gmail.com' }, { id: 2, email: 'marcela@gmail.com' }]

// Los callbacks son funciones que se ejecutan a través de otra función. No son asíncronos

function gerUser(id, callback) {
    const user = users.find(user => user.id == id)
    if (!user) {
        callback(`No existe un usuario con id ${id}`)
    }
    else {
        callback(null, user)
    }
}

function getEmail(user, callback) {
    const email = emails.find(email => email.id == user.id)
    if (!email) {
        callback(`${user.name} no tieme email`)
    }
    else {
        callback(null, {
            id: user.id,
            name: user.name,
            email: email.email
        })
    }
}

function printUser(err, user) {
    if (err) {
        console.log(err)
    }
    else{
        getEmail(user, printEmail)
    }
}

function printEmail(err, res) {
    if (err) {
        console.log(err)
    }
    else{
        console.log(res);
    }
}

gerUser(1, printUser)