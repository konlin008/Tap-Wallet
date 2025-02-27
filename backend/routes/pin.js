const express = require("express");
const zod = require("zod");
const { authMiddleware } = require("../authMiddleware");
const { User } = require("../db");
const router = express.Router();

const pinZodschema = zod
  .object({
    pin: zod.number().max(4).min(4),
  })
  .strict();

// router.get("/setPin", authMiddleware, async (req, res) => {
//   const user = await User.findOne({
//     userId: req.userId,
//   });
//   res.json({
//     user: user,
//   });
// });

module.exports = router;
