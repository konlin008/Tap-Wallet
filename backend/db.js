require("dotenv").config();
const mongoose = require("mongoose");

const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL, {})
  .then(() => console.log("mongodb connected "))
  .catch(() => console.log("mongodb not connected "));

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstname: String,
  lastname: String,
});

const User = mongoose.model("user", userSchema);

module.exports = {
  User,
};
