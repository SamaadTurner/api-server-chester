'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Pet = require('./pet.js');
const Car = require('./car.js');

const SQL_CONNECTION_STRING =
  process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';

const sequelize = new Sequelize(SQL_CONNECTION_STRING);

module.exports = {
  sequelize,
  PetModel: Pet(sequelize, DataTypes),
  CarModel: Car(sequelize, DataTypes),
};