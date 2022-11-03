const { Schema, model } = require("mongoose");

const InstitucionSchema = Schema({
  nombre: {
    type: String,
  },
  direccion: {
    type: String,
  },
  tutora: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tutora",
    },
  ],
  horasUsadas: {
    type: String,
    default: "360",
  },
  numeroAsignacionBoleano: {
    type: Boolean,
    default: false,
  },
  numeroAsignacion: {
    type: String,
    default: "2",
  },
  supervisora: [
    {
      type: Schema.Types.ObjectId,
      ref: "Supervisora",
    },
  ],
  // NumeroPorSupervisoras: {
  //   type: String,
  //   default: "1",
  // },

  // tutora: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Supervisora",
  //   default: "6353871f3821598661b79ce9",
  // },

  // supervisora: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Supervisora",
  //   default: "6353871f3821598661b79ce9",
  // },
});

module.exports = model("Institucion", InstitucionSchema);
