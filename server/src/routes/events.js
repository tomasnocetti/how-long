const express = require("express");
const router = express.Router();

const demoEvents = [
  {
    userId: "tnocetti",
    source: "google",
    name: "Exam Prob And Statisitc",
    date: "2022-10-07",
  },
  {
    userId: "tnocetti",
    type: "google",
    name: "Event Name",
    date: "2022-10-07",
  },
];

router.get("/", (req, res) => {
  console.log("");
  res.json(demoEvents);
});

module.exports = router;
