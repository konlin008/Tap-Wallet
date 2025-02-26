require("dotenv").config();
const express = require("express");
const mainRoute = require("./routes/index");
const port = process.env.PORT;
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/v1", mainRoute);

app.listen(port, () => {
  console.log(`port listening on ${port}`);
});
