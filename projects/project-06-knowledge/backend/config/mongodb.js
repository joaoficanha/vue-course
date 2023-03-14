const { mongo } = require("../.env");
const mongoose = require("mongoose");

mongoose
  .connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    const message = "ERROR! Cannot connect to MongoDB!";
    console.log("\x1b[41m%s\x1b[37m", message, "\x1b[0m");
  });
