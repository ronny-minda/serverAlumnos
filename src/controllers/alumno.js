const Alumno = require("../models/alumno");
const Institucion = require("../models/institucion");
const Supervisora = require("../models/supervisora");
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../middlewares/generarJWT");

const buscarAlumnoID = async (req, res) => {
  console.log("desde buscar Alumno ID");

  const { id } = req.body;

  const alumno = await Alumno.findById(id)
    .populate("supervisora")
    .populate("tutora");

  console.log(alumno);

  res.status(200).json(alumno);
};

const buscarCedula = async (req, res) => {
  console.log("desde buscar buscarCedula");

  const { cedula } = req.body;

  const alumno = await Alumno.findByI({ cedula })
    .populate("supervisora")
    .populate("tutora")
    .populate("institucion");

  console.log(alumno);

  res.status(200).json(alumno);
};

const buscarTodasAlumno = async (req, res) => {
  const { limite, desde } = req.body;

  console.log(req.body);

  // const alumno = await Alumno.find().skip(desde).limit(limite);
  // .populate("supervisora")
  // .populate("tutora");

  const alumno = await Alumno.find()
    .populate("supervisora")
    .populate("tutora")
    .populate("institucion");

  console.log("alumno");
  console.log(alumno);

  res.status(200).json(alumno);
};

const crearAlumno = async (req, res) => {
  let {
    institucion: idInsitucion,
    cedula,
    correo,
    horas,
    fechaInicio,
    fechaFin,
  } = req.body;

  req.body.fechaInicio = fechaInicio.substring(0, fechaInicio.length - 14);
  req.body.fechaFin = fechaFin.substring(0, fechaFin.length - 14);

  let horasAlumno = horas.substring(0, horas.length - 1);

  // console.log("crearAlumno");
  // console.log(req.body);

  const veificar = await Alumno.findOne({ cedula });
  const email = await Alumno.findOne({ correo });

  const institucion = await Institucion.findById(idInsitucion)
    .populate({
      path: "supervisora",
    })
    .populate({
      path: "tutora",
    });

  if (veificar !== null) {
    return res
      .status(400)
      .json({ msg: `El alumno con la cedula ${cedula} ya existe` });
  }

  if (email !== null) {
    return res
      .status(400)
      .json({ msg: `El alumno con el correo ${correo} ya existe` });
  }

  if (institucion == null) {
    return res.status(400).json({ msg: `La institucion no existe` });
  }

  let numero = 0;
  let porDefecto = true;

  // console.log(institucion);

  institucion.supervisora.map(async (i) => {
    // if (false) {

    if (!institucion.numeroAsignacionBoleano) {
      if (numero === 0) {
        let horasAntisipo = parseInt(i.horasUsadas) + parseInt(horasAlumno);
        if (horasAntisipo <= institucion.horasUsadas) {
          numero = 1;
          porDefecto = false;

          const sumaDeHoras = parseInt(i.horasUsadas) + parseInt(horasAlumno);

          i.horasUsadas = sumaDeHoras.toString();

          console.log("supervisora");
          console.log(i);

          const { id, ...resto } = i;

          const supervisora = await Supervisora.findByIdAndUpdate(id, resto, {
            new: true,
          });

          let objAlumno = req.body;
          const resultAlumno = {
            ...objAlumno,
            tutora: institucion.tutora[0]._id,
            supervisora: supervisora._id,
          };
          const alumno = new Alumno(resultAlumno);
          const salt = bcryptjs.genSaltSync();
          alumno.password = bcryptjs.hashSync(req.body.password, salt);
          await alumno.save();
          const token = await generarJWT(alumno._id);
          console.log("alumno");
          console.log(alumno);
          const nuevoAlumno = await Alumno.findById(alumno._id)
            .populate("supervisora")
            .populate("tutora")
            .populate("institucion");
          return res.status(201).json({
            token,
            alumno: nuevoAlumno,
          });
        }
      }
    } else {
      if (numero === 0) {
        if (i.numeroAsignacion <= institucion.numeroAsignacion) {
          numero = 1;
          porDefecto = false;

          const sumaDeasignacion = parseInt(i.numeroAsignacion) + 1;
          i.numeroAsignacion = sumaDeasignacion.toString();
          console.log("supervisora");
          console.log(i);

          const { id, ...resto } = i;

          const supervisora = await Supervisora.findByIdAndUpdate(id, resto, {
            new: true,
          });

          let objAlumno = req.body;
          const resultAlumno = {
            ...objAlumno,
            tutora: institucion.tutora[0]._id,
            supervisora: supervisora._id,
          };
          const alumno = new Alumno(resultAlumno);
          const salt = bcryptjs.genSaltSync();
          alumno.password = bcryptjs.hashSync(req.body.password, salt);
          await alumno.save();
          const token = await generarJWT(alumno._id);
          console.log("alumno");
          console.log(alumno);
          const nuevoAlumno = await Alumno.findById(alumno._id)
            .populate("supervisora")
            .populate("tutora")
            .populate("institucion");
          return res.status(202).json({
            token,
            alumno: nuevoAlumno,
          });
        }
      }
    }

    // if (true) {
    //   numero = 1;
    //   console.log(i);
    //   const supervisora = await Supervisora.findById(i._id);
    //   supervisora.numeroAsignacion = "0";
    //   // supervisora.numeroAsignacion = parseInt(supervisora.numeroAsignacion) + 1;
    //   supervisora.save();
    // }
    // if (i.numeroAsignacion < institucion.numeroAsignacion && numero == 0) {
    //   numero = 1;
    //   const supervisora = await Supervisora.findById(i._id);
    //   supervisora.numeroAsignacion = parseInt(supervisora.numeroAsignacion) + 1;
    //   let objAlumno = req.body;
    //   const resultAlumno = {
    //     ...objAlumno,
    //     tutora: institucion.tutora[0]._id,
    //     supervisora: supervisora._id,
    //   };
    //   const alumno = new Alumno(resultAlumno);
    //   const salt = bcryptjs.genSaltSync();
    //   alumno.password = bcryptjs.hashSync(req.body.password, salt);
    //   await alumno.save();
    //   const token = await generarJWT(alumno._id);
    //   console.log("alumno");
    //   console.log(alumno);
    //   const nuevoAlumno = await Alumno.findById(alumno._id)
    //     .populate("supervisora")
    //     .populate("tutora")
    //     .populate("institucion");
    //   return res.json({
    //     token,
    //     alumno: nuevoAlumno,
    //   });
    // }
  });

  if (porDefecto) {
    let objAlumno = req.body;
    const resultAlumno = {
      ...objAlumno,
      tutora: institucion.tutora[0]._id,
      supervisora: "6361e68183c59c31c11622c8",
    };
    const alumno = new Alumno(resultAlumno);
    const salt = bcryptjs.genSaltSync();
    alumno.password = bcryptjs.hashSync(req.body.password, salt);
    await alumno.save();
    const token = await generarJWT(alumno._id);
    console.log("alumno");
    console.log(alumno);
    const nuevoAlumno = await Alumno.findById(alumno._id)
      .populate("supervisora")
      .populate("tutora")
      .populate("institucion");
    return res.status(203).json({
      token,
      alumno: nuevoAlumno,
    });
  }

  // const veificar = await Alumno.findOne({ cedula });
  // const email = await Alumno.findOne({ correo });

  // // console.log({ email });

  // if (veificar !== null) {
  //   return res.status(400).json({ msg: "El alumno ya existe" });
  // }

  // if (email !== null) {
  //   return res.status(400).json({ msg: "El email ya existe" });
  // }

  // const alumno = new Alumno(req.body);

  // const salt = bcryptjs.genSaltSync();
  // alumno.password = bcryptjs.hashSync(req.body.password, salt);

  // await alumno.save();

  // const token = await generarJWT(alumno.id);

  // // console.log({
  // //   alumno,
  // //   token,
  // // });

  // res.status(200).json({
  //   usuario: alumno,
  //   token,
  // });
};

const actualizarAlumno = async (req, res) => {
  // console.log("actualizarAlumno");
  const { correo } = req.body;
  const { id, password, ...resto } = req.body;

  // console.log("req.body");
  // console.log(req.body);

  if (password) {
    //encriptar la constasenia
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt)
  }

  // Actualizar la institucion anterior
  const veificar = await Alumno.findById(id);

  const institucion = await Institucion.findById(veificar.institucion);

  const arrayListo = institucion.grupo[institucion.grupo.length - 1].usuarios.filter((i)=> {
    // console.log(i)
    if (i.toString() !== id) {
      return i
    }
  })

  // console.log(arrayListo)
  institucion.grupo[institucion.grupo.length - 1].usuarios = arrayListo

  const { _id: institucionId, ...institucionResto } = institucion

  const actualizadaInstitucion = await Institucion.findByIdAndUpdate(institucionId, institucionResto, {
    new: true,
  });

  // Actualizar la institucion actual

  // console.log(resto.institucion)

  const institucionActual = await Institucion.findById(resto.institucion);

  console.log("institucionActual")
  // console.log(institucionActual)

  institucionActual.grupo[institucionActual.grupo.length - 1].usuarios[institucionActual.grupo[institucionActual.grupo.length - 1].usuarios.length] = veificar._id

  const { _id: institucionActualId, ...institucionActualResto } = institucionActual

  const institucionActualToodo = await Institucion.findByIdAndUpdate(institucionActualId, institucionActualResto, {
    new: true,
  });

  console.log(institucionActualToodo)


  if (veificar == null) {
    return res.status(400).json({ msg: "La Alumno no existe" });
  }

  const alumno = await Alumno.findByIdAndUpdate(id, resto, {
    new: true,
  });
  // console.log({ alumno });
  res.status(200).json(alumno);
  // res.status(200).json({ msg: "actualizarAlumno" });
};

const borarAlumno = async (req, res) => {
  const { id } = req.body;

  console.log("delete");

  const veificar = await Alumno.findById(id);

  if (veificar == null) {
    return res.status(400).json({ msg: "El alumno no existe" });
  }

  const alumnoDatos = await Alumno.findById(id);

  const supervisora = await Supervisora.findById(alumnoDatos.supervisora);

  // console.log("alumnoDatos");
  // console.log(alumnoDatos);

  let horasAlumno = alumnoDatos.horas.substring(
    0,
    alumnoDatos.horas.length - 1
  );

  let {
    _id: idSupervisora,
    horasUsadas,
    numeroAsignacion,
    ...resto
  } = supervisora;

  if (horasUsadas != "0") {
    console.log("horasUsadas");
    let result = parseInt(horasUsadas) - parseInt(horasAlumno);
    horasUsadas = result.toString();
    console.log(horasUsadas);
  }

  if (numeroAsignacion != "0") {
    let result = parseInt(numeroAsignacion) - 1;
    numeroAsignacion = result.toString();
  }

  const todo = {
    horasUsadas,
    numeroAsignacion,
    resto,
  };

  console.log("todo");
  console.log(todo);

  const supervisoraAcualizada = await Supervisora.findByIdAndUpdate(
    idSupervisora,
    todo,
    {
      new: true,
    }
  );

  console.log("supervisoraAcualizada");
  console.log(supervisoraAcualizada);

  const alumno = await Alumno.findByIdAndDelete(id, {
    new: true,
  });

  console.log("primerNombre");
  console.log(alumno);

  res
    .status(200)
    .json({ msg: "El alumno ${alumno.primerNombre} esta eliminado" });
};

const resetear = async (req, res) => {
  console.log("resetear");

  const allSupevisoras = await Supervisora.find();

  console.log("allSupevisoras");
  console.log(allSupevisoras);

  allSupevisoras.map((i) => {
    const ejecutar = async () => {
      let { _id: id, horasUsadas, numeroAsignacion, ...resto } = i;

      horasUsadas = "0";
      numeroAsignacion = "0";

      const todo = {
        horasUsadas,
        numeroAsignacion,
        resto,
      };

      const supervisora = await Supervisora.findByIdAndUpdate(id, todo, {
        new: true,
      });

      console.log("supervisora");
      console.log(supervisora);
    };

    ejecutar();
  });

  res.json({ msg: "todo esta reseteado" });
};

const cambiarFecha = async (req, res) => {
  console.log("cambiarFecha");

  const alumnos = await Alumno.find();

  alumnos.map((i) => {
    const ejecu = async () => {
      if (i.horas == "96H") {
        //12

        i.fechaInicio = "2022-11-10";
        i.fechaFin = "2022-11-25";
      }

      if (i.horas == "144H") {
        //18

        i.fechaInicio = "2022-11-10";
        i.fechaFin = "2022-12-05";
      }

      if (i.horas == "240") {
        //30

        i.fechaInicio = "2022-11-10";
        i.fechaFin = "2022-12-21";
      }

      if (i.horas == "480H") {
        //60

        i.fechaInicio = "2022-11-10";
        i.fechaFin = "2023-02-01";
      }

      const { _id, ...resto } = i;

      const alumno = await Alumno.findByIdAndUpdate(_id, resto, {
        new: true,
      });

      console.log("alumno");
      console.log(alumno);
    };

    ejecu();
  });

  // console.log(alumnos);

  res.json({ alumnos });
};

module.exports = {
  buscarCedula,
  buscarAlumnoID,
  buscarTodasAlumno,
  crearAlumno,
  actualizarAlumno,
  borarAlumno,
  resetear,
  cambiarFecha,
};
