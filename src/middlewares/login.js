const Alumno = require("../models/alumno");
const Admin = require("../models/admin");
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../controllers/generarJWT");

const logear = async (req, res) => {
  const { cedula, password } = req.body;

  let usuario;

  usuario = await Admin.findOne({ cedula });

  if (usuario === null) {
    usuario = await Alumno.findOne({ cedula });
  }

  if (!usuario) {
    return res.status(400).json({
      msg: "El usuario o contaseña sin incorrectos",
    });
  }

  // Verificar la contraseña
  const validPassword = bcryptjs.compareSync(password, usuario.password);
  if (!validPassword) {
    return res.status(400).json({
      msg: "El usuario o contaseña sin incorrectos",
    });
  }

  const token = await generarJWT(usuario.id);

  console.log({
    usuario,
    token,
  });

  res.json({
    usuario,
    token,
  });
};

module.exports = {
  logear,
};
