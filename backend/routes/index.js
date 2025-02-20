const express = require("express");
const app = express();
const userRouter = require("./user");
const accountRouter = require("./account");
const cors = require("cors");

const router = express.Router();

app.use(cors());

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;
