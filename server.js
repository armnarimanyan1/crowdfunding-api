const express = require("express")
const cors = require("cors");
const http = require('http');
const app = express();
const server = http.createServer(app);
const bodyParser = require("body-parser")
const {socketConnection} = require('./helper/socket');
const port = process.env.PORT || 3001;

/* import routes */
const projectRoutes = require("./routes/projectRoutes")
const invoiceRoutes = require("./routes/invoiceRoutes")

/* middleware */
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    origin: [process.env.REACT_ORIGIN, "https://zigurat-api.herokuapp.com"]
}));

/* connect database */
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log("connected to the database"))
    .catch(err => {
        throw err
    });

/* socket connection */
socketConnection(server);

/* routes */
app.use("/api/project", projectRoutes);
app.use("/api/invoice", invoiceRoutes);

server.listen(port, () => console.log(`Listening on port ${port}`));
