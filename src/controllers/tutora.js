const Tutora = require("../models/tutora");

const pedirTodos = async (req, res) => {
  console.log("pedirTodos");
  //   const todos = await Supervisora.find();
  //   console.log(todos);
  //   res.status(200).json(todos);
};

const crear = async (req, res) => {
  const { nombre } = req.body;

  const veificar = await Tutora.findOne({ nombre: nombre });
  if (veificar !== null) {
    return res.status(400).json({ msg: "La tutora ya existe" });
  }

  const tutora = new Tutora(req.body);
  await tutora.save();
  console.log({ tutora });
  res.status(200).json({ msg: `El tutor ${tutora.nombre} fue creada` });
};

const actualizarDatos = async (req, res) => {
  //   const { id, ...resto } = req.body;
  //   const veificar = await Supervisora.findById(id);
  //   console.log({ veificar });
  //   if (veificar == null) {
  //     return res.status(400).json({ msg: "La supervisora no existe" });
  //   }
  //   const supervisora = await Supervisora.findByIdAndUpdate(id, resto, {
  //     new: true,
  //   });
  //   console.log({ supervisora });
  //   res.status(200).json(supervisora);
};

const borrar = async (req, res) => {
  //   const { id } = req.body;
  //   const veificar = await Supervisora.findById(id);
  //   if (veificar == null) {
  //     return res.status(400).json({ msg: "La Supervisora no existe" });
  //   }
  //   const supervisora = await Supervisora.findByIdAndDelete(id, { new: true });
  //   console.log({ supervisora });
  //   res
  //     .status(200)
  //     .json({ msg: `El usuaio ${supervisora.primerNombre} esta borrada` });
};

module.exports = {
  pedirTodos,
  actualizarDatos,
  crear,
  borrar,
};
