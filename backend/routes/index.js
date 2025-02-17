const express = require("express");
const app = express();
const userRouter = require("./user");
const cors = require("cors");

const router = express.Router();

app.use(cors());

router.use("./user", userRouter);

module.exports = router;
