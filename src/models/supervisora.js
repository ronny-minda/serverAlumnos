const { Schema, model } = require("mongoose");

const SupervisoraSchema = Schema({
  nombre: {
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
  horasUsadas: {
    type: String,
    default: "0",
  },
  numeroAsignacion: {
    type: String,
    default: "0",
  },
  correo: {
    type: String,
    default: "FALTA EL correo",
  },

  // rol: {
  //   type: String,
  //   // required: true,
  //   default: "TUTOR_ROLE",
  //   emun: ["TUTOR_ROLE", "SUPERVISORA_ROLE"],
  // },
});

module.exports = model("Supervisora", SupervisoraSchema);
