const express = require("express")
const bodyParser = require("body-parser")

const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {cors: {origin: "*"}});

const port = process.env.PORT || 3001;

const cors = require("cors");

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

// socket
const socket = io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const sendMessage = (msg) => {
    socket.emit('status', msg);
};

app.post("/api/invoice-status", (req, res) => {
    sendMessage(req.body);
    res.send('Message sent');
});

server.listen(port, () => console.log(`Listening on port ${port}`));