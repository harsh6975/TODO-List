const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  catogery: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", todoSchema);
module.exports = User;
