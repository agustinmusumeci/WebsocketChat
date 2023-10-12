(function() {
    const socket = io();
    
    console.log("Hola, soy el front!!")

    const form__message = document.getElementById("form__message");
    const input__username = document.getElementById("input__username");
    const input__message = document.getElementById("input__message");
    const log__message = document.getElementById("log__message")
    


    // Tomo y mando al Backend un mensaje
    form__message.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const username = input__username.value;
        const message = input__message.value;

        socket.emit("new__message", {username, message});
        
        input__message.value = "";
    });

    // Actualizo el log de mensajes
    const update__log = (messages) => {
        log__message.innerText = ""
        messages.forEach(message => {
            const user__message = document.createElement("p")
            user__message.innerText = `${message.username} : ${message.message}`
            log__message.appendChild(user__message)
        });
    }

    // Recibo el log de mensajes del Backend
    socket.on("notification", (messages) => {
        update__log(messages)
    })

}) ();