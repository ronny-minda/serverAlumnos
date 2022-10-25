const Alumno = require("../models/alumno");
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../controllers/generarJWT");

const buscarAlumnoID = async (req, res) => {
  console.log("desde buscar Alumno ID");

  const { id } = req.body;

  const alumno = await Alumno.findById(id)
    .populate("supervisora")
    .populate("tutora");

  console.log(alumno);

  res.status(200).json(alumno);
};

const buscarTodasAlumno = async (req, res) => {
  const { limite, desde } = req.body;

  console.log(req.body);

  const alumno = await Alumno.find().skip(desde).limit(limite);
  // .populate("supervisora")
  // .populate("tutora");

  res.status(200).json(alumno);
};

const crearAlumno = async (req, res) => {
  const { cedula, correo } = req.body;

  const veificar = await Alumno.findOne({ cedula });
  const email = await Alumno.findOne({ correo });

  // console.log({ email });

  if (veificar !== null) {
    return res.status(400).json({ msg: "El alumno ya existe" });
  }

  if (email !== null) {
    return res.status(400).json({ msg: "El email ya existe" });
  }

  const alumno = new Alumno(req.body);

  const salt = bcryptjs.genSaltSync();
  alumno.password = bcryptjs.hashSync(req.body.password, salt);

  await alumno.save();

  const token = await generarJWT(alumno.id);

  // console.log({
  //   alumno,
  //   token,
  // });

  res.status(200).json({
    usuario: alumno,
    token,
  });
};

const actualizarAlumno = async (req, res) => {
  const { correo } = req.body;
  const { id, ...resto } = req.body;

  const veificar = await Alumno.findById(id);

  console.log({ veificar });

  if (veificar == null) {
    return res.status(400).json({ msg: "La Alumno no existe" });
  }

  const alumno = await Alumno.findByIdAndUpdate(id, resto, {
    new: true,
  });
  console.log({ alumno });
  res.status(200).json(alumno);
};

const borarAlumno = async (req, res) => {
  const { id } = req.body;

  console.log("delete");

  const veificar = await Supervisora.findById(id);

  if (veificar == null) {
    return res.status(400).json({ msg: "La Supervisora no existe" });
  }

  const alumno = await Alumno.findByIdAndDelete(id, {
    new: true,
  });

  console.log("primerNombre");
  console.log(alumno);

  res
    .status(200)
    .json({ msg: `El alumno ${alumno.primerNombre} esta eliminado` });
};

module.exports = {
  buscarAlumnoID,
  buscarTodasAlumno,
  crearAlumno,
  actualizarAlumno,
  borarAlumno,
};
