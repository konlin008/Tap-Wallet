const express = require("express");
const { authMiddleware } = require("../authMiddleware");
const { Account } = require("../db");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  if (!account) {
    return res.status(500).json({
      msg: "can not fetch",
    });
  }
  res.status(200).json({
    balance: account.balance,
  });

});

module.exports = router;
