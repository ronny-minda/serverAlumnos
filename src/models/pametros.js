const { Schema, model } = require("mongoose");

const ParametrosSchema = Schema({
  parametros: {
    type: String,
  },
});

module.exports = model("Parametros", ParametrosSchema);
