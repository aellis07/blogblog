const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dashboard extends Model {}

Dashboard.init();
