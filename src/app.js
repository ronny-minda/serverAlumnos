const express = require("express");
const cors = require("cors");

const { dbConnection } = require("./database/bdConfig");

const main = () => {
  dbConnection();

  const app = express();
  app.use(express.json());
  app.use(cors());

  const PORT = process.env.PORT || 5000;

  app.use("/api", require("./routes/login"));
  app.use("/api", require("./routes/Cuentas"));

  app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
  });
};

module.exports = main;
