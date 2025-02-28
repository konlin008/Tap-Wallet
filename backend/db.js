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

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const pinSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
const Account = mongoose.model("Account", accountSchema);
const Pin = mongoose.model("Pin", pinSchema);

module.exports = {
  User,
  Account,
  Pin,
};
