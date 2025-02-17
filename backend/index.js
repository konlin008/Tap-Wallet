const express = require("express");
const mainRoute = require("./routes/index");
const port = 3000;

const app = express();

app.use("/api/v1", mainRoute);

app.use(express.json());

app.listen(port, () => {
  console.log(`port listening on ${port}`);
});
