const mongoose = require("mongoose");

const { Schema } = mongoose;

const drinkSchema = new Schema({
  name: {
    type: String,
    require: true,
  },

  quantity: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },
});

const Drink = mongoose.model("Drink", drinkSchema);

module.export = Drink;
