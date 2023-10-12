import { Server } from "socket.io";

let messages = [];

export const init = (httpServer) => {
    const socketServer = new Server(httpServer);

    socketServer.on("connection", (socketClient) => {

        console.log("New user connected...")

        // Mando el log con los mensajes
        socketClient.on("new__message", (data) => {
            const {username, message} = data;
            messages.push({username, message})
            socketServer.emit("notification", messages)
        })
    })
}