const express = require("express");
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const bcrypt = require("bcrypt");
const saltRound = 10;
const router = express.Router();

const signupschema = zod
  .object({
    email: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),
  })
  .strict();

router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupschema.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      msg: "Invalid Input",
    });
  }
  const existingUser = await User.findOne({
    email: body.email,
  });
  if (existingUser) {
    return res.status(411).json({
      msg: "Email already taken",
    });
  }
  const hashedPassword = await bcrypt.hash(body.password, saltRound);

  const newUser = await User.create({
    email: body.email,
    password: hashedPassword,
    firstname: body.firstname,
    lastname: body.lastname,
  });

  const userId = newUser._id;

  try {
    Account.create({
      userId: userId,
      balance: Math.floor(1 + Math.random() * 10000),
    });
  } catch (err) {
    res.status(403).json({
      msg: "error while adding balance",
      err,
    });
  }

  const token = jwt.sign(
    {
      userId: newUser._id,
    },
    JWT_SECRET
  );

  return res.status(200).json({
    msg: "User created successfully",
    token: token,
  });
});
const { authMiddleware } = require("../authMiddleware");

const updatedUserData = zod.object({
  password: zod.string().optional(),
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const updatedData = req.body;
  const { success } = updatedUserData.safeParse(updatedData);
  if (!success) {
    return res.status(403).json({
      msg: "Error while updatng data",
    });
  }

  try {
    if (updatedData.password) {
      updatedData.password = await bcrypt.hash(updatedData.password, saltRound);
    }

    await User.updateOne({ _id: req.userId }, { $set: updatedData });
  } catch (error) {
    return res.status(500).json({
      msg: "Internal server Error",
    });
  }
  res.status(200).json({
    msg: "Data Update Successfully",
  });
});

router.get("/bulk", async (req, res) => {
  try {
    const filter = req.query.filter || "";

    const searchedUser = await User.find({
      $or: [
        { firstname: { $regex: filter, $options: "i" } },
        { lastname: { $regex: filter, $options: "i" } },
      ],
    });

    if (searchedUser.length === 0) {
      return res.status(404).json({ msg: "No User Found" });
    }

    res.status(200).json({
      users: searchedUser.map(({ email, firstname, lastname, _id }) => ({
        email,
        firstname,
        lastname,
        _id,
      })),
    });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
});

module.exports = router;
