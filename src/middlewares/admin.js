const Admin = require("../models/admin");
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../controllers/generarJWT");

const buscar = async (req, res) => {
  console.log("desde buscar");

  const { id } = req.body;

  const admin = await Admin.findById(id);

  if (admin === null) {
    res.json({ msg: "El admin no existe" });
  }

  console.log(admin);
  res.json(admin);
};

const crearCuenta = async (req, res) => {
  console.log(req.body);

  const usuario = new Admin(req.body);

  //   const { password, ...resto } = usuario;

  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(req.body.password, salt);

  await usuario.save();

  const token = await generarJWT(usuario.id);

  console.log(usuario);

  console.log({
    usuario,
    token,
  });

  res.status(200).json({
    usuario,
    token,
  });
};

const actualizarDatos = async (req, res) => {
  const { id, password, ...resto } = req.body;

  // console.log(req.body);

  if (password) {
    //encriptar la constasenia
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const admin = await Admin.findByIdAndUpdate(id, resto, { new: true });

  console.log({ admin });

  res.status(200).json(admin);
};

// funcion no probada !!!!!!
const borrar = async (req, res) => {
  // console.log("borrar aaa");
  // res.status(200).json({ msg: "borrar aaa" });
  // const { id } = req.body;
  // const admin = await Admin.findByIdAndDelete(id, { new: true });
  // res.status(200).json(admin);
};

module.exports = {
  buscar,
  crearCuenta,
  actualizarDatos,
  borrar,
};
