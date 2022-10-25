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

  app.use("/api/alumno", require("./routes/alumno"));

  app.use("/api/buscar", require("./routes/buscar"));

  app.use("/api/admin", require("./routes/admin"));
  app.use("/api/institucion", require("./routes/institucion"));
  app.use("/api/supervisora", require("./routes/supervisora"));

  app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
  });
};

module.exports = main;
