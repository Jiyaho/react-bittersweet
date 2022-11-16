const mongoose = require("mongoose");

const postingSchema = mongoose.Schema({
  writer: {
    type: String,
    maxlength: 15,
  },
  title: {
    type: String,
    maxlenth: 35,
  },
  content: {
    type: String,
    maxlength: 1000,
  },
});

const Posting = mongoose.model("Posting", postingSchema);

module.exports = { Posting };
