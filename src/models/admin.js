const { Schema, model } = require("mongoose");

const AdminSchema = Schema({
  primerNombre: {
    type: String,
    default: "FALTA EL primerNombre",
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
  institucion: {
    type: String,
    default: "FALTA EL institucion",
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
    default: "ADMIN_ROLE",
    emun: ["ADMIN_ROLE"],
  },
});

module.exports = model("Admin", AdminSchema);
