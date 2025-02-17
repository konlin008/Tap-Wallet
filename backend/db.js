import mongoose from "mongoose";
import { string } from "zod";

const URL =
  "mongodb+srv://amanofficial0108:XyT9TCZ53hXfMjrN@cluster0.cdyu3.mongodb.net/cluster0";

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected "))
  .catch(() => console.log("mongodb not connected "));

const userSchema = new mongoose.Schema({
  username: string,
  password: string,
  firstname: string,
  lastname: string,
});

const user = mongoose.model("user", userSchema);

module.exports = {
  user,
};
