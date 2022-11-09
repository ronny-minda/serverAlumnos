const { Router } = require("express");
const {
  buscarCedula,
  buscarAlumnoID,
  buscarTodasAlumno,
  crearAlumno,
  actualizarAlumno,
  borarAlumno,
  resetear,
  cambiarFecha,
} = require("../controllers/alumno");

const router = Router();

router.get("/buscarAlumnoID", buscarAlumnoID);

router.post("/buscarCedula", buscarCedula);

router.post("/buscarTodasAlumno", buscarTodasAlumno);

router.post("/crearAlumno", crearAlumno);

router.put("/actualizarAlumno", actualizarAlumno);

router.post("/borarAlumno", borarAlumno);

router.post("/resetear", resetear);

router.post("/cambiarFecha", cambiarFecha);

module.exports = router;
