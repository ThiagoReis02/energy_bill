'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const mysql = require('mysql');
const app = express();
const router = express.Router();
const logger = require('morgan');
const cors = require('cors')


app.use(logger('tiny'))
app.use(bodyParser.json({
  limit: '10mb'
}));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Enable CORS
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials'), true
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
//   next();
// });


app.use(cors())


const usuario = require('./../src/routes/usuario');
const gastoMensal = require('./../src/routes/gastoMensal');
const parametrizacao = require('./../src/routes/parametrizacao');


app.use('/usuario', usuario);
app.use('/gastoMensal', gastoMensal);
//app.use('/sincronizacao', sincronizacao);
app.use('/parametrizacao', parametrizacao);


module.exports = app;
