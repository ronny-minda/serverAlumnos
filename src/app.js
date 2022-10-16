const express = require("express");

const main = () => {
  const app = express();

  const PORT = process.env.PORT || 5000;

  app.use("/", require("./routes/api"));

  app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
  });
};

module.exports = main;
