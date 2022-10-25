const { Schema, model } = require("mongoose");

const InstitucionSchema = Schema({
  nombre: {
    type: String,
    // required: [true, "El correo es obligatorio"],
    // unique: true,
  },
  NumeroPorSupervisoras: {
    type: String,
    default: "6",
    emun: ["6", "7", "8", "9"],
  },
  tutora: {
    type: Schema.Types.ObjectId,
    ref: "Supervisora",
    default: "6353871f3821598661b79ce9",
  },
  supervisora: {
    type: Schema.Types.ObjectId,
    ref: "Supervisora",
    default: "6353871f3821598661b79ce9",
  },
});

module.exports = model("Institucion", InstitucionSchema);
