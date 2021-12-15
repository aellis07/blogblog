const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dashboard extends Model {}

Dashboard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    postTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postContent: { type: DataTypes.STRING },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Dashboard",
  }
);

module.exports = Dashboard;
