require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/video.route.js');
const cors = require('cors')

mongoose.connect(mongoString); // connect database
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
})


const videoRoute = require("./routes/video.route.js")

app.use(bodyParser.json());
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/video", videoRoute);
app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;