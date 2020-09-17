'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('energybill', 'root', 'Reis_123@', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  operatorsAliases: false,
  timezone: '-03:00', // for writing to database
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Autenticação OK');
  })
  .catch(err => {
    console.error('********** Não autenticado: ', err);
  });

module.exports = sequelize;
