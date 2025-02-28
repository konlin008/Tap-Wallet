const express = require("express");
const { authMiddleware } = require("../authMiddleware");
const { Pin, Account } = require("../db");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRound = 10;

router.post("/setPin", authMiddleware, async (req, res) => {
  const body = req.body;
  const hashedPin = await bcrypt.hash(body.pin, saltRound);
  const user = await Account.findOne({
    userId: req.userId,
  });
  try {
    Pin.create({
      userId: user.userId,
      pin: hashedPin,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
  return res.status(200).json({
    msg: "Pin Created Successfully",
  });
});
router.get("/isPinSet", authMiddleware, async (req, res) => {
  try {
    const user = await Pin.findOne({ userId: req.userId });
    console.log(user);

    if (user === null) {
      return res.send(false);
    }

    return res.send(!!user.pin);
  } catch (error) {
    console.error("Error checking PIN:", error);
    res.status(500).send(false);
  }
});
router.post("/matchPin", authMiddleware, async (req, res) => {
  const checkPin = req.body.pin;
  if (!checkPin || typeof checkPin !== "string") {
    return res.status(400).json({ msg: "Invalid PIN format" });
  }
  const user = await Pin.findOne({
    userId: req.userId,
  });
  if (!user.pin) {
    return res.status(400).json({
      msg: "Set Your Pin First",
    });
  }
  const checkedPin = await bcrypt.compare(checkPin, user.pin);

  if (!checkedPin) {
    return res.status(400).json({
      msg: "Wrong Pin",
    });
  }
  res.status(200).json({
    msg: "Pin Matched",
  });
});
module.exports = router;
