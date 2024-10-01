const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8000

// middleware is used to parse json request body
app.use(express.json());
app.use(cors());


const todoRoutes = require('./routes/router.routes');
app.use('/api/v1', todoRoutes);

app.listen(PORT, function () {
    console.log(`server listening on port ${PORT}`);
})

const dbConnect = require('./config/database');
const path = require('path');
dbConnect();

app.get('/', function (req, res) {
    app.use(express.static(path.resolve(__dirname, "eminence-tally", "dist")));
    res.sendFile(path.resolve(__dirname, "eminence-tally", "dist", "index.html"));
});

app.get('/about', function (req, res) {
    app.use(express.static(path.resolve(__dirname, "eminence-tally", "dist")));
    res.sendFile(path.resolve(__dirname, "eminence-tally", "dist", "index.html"));
});


app.get('/contact', function (req, res) {
    app.use(express.static(path.resolve(__dirname, "eminence-tally", "dist")));
    res.sendFile(path.resolve(__dirname, "eminence-tally", "dist", "index.html"));
});

app.get('/gallery', function (req, res) {
    app.use(express.static(path.resolve(__dirname, "eminence-tally", "dist")));
    res.sendFile(path.resolve(__dirname, "eminence-tally", "dist", "index.html"));
});

app.get('/teachers', function (req, res) {
    app.use(express.static(path.resolve(__dirname, "eminence-tally", "dist")));
    res.sendFile(path.resolve(__dirname, "eminence-tally", "dist", "index.html"));
});


app.get('/courses', function (req, res) {
    app.use(express.static(path.resolve(__dirname, "eminence-tally", "dist")));
    res.sendFile(path.resolve(__dirname, "eminence-tally", "dist", "index.html"));
});

