const Alumno = require("../models/alumno");

const buscarCedula = async (req, res) => {
  const cedula = req.body;

  const alumno = await Alumno.findOne(cedula);

  if (alumno === null) {
    return res.json({ msg: "El alumno no existe" });
  }

  res.status(200).json(alumno);
};
module.exports = {
  buscarCedula,
};

const buscarApellido = async (req, res) => {
  const { apellido } = req.body;

  const alumno = await Alumno.findOne({ primerApellido: apellido })
    .populate("supervisora")
    .populate("tutora")
    .populate("institucion");

  if (alumno === null) {
    return res.json({ msg: "El alumno no existe" });
  }

  res.status(200).json(alumno);
};
module.exports = {
  buscarCedula,
  buscarApellido,
};
