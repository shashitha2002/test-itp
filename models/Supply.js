const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const supplySchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  receivedDate: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Available",
  },
});

module.exports = mongoose.model("Supply", supplySchema);
