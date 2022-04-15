const express = require("express")
const bodyParser = require("body-parser")
const ConnectDatabase = require("./database/DatabaseConfig");

const port = process.env.PORT || 3002;

// connecting to database
new ConnectDatabase().getConnection()
    .then((res) => console.log(res))
    .catch((err) => {
        throw err
    })

// routes
const ProjectDetailsRoutes = require("./routes/ProjectDetailsRoutes")

// MIDDLEWARE
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use routes
app.use("/api/project-detail", ProjectDetailsRoutes);

app.listen(port, () => console.log(`App listening on port ${port}!`))
