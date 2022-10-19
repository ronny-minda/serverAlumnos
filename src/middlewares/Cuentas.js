const Usuaio = require("../models/usuaio");

const buscarCuentaID = async (req, res) => {
  const cuenta = await Usuaio.findById("634efe03b02c0a9798d1b58e");
  console.log(cuenta);
  res.status(200).json({ msg: "sii" });
};

const buscarTodasCuenta = async (req, res) => {
  const { limite, desde } = req.body;

  console.log(req.body);

  const cuenta = await Usuaio.find().skip(desde).limit(limite);

  res.status(200).json(cuenta);
};

const crearCuenta = async (req, res) => {
  //   const { nuevo } = req.body;
  console.log(req.body);

  const usuaio = new Usuaio(req.body);

  await usuaio.save();

  res.status(200).json(usuaio);
};

const actualizarCuenta = async (req, res) => {
  const actualizar = await Usuaio.findByIdAndUpdate(
    "634efe03b02c0a9798d1b58e",
    req.body
  );

  res.status(200).json(actualizar);
};

const borarCuenta = async (req, res) => {
  console.log("delete");
  // console.log(req.body);

  // const cuenta = await Usuaio.findById("634ed38f946cb2e68f7777a9"); //buscar

  const cuenta = await Usuaio.findByIdAndDelete("634efe03b02c0a9798d1b58e", {
    new: true,
  }); // borrar

  // const cuenta = await Usuaio.findByIdAndUpdate(
  //   "634efe03b02c0a9798d1b58e",
  //   req.body,
  //   { new: true }
  // ); //

  res.status(200).json(cuenta);
  // console.log({ cuenta });
};

module.exports = {
  buscarCuentaID,
  buscarTodasCuenta,
  crearCuenta,
  borarCuenta,
  actualizarCuenta,
};
