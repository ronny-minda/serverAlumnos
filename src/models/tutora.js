const { Schema, model } = require("mongoose");

const TutoraSchema = Schema({
  nombre: {
    type: String,
    default: "FALTA EL primerNombre",
  },
  //   segundoNombre: {
  //     type: String,
  //     default: "FALTA EL segundoNombre",
  //   },
  //   primerApellido: {
  //     type: String,
  //     default: "FALTA EL primerApellido",
  //   },
  //   segundoApellido: {
  //     type: String,
  //     default: "FALTA EL segundoApellido",
  //   },
  //   cedula: {
  //     type: String,
  //     default: "FALTA EL cedula",
  //   },
  //   telefono: {
  //     type: String,
  //     default: "FALTA EL telefono",
  //   },
  //   correo: {
  //     type: String,
  //     default: "FALTA EL correo",
  //   },
  //   institucion: {
  //     type: String,
  //     default: "FALTA EL institucion",
  //   },
  //   direccion: {
  //     type: String,
  //     default: "FALTA EL direccion",
  //   },
  //   rol: {
  //     type: String,
  //     // required: true,
  //     default: "TUTOR_ROLE",
  //     emun: ["TUTOR_ROLE", "SUPERVISORA_ROLE"],
  //   },
});

module.exports = model("Tutora", TutoraSchema);
