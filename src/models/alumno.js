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
  grupo: {
    type: String,
    default: "G0",
  },
  telefono: {
    type: String,
    default: "FALTA EL telefono",
  },
  correo: {
    type: String,
    // required: [true, "El correo es obligatorio"],
    // unique: true,
    // default: "FALTA EL correo",
  },

  curso: {
    type: String,
    default: "6to",
    emun: ["6to", "7mo", "8vo", "9no"],
  },
  horas: {
    type: String,
    default: "FALTA EL horas",
  },
  fechaInicio: {
    type: String,
    default: "FALTA EL fechaInicio",
  },
  fechaFin: {
    type: String,
    default: "FALTA EL fechaFin",
  },

  password: {
    type: String,
    required: [true, "El password es obligatorio"],
  },

  tutora: {
    type: Schema.Types.ObjectId,
    ref: "Tutora",
  },
  institucion: {
    type: Schema.Types.ObjectId,
    ref: "Institucion",
  },
  supervisora: {
    type: Schema.Types.ObjectId,
    ref: "Supervisora",
  },

  rol: {
    type: String,
    // required: true,
    default: "ALUGNO_ROLE",
    emun: ["ALUGNO_ROLE"],
  },
});

module.exports = model("Alumno", AlumnoSchema);
