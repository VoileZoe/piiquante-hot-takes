const express = require("express");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: "Null add message",
  });
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: "Null add message",
  });
});

module.exports = router;