const Admin = require("../../models/admin");
const Alumno = require("../../models/alumno");
const Institucion = require("../../models/institucion");
const Supervisora = require("../../models/supervisora");
const Tutora = require("../../models/tutora");

const ingresarAdmin = async (req, res) => {

    // console.log(req.body)

    const usuario = new Admin(req.body);

    await usuario.save();

    console.log("Admin Guardado")
    res.json({msg: "Admin Guardado"})

}

const ingresarAlumnos = async (req, res) => {

    let todo = req.body

    todo.grupo = "G0"

    const usuario = new Alumno(todo);

    await usuario.save();

    console.log("Alumno Guadado")
    res.json({msg: "Alumno Guadado"})

}


const ingresarInstituciones = async (req, res) => {

    let todo = req.body

    todo.grupo = [
        {
            nombre: "G0",
            cantidad: "100",
            fecha: "2022-08-01",
            usuarios: [],
        },
      ]

    const usuario = new Institucion(todo);

    await usuario.save();

    console.log("Institucione Guardada")
    res.json({msg: "Institucione Guardada"})

}

const ingresarSupervisoras = async (req, res) => {

    const usuario = new Supervisora(req.body);

    await usuario.save();

    console.log("ingresarSupervisoras")
    res.json({msg: "Supervisora Guardada"})

}

const ingresarTutoras = async (req, res) => {

    const usuario = new Tutora(req.body);

    await usuario.save();

    console.log("ingresarTutoras")
    res.json({msg: "Tutora Guardada"})

}


module.exports = {
    ingresarAdmin,
    ingresarAlumnos,
    ingresarInstituciones,
    ingresarSupervisoras,
    ingresarTutoras,
};
