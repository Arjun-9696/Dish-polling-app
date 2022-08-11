const express = require('express');
const app = express();
const cors = require('cors');
const { Register, Login } = require('./src/controllers/authController');
const connect = require('./src/configs/db');
app.use(express.json());
app.use(cors());
app.post('/register', Register);
app.post('/login', Login);
app.use('/',(req,res) => {
    res.json({message: 'Hello🥳 server is running'})
});

module.exports = app;
