const express = require("express");
const app = express();
const userRouter = require("./user");
const accountRouter = require("./account");
const pinRouter = require("./pin");
const cors = require("cors");

const router = express.Router();

app.use(cors());

router.use("/user", userRouter);
router.use("/account", accountRouter);
router.use("/pin", pinRouter);

module.exports = router;
