const socket = io()

const name = prompt("Ismingizni kiriting")

socket.emit('new-user', name)

const h4 = document.getElementById('h4')
h4.innerHTML += 'You joined'

socket.on('joined-user', data => {
    const h4 = document.createElement('h4')
    h4.innerHTML += `${data} joined`
    container.appendChild(h4)
})

form.addEventListener('submit', e => {
    e.preventDefault()

    const h4 = document.createElement('h4')
    h4.innerHTML += `You: ${input.value}`
    container.appendChild(h4)

    socket.emit('new-message', {
        name,
        message: input.value
    })
})

socket.on('message', ({ name, message }) => {
    const h4 = document.createElement('h4')
    h4.innerHTML += `${name}: ${message}`
    container.appendChild(h4)
})