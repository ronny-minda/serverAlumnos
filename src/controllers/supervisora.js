const Supervisora = require("../models/supervisora");
// const bcryptjs = require("bcryptjs");
// const { generarJWT } = require("../middlewares/generarJWT");

const pedirTodos = async (req, res) => {
  // console.log("pedirTodos");

  const todos = await Supervisora.find();
  // const numero = todos.length;

  console.log(todos);
  // res.status(200).json({
  //   numero,
  //   todos,
  // });

  res.status(200).json(todos);
};

const crear = async (req, res) => {
  const { cedula } = req.body;

  const veificar = await Supervisora.findOne({ cedula });

  if (veificar !== null) {
    return res.json({ msg: "La supervisora ya existe" });
  }

  const supervisora = new Supervisora(req.body);

  await supervisora.save();

  console.log({ supervisora });

  res.status(200).json({ supervisora });
};

const actualizarDatos = async (req, res) => {
  const { id, ...resto } = req.body;

  const veificar = await Supervisora.findById(id);

  console.log({ veificar });

  if (veificar == null) {
    return res.status(400).json({ msg: "La supervisora no existe" });
  }

  const supervisora = await Supervisora.findByIdAndUpdate(id, resto, {
    new: true,
  });
  console.log({ supervisora });
  res.status(200).json(supervisora);
};

const borrar = async (req, res) => {
  const { id } = req.body;

  const veificar = await Supervisora.findById(id);

  if (veificar == null) {
    return res.status(400).json({ msg: "La Supervisora no existe" });
  }

  const supervisora = await Supervisora.findByIdAndDelete(id, { new: true });

  console.log({ supervisora });

  res
    .status(200)
    .json({ msg: `El usuaio ${supervisora.primerNombre} esta borrada` });
};

module.exports = {
  pedirTodos,
  actualizarDatos,
  crear,
  borrar,
};
