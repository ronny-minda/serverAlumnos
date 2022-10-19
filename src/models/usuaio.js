const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  cedula: {
    type: String,
  },
  primerNombre: {
    type: String,
  },
  segundoNombre: {
    type: String,
  },
  primerApellido: {
    type: String,
  },
  segundoApellido: {
    type: String,
  },
  telefono: {
    type: String,
  },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  horas: {
    type: String,
  },
  // admin
  fechaInicio: {
    type: String,
  },
  // admin
  fechaFin: {
    type: String,
  },
  tutora: {
    type: String,
  },
  supervisora: {
    type: String,
  },
  institucion: {
    type: String,
  },
  direccion: {
    type: String,
  },

  password: {
    type: String,
    required: [true, "El password es obligatorio"],
  },
  rol: {
    type: String,
    // required: true,
    default: "ALUGNO_ROLE",
    emun: ["ADMIN_ROLE", "TUTOR_ROLE", "SUPERVISORA_ROLE", "ALUGNO_ROLE"],
  },
});

module.exports = model("Usuario", UsuarioSchema);
