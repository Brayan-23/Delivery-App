const express = require('express');
const cors = require('cors')

const { Product } = require('../database/models');
const login = require('./Routes/LoginRouter');
const register = require('./Routes/registerRouter');

require('express-async-errors');

const app = express();
app.use(cors())

app.use(express.json());

app.use('/login', login);
app.use('/register', register);

app.use((err, req, res, _next) => res.status(err.status).json({ message: err.message }));

module.exports = app;
