'use strict'

const express = require('express');
const bodyparse = require ('body-parser');
const http = require('http');
// const cors = require('cors');

const app = express();

//LOAD RUTS
let user_routes = require('./routes/user')
let agent_routes = require('./routes/agent')

app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());
// app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Ruts Base
app.use('/api', user_routes);
app.use('/api', agent_routes)


module.exports = app;