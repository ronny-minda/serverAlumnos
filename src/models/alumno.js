const { Schema, model } = require("mongoose");

const AlumnoSchema = Schema({
  primerNombre: {
    type: String,
    default: "FALTA EL primerNombre",
  },
  segundoNombre: {
    type: String,
    default: "FALTA EL segundoNombre",
  },
  primerApellido: {
    type: String,
    default: "FALTA EL primerApellido",
  },
  segundoApellido: {
    type: String,
    default: "FALTA EL segundoApellido",
  },
  cedula: {
    type: String,
    default: "FALTA EL cedula",
  },
  telefono: {
    type: String,
    default: "FALTA EL telefono",
  },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
    default: "FALTA EL correo",
  },

  horas: {
    // las calculo yo
    type: String,
    default: "FALTA EL horas",
  },
  fechaInicio: {
    // las calculo yo
    type: String,
    default: "FALTA EL fechaInicio",
  },
  fechaFin: {
    // las calculo yo
    type: String,
    default: "FALTA EL fechaFin",
  },

  direccion: {
    type: String,
    default: "FALTA EL direccion",
  },
  password: {
    type: String,
    required: [true, "El password es obligatorio"],
  },
  rol: {
    type: String,
    // required: true,
    default: "ALUGNO_ROLE",
    emun: ["ALUGNO_ROLE"],
  },
  curso: {
    type: String,
    default: "6",
    emun: ["6", "7", "8", "9"],
  },

  institucion: {
    type: Schema.Types.ObjectId,
    ref: "Institucion",
    default: "6353871f3821598661b79ce9",
  },

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

module.exports = model("Alumno", AlumnoSchema);
