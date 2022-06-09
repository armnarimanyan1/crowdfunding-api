let io;
exports.socketConnection = (server) => {
    const { Server } = require("socket.io");
    io = new Server(server, {
        cors: {
            origin: process.env.REACT_ORIGIN,
        }
    });

    io.on('connection', (socket) => {
        console.info(`Client connected [id=${socket.id}]`);

        socket.on('disconnect', () => {
            console.info(`Client disconnected [id=${socket.id}]`);
        });
    });
};

exports.sendMessage = (message) => { io.emit("status", message) };
