const db = require("../config/connection");
const { User } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const { Drink } = require(`../models/Drink`);
const drinkSeeds = require("./drinkSeed.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(profileSeeds);
    await Drink.create(drinkSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
