const mongoose = require("mongoose"); // Add comment
const hostelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amenities: {
    type: Array, // Add another comment
  },
  author: {
    _id: String,
    name: String,
  },
  description: {
    type: String,
  },
  steps: {
    type: Array,
  },
});
const Hostel = mongoose.model("Hostel", hostelSchema);
module.exports = Hostel;
