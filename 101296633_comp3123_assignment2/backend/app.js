const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
  res.send("Hello, this is the home route!");
});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email, password });
    if (check) {
      res.json("exist");
    } else {
      res.json("does not exist")
      await collection.insertMany([data])
    }
  } catch (e) {
    console.error(e);
    res.status(500).json("Internal Server Error");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email });
    if (check) {
      res.json("exist")
    } else {
      res.json("doesn't exist")
      await collection.insertMany([data])
    }
  } catch (e) {
    console.error(e);
    res.status(500).json("Server Error!");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
