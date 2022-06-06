const express = require("express")
const bodyParser = require("body-parser")

const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {cors: {origin: "*"}});

const port = process.env.PORT || 3001;

const Trend = require('./database/trendModel')

/* Routes */
const trendRoutes = require("./routes/TrendRoutes")

const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECT);

// MIDDLEWARE
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:3001"
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

app.use("/api/trend", trendRoutes);

app.post("/api/invoice-status", async(req, res) => {
    sendMessage(req.body);
    await res.send('Message sent');
});
server.listen(port, () => console.log(`Listening on port ${port}`));