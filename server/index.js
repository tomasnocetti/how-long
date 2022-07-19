const express = require("express");
const app = express();
const eventsRouter = require("./src/routes/events");

const port = 3000;

app.get("/", function (req, res, next) {
  res.send("Hello world!");
});

app.use("/events", eventsRouter);

app.listen(port, () => {
  console.log(`Up and running on ${port}`);
});
