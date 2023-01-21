const Institucion = require("../models/institucion");
// const bcryptjs = require("bcryptjs");
// const { generarJWT } = require("../controllers/generarJWT");

const crear = async (req, res) => {
  // const veificar = await Institucion.findOne(req.body);

  // if (veificar !== null) {
  //   return res.status(400).json({ msg: "La institucion si existe" });
  // }

  const institucion = new Institucion(req.body);

  await institucion.save();

  console.log(institucion);

  console.log({ institucion });

  res
    .status(200)
    .json({ msg: `La institucion ${institucion.nombre} fue creada` });
};

const buscarTodos = async (req, res) => {
  const todos = await Institucion.find()
    .populate({
      path: "supervisora",
    })
    .populate({
      path: "tutora",
    });
  res.status(200).json(todos);
};

const actualizarDatos = async (req, res) => {
  const { id, ...resto } = req.body;

  const veificar = await Institucion.findById(id);

  console.log({ veificar });

  if (veificar == null) {
    return res.status(400).json({ msg: "La institucion no existe" });
  }

  const institucion = await Institucion.findByIdAndUpdate(id, resto, {
    new: true,
  });

  console.log({ institucion });

  res.status(200).json(institucion);
};

const borrar = async (req, res) => {
  const { id } = req.body;

  console.log(req.body);

  const veificar = await Institucion.findById(id);

  if (veificar == null) {
    return res.status(400).json({ msg: "La institucion no existe" });
  }

  const admin = await Institucion.findByIdAndDelete(id, { new: true });

  // console.log({ admin });
  res.status(200).json({ msg: `La institucion ${admin.nombre} esta borrada` });
};

const crearGrupoGobal = async (req, res) => {

  const { cantidad, fecha } = req.body

  console.log(req.body)

  let numeroGrupo = 0

  const todasIntituciones = await Institucion.find()

  todasIntituciones.map( async (i)=> {

    i.grupo[i.grupo.length ] = {
      nombre: `G${i.grupo.length}`,
      cantidad: cantidad,
      fecha: fecha,
      usuarios: []
    }

    numeroGrupo = i.grupo.length - 1

    const { id, ...resto } = i

    await Institucion.findByIdAndUpdate(id, resto, {
      new: true,
    });
  })

  res.status(200).json({msg: "crearGrupoGobal", numeroGrupo})
}

module.exports = {
  actualizarDatos,
  buscarTodos,
  crear,
  borrar,
  crearGrupoGobal
};
