const sequelize = require("../config/connection");
const seedUser = require("./userData.json");
const seedPost = require("./postData.json");
const User = require("../models/User");
const Dashboard = require("../models/Dashboard");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });
  await Dashboard.bulkCreate(seedPost, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();
