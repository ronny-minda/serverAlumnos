const Usuaio = require("../models/usuaio");
const { generarJWT } = require("../controllers/generarJWT");

const logear = async (req, res) => {
  // const usuaio = await Usuaio.findOne({})

  console.log("login");
  const { correo, password } = req.body;

  console.log(correo);

  const usuario = await Usuaio.findOne({ correo });

  console.log(usuario.id);

  const token = await generarJWT(usuario.id);

  console.log(token);

  res.json({
    usuario,
    token,
  });
};

const crearCuenta = async (req, res) => {
  const { usuario, correo, password } = req.body;
};

module.exports = {
  logear,
};
