const express = require("express");
const { authMiddleware } = require("../authMiddleware");
const { Account, User } = require("../db");
const { default: mongoose } = require("mongoose");

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

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  const { amount, to } = req.body;

  const fromAccount = await Account.findOne({
    userId: req.userId,
  });

  if (!fromAccount || fromAccount.balance < amount) {
    await session.abortTransaction();
    return res.status(403).json({
      msg: "Insufficient Balance",
    });
  }

  const toAccount = await Account.findOne({
    userId: to,
  });

  if (!toAccount) {
    await session.abortTransaction();
    res.status(400).json({
      msg: "No User Found",
    });
  }

  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: toAccount.userId },
    { $inc: { balance: amount } }
  ).session(session);
  await session.commitTransaction();
  res.status(200).json({
    msg: "Amount Transferd successfully",
  });

  session.endSession();
});
module.exports = router;
