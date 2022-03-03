const mongoose = require("mongoose");

//Books Schema
const bookSchema = mongoose.Schema({
  bookname: { type: String },
  authorname: { type: String },
  category: { type: String },
  // eslint-disable-next-line no-undef
  rating: { type: Integer },
  completed: { type: Boolean },
});

module.exports = mongoose.model("BookSchema", bookSchema);
